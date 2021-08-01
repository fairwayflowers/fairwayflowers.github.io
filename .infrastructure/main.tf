terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-east-1"
  default_tags {
    tags = {
      Project = "FairwayFlowers"
    }
  }
}

resource "aws_s3_bucket" "fairway_flowers_bucket" {
  bucket        = "fairway-flowers-website"
  acl           = "private"
  force_destroy = true

}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "cloudfront origin access identity"
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.fairway_flowers_bucket.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"]
    }
  }

  statement {
    actions   = ["s3:ListBucket"]
    resources = ["${aws_s3_bucket.fairway_flowers_bucket.arn}"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"]
    }
  }
}

resource "aws_s3_bucket_policy" "policy_for_cloudfront" {
  bucket = aws_s3_bucket.fairway_flowers_bucket.id
  policy = data.aws_iam_policy_document.s3_policy.json
}

resource "aws_cloudfront_distribution" "blog_assets_distribution" {
  enabled = true

  aliases = ["*.fairwayflowers.co.uk","fairwayflowers.leejohnmartin.dev"]

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:553904485373:certificate/8362b708-d8bb-4d2c-a2f1-aa93301eaf6f"
    ssl_support_method  = "sni-only"
  }

  comment             = ""
  default_root_object = "index.html"
  price_class         = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "GB", "DE"]
    }
  }


  origin {
    domain_name = aws_s3_bucket.fairway_flowers_bucket.bucket_domain_name
    # just some unique ID of the origin
    origin_id = "s3_blog_assets_origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3_blog_assets_origin"
    compress         = true
    forwarded_values {
      query_string            = true
      query_string_cache_keys = ["v"]
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect-to-https"


    lambda_function_association {
      event_type = "origin-request"
      lambda_arn   = aws_lambda_function.html-remap-lambda.qualified_arn
      include_body = false
    }

    # Time for which the files will be stored in cache (12h)
    min_ttl = 43200
    default_ttl = 43200
    max_ttl = 43200
  }
  ordered_cache_behavior {
    path_pattern     = "/images/*"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3_blog_assets_origin"
    compress         = false
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    viewer_protocol_policy = "redirect-to-https"

    # 24h * 3
    min_ttl = 259200
    default_ttl = 259200
    max_ttl = 259200
  }
}

data "archive_file" "htmlremap-zip" {
  type        = "zip"
  source_file = "edge-lambda/dist/htmlremap/handler.js"
  output_path = "edge-lambda/dist/htmlremap/handler.zip"
}


resource "aws_iam_role_policy" "cdn-lambda-execution" {
  name_prefix = "lambda-execution-policy-"
  role        = aws_iam_role.cdn-lambda-execution.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:CreateLogGroup"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF
}

resource "aws_iam_role" "cdn-lambda-execution" {
  name_prefix        = "lambda-execution-role-"
  description        = "Managed by Terraform"
  assume_role_policy = <<EOF
{
   "Version": "2012-10-17",
   "Statement": [
      {
         "Effect": "Allow",
         "Principal": {
            "Service": [
               "lambda.amazonaws.com",
               "edgelambda.amazonaws.com"
            ]
         },
         "Action": "sts:AssumeRole"
      }
   ]
}
EOF
}

resource "aws_lambda_function" "html-remap-lambda" {
  filename         = "edge-lambda/dist/htmlremap/handler.zip"
  function_name    = "htmlremap"
  role             = aws_iam_role.cdn-lambda-execution.arn
  handler          = "handler.handler"
  source_code_hash = data.archive_file.htmlremap-zip.output_base64sha256
  runtime          = "nodejs14.x"
  publish = true
}

import { CloudFrontRequestEvent } from "aws-lambda";

const hasExtension = /(.+)\.[a-zA-Z0-9]{2,5}$/;

export const handler = async (event: CloudFrontRequestEvent, context: unknown) => {
    const request = event.Records[0].cf.request;
    const url: string = request.uri;

    if (url && !url.match(hasExtension)) {
        request.uri = `${url}.html`;
    }

    return request;
}

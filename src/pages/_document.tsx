import Document, { Html, Head, Main, NextScript } from 'next/document'

class FairwayFlowersDocument extends Document {
  render() {
    return (
      <Html>
        <Head>      
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default FairwayFlowersDocument
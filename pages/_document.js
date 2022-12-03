import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/EuclidFlex-Light.woff"
            as='font'
            type='woff'
            crossOrigin='anonymous'
          />
          <link
            rel="preload"
            href="/fonts/EuclidFlex-Regular.woff"
            as='font'
            type='woff'
            crossOrigin='anonymous'
          />
          <link
            rel="preload"
            href="/fonts/EuclidFlex-Medium.woff"
            as='font'
            type='woff'
            crossOrigin='anonymous'
          />
          <link
            rel="preload"
            href="/fonts/EuclidFlex-Semibold.woff"
            as='font'
            type='woff'
            crossOrigin='anonymous'
          />
          <link
            rel="preload"
            href="/fonts/EuclidFlex-Bold.woff"
            as='font'
            type='woff'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument;
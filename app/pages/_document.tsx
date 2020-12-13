import { Document, Html, DocumentHead, Main, BlitzScript, Head /*DocumentContext*/ } from "blitz"
import { ColorModeScript } from "@chakra-ui/color-mode"
import { ClientConstants } from "utils/constants/client"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="/fonts/silka/stylesheet.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-6353F1BVDT" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', '${ClientConstants.gtagTrackingId}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />
        </DocumentHead>
        <body>
          <ColorModeScript />
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

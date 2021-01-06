import { Document, Html, DocumentHead, Main, BlitzScript } from "blitz";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { ClientConstants } from "utils/constants/client";

class MyDocument extends Document {
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
          {ClientConstants.isProd && (
            <>
              <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
              <noscript>
                <img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" />
              </noscript>
            </>
          )}
        </DocumentHead>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <BlitzScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

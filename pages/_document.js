import Document from "next/document";
import { ServerStyleSheet, ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import theme from "../styles/theme";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <ThemeProvider theme={theme}>
                <GlobalStyles />
                <App {...props} />
              </ThemeProvider>
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        head: (
          <>
            {initialProps.head}
            <link
              href="https://fonts.googleapis.com/css2?family=Bungee&family=Ubuntu:wght@300;400&display=swap"
              rel="stylesheet"
            />
          </>
        ),
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

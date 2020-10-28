import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      const initialProps = await Document.getInitialProps(ctx);

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      return {
        ...initialProps,
        head: [
          <>
            {initialProps.head}
            <link
              href="https://fonts.googleapis.com/css2?family=Bungee&family=Cambay:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </>,
        ],
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;

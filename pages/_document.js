import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  // Add style-components to next.js and start using it
  static async getInitialProps(
    ctx
  ) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx) ;

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }


  // Document template
  render() {
    return (
      <Html lang="en">
        {/* Meta Data */}
        <Head>
          {/* <style>
            {
             ` 
              @import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=block) ;
              @import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&display=block) ;
              @import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&display=block) ;
              `
            }
          </style> */}
        </Head>
        <body>
          <div id = "wrap">
            {/* Pages rendering */}
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }

}


import { ThemeProvider } from 'styled-components'
import { CookiesProvider } from 'react-cookie'
import { GlobalStyle } from 'styles/GlobalStyle'
import theme from 'styles/theme'

import Head from 'next/head'
import { siteTitle } from 'util/text' 

// swiper styled
import 'swiper/css'
import 'swiper/css/navigation'

// markdown editor
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

import 'styles/font.css'

import { HOME } from 'util/text'
import Seo from 'components/Seo'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>{ siteTitle }</title>
        <Seo 
          title = { siteTitle }
          url = { HOME }
          description = "Let me introduce the developer Kim Heesu."
        />
      </Head>
      <CookiesProvider>
        <ThemeProvider theme = { theme }>
          <GlobalStyle/>
          <Component 
            {...pageProps}
          />
        </ThemeProvider>
      </CookiesProvider>
    </>
  ) ;
}


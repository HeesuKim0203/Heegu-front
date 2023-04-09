import { ThemeProvider } from 'styled-components'
import { CookiesProvider } from 'react-cookie'
import { GlobalStyle } from 'styles/GlobalStyle'
import theme from 'styles/theme'

// swiper styled
import 'swiper/css'
import 'swiper/css/navigation'

// markdown editor
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

import 'styles/font.css'

export default function App({ Component, pageProps }) {
  return (
      <CookiesProvider>
        <ThemeProvider theme = { theme }>
          <GlobalStyle/>
          <main>
            <Component 
              {...pageProps}
            />
          </main>
        </ThemeProvider>
      </CookiesProvider>
  ) ;
}


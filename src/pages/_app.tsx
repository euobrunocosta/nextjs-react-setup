import React from 'react'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'

import { AppProps } from 'next/app'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

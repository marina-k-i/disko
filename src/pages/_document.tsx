import { ColorModeScript } from '@chakra-ui/react'
import { createGetInitialProps } from '@mantine/next'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import theme from '../components/Layout/theme'

const getInitialProps = createGetInitialProps()
export default class Document extends NextDocument {
  static getInitialProps = getInitialProps
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

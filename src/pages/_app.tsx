import { MantineProvider } from '@mantine/core'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'dark',
            colors: {
              brand: ['#202020'],
              dark: [
                '#d5d7e0',
                '#acaebf',
                '#8c8fa3',
                '#666980',
                '#4d4f66',
                '#34354a',
                '#2b2c3d',
                '#0F0F0F', //background
                '#0c0d21',
                '#01010a',
              ],
              // dark: [
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',
              //   '#0F0F0F',

              //   // '#A6A7AB',
              //   // '#909296',
              //   // '#5C5F66',
              //   // '#373A40',

              //   // '#2C2E33',
              //   // '#25262B',
              //   // '#1A1B1E',
              //   // '#0F0F0F',

              //   // '#101113',
              // ],
            },
            primaryColor: 'brand',
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </>
  )
}

export { reportWebVitals } from 'next-axiom'

// // *.ts - structured logging from client, edge, or server-side files
// import { log } from 'next-axiom'

// log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })

export default App

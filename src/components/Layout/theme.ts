import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const globalStyles = {
  colors: {
    light: {
      100: '#F2F4F8',
    }, dark: {
      100: '#1C1C1C',
    },
    logo: {
      100:"#B3C8FE" ,
    }
  },
  Heading: {
    sizes: {
      lg: {
        h: '56px',
        fontSize: 'sm',
        px: '32px',
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        overflowX: 'hidden',
        bg: mode('light.100', 'dark.100')(props),
        fontFamily:"body",
        letterSpacing: '-0.5px',
      },
      input: {
        color: 'gray.700',
      },
      html: {
        fontFamily: 'DM Sans',
      },
    }),
  },
}

// 3. extend the theme
const theme = extendTheme({ config }, globalStyles)

export default theme

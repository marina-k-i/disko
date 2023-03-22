import { Box, BoxProps } from '@chakra-ui/react'
import { FC } from 'react'
import { HeaderMenu } from './Header'

export const Layout: FC<BoxProps> = (props) => {
  return (
    <Box>
      <HeaderMenu />
      <>{props.children}</>
    </Box>
  )
}

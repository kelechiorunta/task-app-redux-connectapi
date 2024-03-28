import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
          50: '#e5f4fb',
          // Add more shades as needed
        },
      },
      fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Poppins, sans-serif',
      },
})

function AppThemeProvider({children}) {
  return (
    <ChakraProvider theme={theme}>
        {children}
    </ChakraProvider>
  )
}

export default AppThemeProvider
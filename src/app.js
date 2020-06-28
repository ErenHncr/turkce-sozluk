import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import theme from './utils/theme'
import Navigation from './navigation'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App

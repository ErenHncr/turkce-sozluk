import React from 'react'
import { ImageBackground, StatusBar, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import { Logo } from '../components/icons'
import Search from '../components/search'
import bg from '../assets/bg.jpg'
import theme from '../utils/theme'

function SearchView() {
  const [isSearchFocus, setSearchFocus] = React.useState(false)

  // Change statusbar colors
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
      StatusBar.setBackgroundColor(theme.colors.red)
    }, [])
  )

  return (
    <Box as={SafeAreaView} bg='softRed'>
      {/* Header */}
      <Box position='relative' zIndex={1} height={isSearchFocus ? 40 : 285}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Logo */}
          <Box flex={1} mt={-40} alignItems='center' justifyContent='center'>
            <Logo width={120} color='white' />
          </Box>

          {/* Search */}
          <Box p={16} width='100%' mb={-42}>
            <Search onChangeFocus={status => setSearchFocus(status)} />
          </Box>
        </Box>
      </Box>
      {/* Content */}
      <Box flex={1} bg='yellow' pt={26}>
        <Box p={30} flex={1}>
          <Text>Hello</Text>
        </Box>
      </Box>
      {/* <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Detail')}
      /> */}
      {/* top and bottom padding = py */}
    </Box>
  )
}

export default SearchView

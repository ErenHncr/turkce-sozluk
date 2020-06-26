import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// Views
import SearchView from './views/search'
import HistoryView from './views/history'
import FavoritesView from './views/favorites'
import DetailView from './views/detail'
// Components
import TabBar from './components/tab-bar'
import Box from './components/box'
// Utils
import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const SearchStack = createStackNavigator()

function SearchStackScreen() {
  return (
    <SearchStack.Navigator headerMode='none'>
      <SearchStack.Screen name='Search' component={SearchView} />
      <SearchStack.Screen name='Detail' component={DetailView} />
    </SearchStack.Navigator>
  )
}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Search'
            tabBar={props => <TabBar {...props} />}
          >
            <Tab.Screen name='History' component={HistoryView} />
            <Tab.Screen name='Search' component={SearchStackScreen} />
            <Tab.Screen name='Favorites' component={FavoritesView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App

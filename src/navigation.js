import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

// Views
import SearchView from './views/search'
import HistoryView from './views/history'
import FavoritesView from './views/favorites'
import DetailView from './views/detail'
// Components
import TabBar from './components/tab-bar'
import Button from './components/button'
import { Left, More } from './components/icons'
// Utils
import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const SearchStack = createStackNavigator()

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={() => {
          return {
            headerShown: false
          }
        }}
        name='Search'
        component={SearchView}
      />
      <SearchStack.Screen
        name='Detail'
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            title: (route.params && route.params.title) || 'Boş',
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              elevation: 0
            },
            headerLeft: () => (
              <Button
                height='100%'
                px={15}
                onPress={() => {
                  navigation.navigate('Search')
                }}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                height='100%'
                px={20}
                onPress={() => {
                  navigation.navigate('Search')
                }}
              >
                <More color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
    </SearchStack.Navigator>
  )
}
const TabNavigator = () => {
  return (
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
  )
}

export default TabNavigator

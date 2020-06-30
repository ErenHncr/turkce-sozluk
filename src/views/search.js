import React from 'react'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'

import SuggestionCard from '../components/suggestion-card'
import SearchHistoryList from '../components/search-history-list'
import HomeSearch from '../components/home-search'

import theme from '../utils/theme'

// Storage
import AsyncStorage from '@react-native-community/async-storage'

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [homeData, setHomeData] = React.useState({})
  const [searched, setSearched] = React.useState([])

  const getSearched = async () => {
    await AsyncStorage.getItem('searched').then((res) => {
      if (res != undefined) setSearched(JSON.parse(res))
    })
  }

  React.useEffect(() => {
    getSearched()
    const getHomeData = async () => {
      // for the below fetch to work 'adb reverse tcp:3000 tcp:3000'
      // command should be used
      try {
        await fetch('https://sozluk.gov.tr/icerik')
          .then((response) => response.json())
          .then((data) => {
            setHomeData({
              atasoz: data.atasoz[0],
              kelime: data.kelime[0]
            })
          })
      } catch (error) {
        alert('kelime bulunamadı!')
      }
    }
    getHomeData()
  }, [setSearched])

  // Change statusbar colors
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
      StatusBar.setBackgroundColor(
        isSearchFocus ? theme.colors.softRed : theme.colors.red
      )
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'}>
      {/* Header */}
      <HomeSearch
        navigation={navigation}
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
        onSubmitEditing={getSearched}
      />

      {/* Content */}
      <Box bg='softRed' pt={!isSearchFocus ? 26 : 0}>
        {isSearchFocus ? (
          <Box>
            <SearchHistoryList
              navigation={navigation}
              data={searched.reverse()}
            />
          </Box>
        ) : (
          <Box px={16} py={30}>
            <SuggestionCard
              data={homeData.kelime}
              title='Bir Kelime'
              onPress={() =>
                navigation.navigate('Detail', {
                  title: 'Detay',
                  keyword: homeData?.kelime?.madde
                })
              }
            />

            <SuggestionCard
              mt={20}
              data={homeData.atasoz}
              title='Bir Deyim - Atasözü'
              onPress={() =>
                navigation.navigate('Detail', {
                  title: 'Detay',
                  keyword: homeData?.atasoz?.madde
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView

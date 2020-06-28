import React from 'react'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'

import SuggestionCard from '../components/suggestion-card'
import SearchHistoryList from '../components/search-history-list'
import HomeSearch from '../components/home-search'

import theme from '../utils/theme'

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [homeData, setHomeData] = React.useState({
    kelime: {
      madde: 'on para',
      anlam: 'çok az (para).'
    },
    atasoz: {
      madde: 'kitabında yer almamak',
      anlam: 'aklına ve mantığına aykırı düşmek'
    }
  })

  React.useEffect(() => {
    const getHomeData = async () => {
      // for the below fetch to work 'adb reverse tcp:3000 tcp:3000'
      // command should be used
      try {
        await fetch('https://sozluk.gov.tr/icerik')
          .then(response => response.json())
          .then(data => {
            setHomeData({
              atasoz: data.atasoz[0],
              kelime: data.kelime[0]
            })
          })
      } catch (error) {
        console.log(error)
      }
    }
    getHomeData()
  }, [])

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
        isSearchFocus={isSearchFocus}
        onSearchFocus={setSearchFocus}
      />

      {/* Content */}
      <Box bg='softRed' pt={!isSearchFocus ? 26 : 0}>
        {isSearchFocus ? (
          <Box>
            <SearchHistoryList data={[{ id: '1', title: 'ben' }]} />
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

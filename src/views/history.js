import React from 'react'
import { Text, StatusBar, Platform } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Box from '../components/box'
// import ModalComponent from '../components/modal'
import SearchHistoryList from '../components/search-history-list'

import { useFocusEffect } from '@react-navigation/native'

// Storage
import AsyncStorage from '@react-native-community/async-storage'

function HistoryView({ navigation, route }) {
  let [searched, setSearched] = React.useState([])
  const [checkCount, setCheckCount] = React.useState(1)

  useFocusEffect(
    React.useCallback(() => {
      // set status bar
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
      getSearched()
    }, [searched, setSearched, getSearched])
  )

  const getSearched = async () => {
    await AsyncStorage.getItem('searched').then(res => {
      if (res != undefined) setSearched(JSON.parse(res))
    })
  }

  return (
    <Box as={SafeAreaView} flex={1}>
      {getSearched === undefined ? (
        <Text>Arama Geçmişi</Text>
      ) : (
        <>
          <SearchHistoryList
            checkCount={checkCount}
            setCheckCount={setCheckCount}
            routeName={route.name}
            title='Arama Geçmişi'
            navigation={navigation}
            data={checkCount > 0 ? searched : searched.reverse()}
          />
        </>
      )}
    </Box>
  )
}

export default HistoryView

import React from 'react'
import { Text, StatusBar, Platform, FlatList } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Box from '../components/box'
import { useFocusEffect } from '@react-navigation/native'

function HistoryView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [])
  )
  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Arama Geçmişi</Text>
    </Box>
  )
}

export default HistoryView

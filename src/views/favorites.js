import React from 'react'
import { Text, View, StatusBar } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

function FavoritesView() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [])
  )
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favoriler</Text>
    </View>
  )
}

export default FavoritesView

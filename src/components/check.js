import React from 'react'

import Button from './button'
import { Right, Check } from './icons'
// Storage
import AsyncStorage from '@react-native-community/async-storage'

export default function RightCheck({ name }) {
  const [checked, setChecked] = React.useState(false)

  const setCheckedItems = async name => {
    //await AsyncStorage.removeItem('checked')
    try {
      let temp = []
      const oldChecked = await AsyncStorage.getItem('checked')
      temp = JSON.parse(oldChecked)
      if (temp == null || temp == undefined || temp == []) {
        await AsyncStorage.setItem('checked', JSON.stringify([name]))
      } else {
        let filtered
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === name) {
            filtered = temp.filter(item => item != name)
          } else {
            filtered = temp.concat(name)
          }
        }
        await AsyncStorage.setItem('checked', JSON.stringify(filtered))
      }
    } catch (e) {
      // saving error
    }
  }

  return (
    <Button
      ml='auto'
      height='100%'
      onLongPress={() => {
        setChecked(!checked)
        setCheckedItems(name)
      }}
    >
      {checked ? <Check color='red' /> : <Right color='red' />}
    </Button>
  )
}

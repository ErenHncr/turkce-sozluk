import React, { Component, useState } from 'react'
import { Modal, Dimensions } from 'react-native'

import Box from './box'
import Button from './button'
import ActionButton from './action-button'
import Text from './text'

import AsyncStorage from '@react-native-community/async-storage'

function ModalComponent({ clicked }) {
  const [modalVisible, setModalVisible] = useState(false)

  React.useEffect(() => {
    if (clicked) {
      setModalVisible(true)
    }
  }, [clicked, setModalVisible])

  const setItems = async () => {
    try {
      let temp = []
      const oldSearched = await AsyncStorage.getItem('searched')
      const oldChecked = await AsyncStorage.getItem('checked')
      temp = JSON.parse(oldChecked)
      let tempSearched = JSON.parse(oldSearched)
      let filtered = []
      for (let i = 0; i < temp.length; i++) {
        filtered = tempSearched.filter(item => item != temp[i])
      }
      await AsyncStorage.setItem('checked', JSON.stringify([]))
      await AsyncStorage.setItem('searched', JSON.stringify(filtered))
      console.log(filtered)
      alert('yok')
    } catch (e) {
      // saving error
      alert(e)
    }
  }

  return (
    <Box
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Modal
        statusBarTranslucent={false}
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <Box
          flexDirection='column'
          px={16}
          py={24}
          height='100%'
          top={(Dimensions.get('window').width * 10) / 8.8}
          bg='white'
          opacity={40}
          border={1}
          borderColor='light'
        >
          <Box flexDirection='row'>
            <ActionButton
              width='48%'
              bg='red'
              mr={15}
              borderRadius='normal'
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Text color='white' fontWeight='bold'>
                Sil
              </Text>
            </ActionButton>
            <ActionButton
              width='48%'
              bg='light'
              borderRadius='normal'
              onPress={setItems}
            >
              <Text color='textMedium' fontWeight='bold'>
                Tümünü Seç
              </Text>
            </ActionButton>
          </Box>
          <Box>
            <Button
              mt={32}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Text color='textLight' fontWeight='bold'>
                Vazgeç
              </Text>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}

export default ModalComponent

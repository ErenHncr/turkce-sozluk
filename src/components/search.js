import React from 'react'
import { Text, Keyboard } from 'react-native'
import Box from './box'
import Input from './input'
import { Search, Close } from './icons'
import Button from './button'
import theme from '../utils/theme'

function SearchBox({ onChangeFocus }) {
  const [value, setValue] = React.useState('')
  const [isFocus, setFocus] = React.useState(false)
  // Change focus state
  React.useEffect(() => {
    onChangeFocus(isFocus)
  }, [isFocus, onChangeFocus])

  const onCancel = () => {
    setFocus(false)
    setValue('')
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection='row' alignItems='center'>
      <Box position='relative' flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: { width: 0, height: 4 }
          }}
          bg='white'
          height={52}
          color='textDark'
          borderWidth={1}
          borderColor={isFocus ? '#D1D1D1' : 'transparent'}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor='textMedium'
          pl={52}
          borderRadius='normal'
          value={value}
          onFocus={() => {
            setFocus(true)
          }}
          onChangeText={text => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={onClear} position='absolute' right={16} top={14}>
            <Close color={theme.colors.textDark} />
          </Button>
        )}

        <Button position='absolute' ml='auto' left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
      </Box>
      {isFocus && (
        <Button px={15} height={52} onPress={onCancel}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox

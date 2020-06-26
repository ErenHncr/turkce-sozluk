import { TextInput } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  color,
  size,
  typography,
  space,
  shadow,
  borderRadius
} from 'styled-system'
import theme from '../utils/theme'

const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
}))(
  compose(
    typography,
    space,
    color,
    size,
    shadow,
    borderRadius
  )
)

export default Input

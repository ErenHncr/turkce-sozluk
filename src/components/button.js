import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import {
  position,
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius
} from 'styled-system'

const Button = styled(TouchableOpacity)(
  compose(
    flexbox,
    space,
    color,
    size,
    layout,
    borderRadius,
    position
  )
)

Button.defaultProps = {
  flexDirection: 'row', // side by side
  alignItems: 'center',
  justifyContent: 'center'
}

export default Button

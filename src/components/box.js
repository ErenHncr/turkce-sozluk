import { View } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius
} from 'styled-system'

const Box = styled(View)(
  compose(
    flexbox,
    space,
    color,
    size,
    border,
    borderRadius
  )
)

export default Box

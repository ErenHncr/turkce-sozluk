import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgCheck(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox='0 0 32 32'
      fill='none'
      className=''
      {...props}
    >
      <Path
        d='M16 2.667C8.648 2.667 2.667 8.648 2.667 16S8.648 29.333 16 29.333 29.333 23.352 29.333 16 23.352 2.667 16 2.667zm-2.665 19.217l-4.951-4.94 1.883-1.888 3.065 3.06 7.059-7.059 1.885 1.886-8.941 8.941z'
        fill='currentColor'
      />
    </Svg>
  )
}

export default SvgCheck

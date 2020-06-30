import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgRight(props) {
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
        d='M13 7l9 9-9 9-2.23-2.23L17.54 16l-6.77-6.77L13 7z'
        fill='currentColor'
      />
    </Svg>
  )
}

export default SvgRight

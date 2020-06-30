import React from 'react'
import { Animated, Dimensions } from 'react-native'
import Box from './box'
import Bg from './bg'
import Search from './search'
import { Logo } from './icons'

const HEROHEIGHT = 230
function HomeSearch({
  navigation,
  isSearchFocus,
  onSearchFocus,
  onSubmitEditing
}) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HEROHEIGHT))

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230,
        useNativeDriver: false
      }).start()
      Animated.timing(heroHeight, {
        toValue: 52 + 32,
        duration: 230,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230,
        useNativeDriver: false
      }).start()
      Animated.timing(heroHeight, {
        toValue: HEROHEIGHT,
        duration: 230,
        useNativeDriver: false
      }).start()
    }
  }, [isSearchFocus, heroHeight, bgOpacity])

  return (
    <Box
      as={Animated.View}
      position='relative'
      zIndex={1}
      //isSearchFocus ? 84 : 285
      height={heroHeight}
    >
      <Box as={Animated.View} mt={-60} style={{ opacity: bgOpacity }}>
        <Bg pt={140} pb={26}>
          {/* Logo */}
          <Box
            ml={Dimensions.get('window').width / 2 - 165}
            alignItems='center'
            justifyContent='center'
          >
            <Logo width={120} color='white' />
          </Box>
        </Bg>
      </Box>

      {/* Search */}
      <Box
        position='absolute'
        left={0}
        bottom={isSearchFocus ? 0 : -42}
        p={16}
        width='100%'
      >
        <Search
          onSubmitEditing={onSubmitEditing}
          navigation={navigation}
          onChangeFocus={status => onSearchFocus(status)}
        />
      </Box>
    </Box>
  )
}

export default HomeSearch

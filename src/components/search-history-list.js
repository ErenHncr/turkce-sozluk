import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'

import Box from './box'
import Text from './text'
import Button from './button'
import theme from '../utils/theme'
import RightCheck from './check'
import { More } from './icons'
import ModalComponent from '../components/modal'
import { SimpleCardContainer, SimpleCardTitle } from './simple-card'

function SearchHistoryList({ navigation, data, title, routeName }) {
  const [clicked, setClicked] = React.useState(false)
  return (
    <>
      <FlatList
        onItemClick={e => {
          console.log(e.target)
        }}
        style={{ padding: 16 }}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <Box flexDirection='row'>
            <Text color='textLight' mb={10}>
              {title}
            </Text>
            <Button
              ml='auto'
              mt={-5}
              onPress={() => {
                setClicked(!clicked)
              }}
            >
              <More color={theme.colors.textMedium} />
            </Button>
          </Box>
        }
        data={data}
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <Box py={6} px={0} key={index}>
            <SimpleCardContainer
              onPress={() =>
                navigation.navigate('Detail', {
                  title: 'Detay',
                  keyword: item
                })
              }
            >
              <SimpleCardTitle>{item}</SimpleCardTitle>
              {routeName === 'History' && <RightCheck name={item} />}
            </SimpleCardContainer>
          </Box>
        )}
      />
      <ModalComponent clicked={clicked} />
    </>
  )
}

export default SearchHistoryList

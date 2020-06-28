import React from 'react'
import { FlatList } from 'react-native'

import Box from './box'
import Text from './text'
import { SimpleCardContainer, SimpleCardTitle } from './simple-card'

function SearchHistoryList({ data }) {
  return (
    <FlatList
      style={{ padding: 16 }}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <Text color='textLight' mb={10}>
          Son Aramalar
        </Text>
      }
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Box py={6} px={0} key={item.id}>
          <SimpleCardContainer>
            <SimpleCardTitle>{item.title}</SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
    />
  )
}

export default SearchHistoryList

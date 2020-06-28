import React from 'react'

import Box from './box'
import Text from './text'
import { CardContainer, CardTitle, CardSummary } from './card'

function SuggestionCard({ title, onPress, data, ...props }) {
  return (
    <Box {...props}>
      <Text color='textLight'>{title}</Text>

      <CardContainer mt={10} onPress={onPress}>
        <CardTitle>{data.madde}</CardTitle>
        <CardSummary>{data.anlam}</CardSummary>
      </CardContainer>
    </Box>
  )
}

export default SuggestionCard

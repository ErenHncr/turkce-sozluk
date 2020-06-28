import React from 'react'

import Box from './box'
import Text from './text'
export function DetailSummaryItemContainer({
  children,
  order,
  type,
  border,
  ...props
}) {
  return (
    <Box position='relative' bg='white' px={26} py={20} {...props}>
      {border && (
        <Box
          position='absolute'
          left={12}
          right={12}
          top={0}
          height={1}
          bg='light'
        />
      )}
      <Box flexDirection='row'>
        {order && (
          <Text color='textLight' ml={-14} mr={6}>
            {order}
          </Text>
        )}
        {type && <Text color='red'>{type}</Text>}
      </Box>
      <Box mt={8}>{children}</Box>
    </Box>
  )
}

export function DetailSummaryItemTitle({ children, ...props }) {
  return <Text fontWeight='600'>{children}</Text>
}

export function DetailSummaryItemSummary({ children, ...props }) {
  return (
    <Text ml={10} mt={12} fontWeight='500' color='textLight'>
      {children}
    </Text>
  )
}

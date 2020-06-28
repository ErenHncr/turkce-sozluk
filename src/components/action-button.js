import React from 'react'
import Button from './button'
import Text from './text'
function ActionButton({ children, ...props }) {
  return (
    <Button
      style={{
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 0.16,
        shadowRadius: 4,
        elevation: 4,
        shadowOffset: {
          width: 0,
          height: 2
        }
      }}
      minWidth='actionButton'
      height='actionButton'
      borderRadius='full'
      bg='white'
      px={8}
      {...props}
    >
      {children}
    </Button>
  )
}

export function ActionButtonTitle({ children, ...props }) {
  return (
    <Text color='textLight' fontWeight='bold' mx={8} {...props}>
      {children}
    </Text>
  )
}

export default ActionButton

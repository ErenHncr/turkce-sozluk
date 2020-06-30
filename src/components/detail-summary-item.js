import React from 'react'

import Box from './box'
import Text from './text'
export default function DetailSummaryItem({
  data,
  index,
  children,
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
      {/* body */}
      {data ? (
        <Box>
          <Box flexDirection='row'>
            <Text color='textLight' ml={-14} mr={6}>
              {data.anlam_sira}
            </Text>
            <Text color='red'>
              {data.ozelliklerListe
                ? data?.ozelliklerListe?.map((item, index) =>
                    item.tam_adi == 'isim'
                      ? 'İSİM'
                      : index > 0 && ', ' + item.tam_adi.toLocaleUpperCase('TR')
                  )
                : 'İSİM'}
            </Text>
          </Box>
          <Box mt={8}>
            <Text fontWeight='600'>{data.anlam}</Text>
            {data?.orneklerListe && (
              <>
                <Text ml={10} mt={12} fontWeight='500' color='textLight'>
                  {data?.orneklerListe[0].ornek}
                  <Text ml={10} fontWeight='700' color='textLight'>
                    {data?.orneklerListe[0]?.yazar_id !== '0' &&
                      ` - ${data?.orneklerListe[0]?.yazar[0]?.tam_adi}`}
                  </Text>
                </Text>
              </>
            )}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}

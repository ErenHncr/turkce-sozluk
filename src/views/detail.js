import React from 'react'
import { StatusBar, Platform, ScrollView } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'

import Box from '../components/box'
import Text from '../components/text'
import {
  DetailSummaryItemContainer,
  DetailSummaryItemTitle,
  DetailSummaryItemSummary
} from '../components/detail-summary-item'
import theme from '../utils/theme'
import {
  Sound,
  Hand,
  Favorite,
  SoundSolid,
  HandSolid,
  FavoriteSolid
} from '../components/icons'
import ActionButton, { ActionButtonTitle } from '../components/action-button'
import LoaderText from '../components/LoaderText'

function DetailView({ route }) {
  //const keyword = route.params?.keyword
  const keyword = 'ana'
  const [data, setData] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1')
    }, [])
  )

  const getDetailData = async () => {
    // for the below fetch to work 'adb reverse tcp:3000 tcp:3000'
    // command should be used
    try {
      await fetch(
        `https://sozluk.gov.tr/gts?ara=${encodeURIComponent(keyword)}`
      )
        .then(response => response.json())
        .then(data => {
          setData(data[0])
          console.log(data[0].anlamlarListe[0].orneklerListe[0].ornek)
        })
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} bg='softRed' flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight='bold'>
            {keyword}
          </Text>
          <Text color='textLight' mt={6}>
            {data?.telaffuz && `(${data?.telaffuz})`} {data?.lisan}
          </Text>
        </Box>
        <Box flexDirection='row' mt={24}>
          <ActionButton disabled={!data}>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={12} disabled={!data}>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml='auto' disabled={!data}>
            <Hand width={24} height={24} color={theme.colors.textLight} />
            <ActionButtonTitle>Türk Dili İşareti</ActionButtonTitle>
          </ActionButton>
        </Box>
        <Box mt={32}>
          {!data
            ? [1, 2, 3].map(index => (
                <DetailSummaryItemContainer key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummaryItemContainer>
              ))
            : data.anlamlarListe.map(item => (
                <DetailSummaryItemContainer
                  key={item.anlam}
                  order='1'
                  type={item?.ozelliklerListe?.map(item => item.tam_adi)}
                >
                  <DetailSummaryItemTitle>{item.anlam}</DetailSummaryItemTitle>
                  {item?.orneklerListe && (
                    <DetailSummaryItemSummary>
                      {item.orneklerListe[0].ornek}
                    </DetailSummaryItemSummary>
                  )}
                </DetailSummaryItemContainer>
              ))}
          {/* - */}
        </Box>
      </Box>
    </Box>
  )
}

export default DetailView

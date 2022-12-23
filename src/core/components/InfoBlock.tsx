import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import InfoIcon from '../../../assets/svg/icon-info.svg';
import TextBlock from './TextBlock';

type InfoBlockProps = {
  text: string,
}

const InfoBlock: React.FC<InfoBlockProps> = ({text}) => {
  return (
    <View style={styles.blockWrapper}>
      <InfoIcon width={14} height={14} style={{marginRight: 10}}/>
      <TextBlock variant='caption' marginBottom={0} style={{width: '95%'}}>{text}</TextBlock>
    </View>
  )
}

export default InfoBlock

const styles = StyleSheet.create({
  blockWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'rgb(248, 248, 250)',
    marginBottom: 36,
  },
})
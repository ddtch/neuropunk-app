import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextBlock from './TextBlock';

type ChipsProps = {
  small?: boolean;
  color?: string;
  label: string;
}

const Chips:React.FC<ChipsProps> = ({small, color = 'rgb(250, 250, 250)', label}) => {
  return (
    <View style={{...styles.chipsHolder, backgroundColor: color}}>
      <TextBlock variant={'small'} marginBottom={0} align={'center'}>{label}</TextBlock>
    </View>
  )
}

export default Chips

const styles = StyleSheet.create({
  chipsHolder: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 50,
  },
  
})
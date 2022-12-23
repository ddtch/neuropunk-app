import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type LinkBtnProps = {
  link: string,
  onPress?: () => void,
  title: string;
}

const LinkBtn: React.FC<LinkBtnProps> = ({title, link, onPress}) => {
  return (
    <Pressable style={styles.linkHolder} onPress={() => onPress && onPress()}>
      <Text style={styles.linkText}>{title}</Text>
    </Pressable>
  )
}

export default LinkBtn

const styles = StyleSheet.create({
  linkHolder: {
    margin: 0,
    padding: 0,
  },
  linkText: {
    fontSize: 14,
    fontFamily: "System-medium",
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    lineHeight: 0
  }
})
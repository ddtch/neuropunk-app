import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BaseLayout from '../../core/components/layout/BaseLayout'
import MainHeaderBlock from '../../core/components/MainHeaderBlock'
import { useRoute } from '@react-navigation/native'

const ProfileScreen = () => {
  const { params } = useRoute<any>();
  const [text, setText] = useState('');


  useEffect(() => {
    console.log(params)
    setText(params?.screenName + ' screen not implemented yet!')
  }, [params])

  return (
    <BaseLayout centered>
      <MainHeaderBlock
        title='Comming soon!'
        text={text}
      />
    </BaseLayout>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
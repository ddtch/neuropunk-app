import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from './ProfileScreen';

const ProfileStack = createNativeStackNavigator();

const ProfileModule = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name={'profile'} component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileModule

const styles = StyleSheet.create({})
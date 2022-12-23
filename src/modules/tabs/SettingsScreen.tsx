import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseLayout from '../../core/components/layout/BaseLayout'
import MainButton from '../../core/components/MainButton'
import { useDispatch } from 'react-redux'
import { secureStorageService } from '../../core/services'
import { setFaceIdAvailability, setLoggedInStatus } from '../../store/auth.slice'

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    Alert.alert('Are you sure?', 'You are about lo logout from the app, do you also want to reset your faceID?', [
      {
        text: 'Reset & Logout',
        onPress: async () => {
          await secureStorageService.removeFromStorage('faceIdIsOn');
          dispatch(setLoggedInStatus(false));
        },
      },
      {
        text: 'Logout',
        onPress: async () => {
          dispatch(setLoggedInStatus(false));
          dispatch(setFaceIdAvailability(true));
        },
      }
    ])
  }
  return (
    <BaseLayout centered>
      <MainButton title='Log out' onPress={handleLogout} />
    </BaseLayout>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})
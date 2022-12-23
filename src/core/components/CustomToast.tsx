import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import IconSuccess from '../../../assets/svg/icon-success.svg';

export const toastConfig = {
  martianToast: ({ text1, props }: any) => (
    <View style={styles.toastHolder}>
      <IconSuccess width={20} height={20} style={{marginRight: 10,}}/>
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  )
};

type CustomToastProps = {
}

const CustomToast:React.FC<CustomToastProps> = ({}) => {
  return (
    <>
      <Toast config={toastConfig} type={'martianToast'} visibilityTime={2000}/>
    </>
  )
}

export default CustomToast

const styles = StyleSheet.create({
  toastHolder: {
    backgroundColor: '#000',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '90%',
  },
  toastText: {
    fontFamily: 'System-medium',
    color: '#fff',
    fontSize: 18,
  }
})
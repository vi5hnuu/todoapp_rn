import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tresetPassword, tverifyAccount } from '../redux/thunks/AuthThunks'


const ResetPassword = () => {
  const [otp, setOtp] = useState('')
  const [newpassword, setNewPassword] = useState('')
  const authS = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function onOtpChangeHandler(otp) {
    setOtp(otp)
  }
  function onNewPasswordChangeHandler(pass) {
    setNewPassword(pass)
  }
  function onResetPasswordHandler() {
    dispatch(tresetPassword(otp, newpassword))
  }

  return <View style={{ backgroundColor: '#fff', flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>Verify reset password</Text>
      <TextInput
        disabled={authS.pending}
        style={styles.input}
        keyboardType='numeric'
        placeholder='OTP'
        onChangeText={onOtpChangeHandler} />
      <TextInput
        disabled={authS.pending}
        style={styles.input}
        keyboardType='default'
        placeholder='new password'
        onChangeText={onNewPasswordChangeHandler} />
      <View style={{ gap: 7 }}>
        <Button
          disabled={authS.pending}
          onPress={onResetPasswordHandler}
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Reset Password</Button>
        <Button
          disabled={authS.pending}
          style={styles.btn}
          onPress={() => {
            navigation.goBack()
          }}
          textColor='#000'
        >Cancel</Button>
      </View>
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    margin: 7,
    gap: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '70%',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#495057',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 8
  },
  btn: {
    borderRadius: 5
  },
})
export default ResetPassword
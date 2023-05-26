import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tverifyAccount } from '../redux/thunks/AuthThunks'


const Verify = () => {
  const [otp, setOtp] = useState('')
  const authS = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function onOtpChangeHandler(otp) {
    setOtp(otp)
  }
  function onverifyAccount() {
    if (!otp.trim()) {
      return Alert.alert(`Hello user!`, '⚠️Please enter your otp.')
    }
    dispatch(tverifyAccount(otp))
  }

  return <View style={{ backgroundColor: '#fff', flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>Account Verification</Text>
      <TextInput
        disabled={authS.pending}
        style={styles.input}
        keyboardType='numeric'
        placeholder='OTP'
        onChangeText={onOtpChangeHandler} />
      <View style={{ gap: 7 }}>
        <Button
          disabled={authS.pending}
          onPress={onverifyAccount}
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Verify Otp</Button>
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
export default Verify
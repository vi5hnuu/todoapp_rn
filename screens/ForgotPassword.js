
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tverifyAccount } from '../redux/thunks/AuthThunks'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const authS = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function onEmailChangeHandler(emailTxt) {
    setEmail(emailTxt)
  }
  function onSentOtp() {
    if (!email.trim()) {
      return Alert.alert(`Hello user!`, '⚠️Please enter valid email address.')
    }
    // dispatch(tverifyAccount(otp))
  }

  return <View style={{ backgroundColor: '#fff', flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>Account Verification</Text>
      <TextInput
        disabled={authS.pending}
        style={styles.input}
        keyboardType='email-address'
        placeholder='xyz@gmail.com'
        onChangeText={onEmailChangeHandler} />
      <View style={{ gap: 7 }}>
        <Button
          disabled={authS.pending}
          onPress={onSentOtp}
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Send Otp</Button>
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

export default ForgotPassword
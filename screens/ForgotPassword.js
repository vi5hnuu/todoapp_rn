
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tForgotPassword } from '../redux/thunks/MessageThunk'
import { actions as MessageActions } from '../redux/slices.js/MessageSlice'

const ForgotPassword = ({ route, navigation }) => {
  const [email, setEmail] = useState('')
  const messageS = useSelector(state => state.message)
  const dispatch = useDispatch()

  useEffect(() => {
    if (messageS.message) {
      Alert.alert('Hello user!', messageS.message)
      dispatch(MessageActions.clearMessage())
      navigation.navigate('resetPassword')
      return
    }
    if (messageS.error) {
      Alert.alert('Hello user!⚠️', messageS.error)
      dispatch(MessageActions.clearError())
    }
  }, [messageS.message, messageS.error])

  function onEmailChangeHandler(emailTxt) {
    setEmail(emailTxt)
  }
  function onSendEmail() {
    if (!email.trim()) {
      return Alert.alert(`Hello user!`, '⚠️Please enter valid email address.')
    }
    dispatch(tForgotPassword(email))
  }

  return <View style={{ backgroundColor: '#fff', flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>Forgot Password</Text>
      <TextInput
        disabled={messageS.pending}
        style={styles.input}
        keyboardType='email-address'
        placeholder='xyz@gmail.com'
        onChangeText={onEmailChangeHandler} />
      <View style={{ gap: 7 }}>
        <Button
          disabled={messageS.pending}
          onPress={onSendEmail}
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Send Email</Button>
        <Button
          disabled={messageS.pending}
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
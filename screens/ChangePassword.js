import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tupdatePassword } from '../redux/thunks/MessageThunk'

const ChangePassword = ({ route, navigation }) => {
  const [oldpassword, setoldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const messageS = useSelector(state => state.message)
  const dispatch = useDispatch()


  function onOldPasswordChangeHandler(passwordTxt) {
    setoldPassword(passwordTxt)
  }
  function onNewPasswordChangeHandler(passwordTxt) {
    setNewPassword(passwordTxt)
  }
  function onConfirmPasswordChangeHandler(passwordTxt) {
    setConfirmPassword(passwordTxt)
  }

  function onChangePasswordHandler() {
    dispatch(tupdatePassword(oldpassword, newPassword, confirmpassword))
  }

  return <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>Reset Password</Text>
      <TextInput
        editable={!messageS.pending}
        style={styles.input}
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholder='old Password'
        onChangeText={onOldPasswordChangeHandler} />
      <TextInput
        editable={!messageS.pending}
        style={styles.input}
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholder='new Password'
        onChangeText={onNewPasswordChangeHandler} />
      <TextInput
        editable={!messageS.pending}
        style={styles.input}
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholder='confirm Password'
        onChangeText={onConfirmPasswordChangeHandler} />
      <View style={{ gap: 7 }}>
        <Button
          disabled={messageS.pending}
          onPress={onChangePasswordHandler}
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Change Password</Button>
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
    padding: 7,
    gap: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '70%'
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
export default ChangePassword
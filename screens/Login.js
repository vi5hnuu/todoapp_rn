import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/thunks/AuthThunks'
import { actions as AuthActions } from '../redux/slices.js/AuthSlice'


const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, pending } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  function onEmailChangeHandler(emailTxt) {
    setEmail(emailTxt)
  }
  function onPasswordChangeHandler(passwordTxt) {
    setPassword(passwordTxt)
  }
  useEffect(() => {
    if (error) {
      Alert.alert('Login Error', error.message, [{ text: 'ok', style: 'destructive' }])
      dispatch(AuthActions.clearError())
    }
  }, [error])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
    })
  }, [])

  function onLoginHandler() {
    dispatch(login(email, password))
  }
  return <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME TO TODO</Text>
      <TextInput
        editable={!pending}
        style={styles.input}
        keyboardType='email-address'
        placeholder='xyz@gmail.com'
        onChangeText={onEmailChangeHandler} />
      <TextInput
        editable={!pending}
        style={styles.input}
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholder='*********'
        onChangeText={onPasswordChangeHandler} />
      <View style={{ gap: 7 }}>
        {pending ? <ActivityIndicator style={{ marginTop: 15 }} /> : <Button
          onPress={onLoginHandler}
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Login</Button>}
        <Button
          style={styles.btn}
          disabled={pending}
          onPress={() => {
            navigation.navigate('register')
          }}
          textColor='#000'
        >Sign-up instead</Button>
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
export default Login
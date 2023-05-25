import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'react-native-paper'


const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onEmailChangeHandler(emailTxt) {
    setEmail(emailTxt)
  }
  function onPasswordChangeHandler(passwordTxt) {
    setPassword(passwordTxt)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
    })
  }, [])

  return <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME TO TODO</Text>
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        placeholder='xyz@gmail.com' />
      <TextInput
        style={styles.input}
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholder='*********' />
      <View style={{ gap: 7 }}>
        <Button
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Login</Button>
        <Button
          style={styles.btn}
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
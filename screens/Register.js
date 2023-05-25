import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'


const Register = ({ route, navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [avatar, setAvatar] = useState('')

  function handlerChangePhoto() {
    navigation.navigate('camera', { onBack: onAvatarChangeHandler })
  }
  function onAvatarChangeHandler(uri) {
    if (!uri) {
      return
    }
    setAvatar(uri);
  }
  function onNameChangeHandler(nameTxt) {
    setName(nameTxt)
  }
  function onEmailChangeHandler(emailTxt) {
    setEmail(emailTxt)
  }
  function onPasswordChangeHandler(passwordTxt) {
    setPassword(passwordTxt)
  }
  function onConfirmPasswordChangeHandler(passwordTxt) {
    setPassword(passwordTxt)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Register',
    })
  }, [])

  return <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'center',
    }}
    style={{
      backgroundColor: '#fff', paddingTop: 50
    }}>
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME TO TODO</Text>
      <TouchableOpacity
        onPress={handlerChangePhoto}
        style={styles.avatar}>
        <Avatar.Image
          source={{ uri: avatar ? avatar : null }} />
        <Text style={{ color: '#ba181b' }}>Change Photo</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        keyboardType='default'
        placeholder='vishnu kumar'
        onChangeText={onNameChangeHandler} />
      <TextInput
        style={styles.input}
        keyboardType='email-address'
        placeholder='vishnu@gmail.com'
        onChangeText={onEmailChangeHandler} />
      <TextInput
        style={styles.input}
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholder='password'
        onChangeText={onPasswordChangeHandler} />
      <TextInput
        style={styles.input}
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholder='confirm password'
        onChangeText={onConfirmPasswordChangeHandler} />
      <View style={{ gap: 7 }}>
        <Button
          textColor='#fff'
          style={[styles.btn, { backgroundColor: '#ba181b' }]}>Register</Button>
        <Button
          style={styles.btn}
          onPress={() => {
            navigation.replace('login')
          }}
          textColor='#000'
        >Sign-in instead</Button>
      </View>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    margin: 7,
    gap: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '70%',
    marginBottom: 60
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: 'bold',
  },
  avatar: {
    alignItems: 'center',
    marginBottom: 10
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
export default Register
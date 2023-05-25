import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { tlogout } from '../redux/thunks/AuthThunks'

const User = ({ route, navigation }) => {
  const authS = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [name, setName] = useState(authS.user.name)
  const email = authS.user.email
  const [avatar, setAvatar] = useState(authS.user.avatar.url)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Profile'
    })
  }, [])

  function handlerChangePhoto() {
    navigation.navigate('camera', { onBack: onAvatarChangeHandler })
  }
  function onAvatarChangeHandler(uri) {
    if (!uri) {
      return
    }
    setAvatar(uri);
  }
  function logoutHandler() {
    dispatch(tlogout())
  }
  return <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <TouchableOpacity
      onPress={handlerChangePhoto}
      style={styles.avatar}>
      <Avatar.Image
        source={{ uri: avatar }} />
      <Text style={{ color: '#ba181b' }}>Change Photo</Text>
    </TouchableOpacity>
    <View style={{ width: '70%', gap: 5, marginBottom: 10 }}>
      <TextInput
        disabled={authS.pending}
        style={styles.input}
        keyboardType='default'
        defaultValue={name}
        placeholder='vishnu kumar'
        onChangeText={() => { }} />
      <TextInput
        editable={false}
        style={styles.input}
        keyboardType='default'
        defaultValue={email}
        placeholder='vishnu kumar'
        onChangeText={() => { }} />
    </View>
    <View style={styles.actions}>
      <Button
        disabled={authS.pending}
        onPress={() => { }}
        textColor='#fff'
        style={[
          styles.btn,
          {
            backgroundColor: '#9d0208',
          }
        ]}>Update</Button>
      <Button
        disabled={authS.pending}
        onPress={() => {
          navigation.navigate('changePassword')
        }}
        textColor='#000'
        style={styles.btn}>change Password</Button>
      <Button
        disabled={authS.pending}
        onPress={logoutHandler}
        textColor='#000'
        style={styles.btn}>Log-out</Button>
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    marginBottom: 25
  },
  input: {
    borderColor: '#495057',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 8
  },
  actions: {
    width: '70%',
    gap: 5
  },
  btn: {
    borderRadius: 5
  }
})
export default User
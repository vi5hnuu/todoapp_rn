import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { tlogout } from '../redux/thunks/AuthThunks'
import { tupdateProfile } from '../redux/thunks/MessageThunk'
import mime from 'mime'
import { MaterialIcons } from '@expo/vector-icons';

//TODO : implement change password, update

const User = ({ route, navigation }) => {
  const authS = useSelector(state => state.auth)
  const messageS = useSelector(state => state.message)
  const dispatch = useDispatch()

  const [name, setName] = useState(authS.user.name)
  const email = authS.user.email
  const [avatar, setAvatar] = useState(authS.user.avatar.url)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Profile'
    })
  }, [])

  function onNameChangeHandler(nameTxt) {
    setName(nameTxt)
  }
  function handlerChangePhoto() {
    navigation.getParent('stacknav').navigate('camera', { onBack: onAvatarChangeHandler })
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
  function onUpdatehandler() {
    if (name === authS.user.name && avatar === authS.user.avatar.url) {
      Alert.alert('No Change', 'Change your avatar and name to update.')
      return;
    }
    const myform = new FormData()
    if (name !== authS.user.name) {
      myform.append('name', name)
    }
    if (avatar !== authS.user.avatar.url) {
      myform.append('avatar', {
        uri: avatar,
        type: mime.getType(avatar),
        name: avatar.split('/').pop()
      })
    }
    dispatch(tupdateProfile(myform))
  }
  function onVerifyHandler() {
    navigation.navigate('verify')
  }
  return <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {!authS.user.verified && <Text style={styles.textWarn}>Account will soon be deleted if not verified.</Text>}
    <TouchableOpacity
      onPress={handlerChangePhoto}
      style={styles.avatar}>
      <Avatar.Image
        source={{ uri: avatar }} />
      <Text style={{ color: '#ba181b', marginTop: 7 }}>Change Photo</Text>
      <View style={styles.verifyIconContainer}>
        <MaterialIcons
          name="verified"
          size={24}
          color={authS.user.verified ? '#48cae4' : '#adb5bd'} />
      </View>
    </TouchableOpacity>
    <View style={{ width: '70%', gap: 5, marginBottom: 10 }}>
      <TextInput
        disabled={authS.pending || messageS.pending}
        style={styles.input}
        keyboardType='default'
        defaultValue={name}
        placeholder='vishnu kumar'
        onChangeText={onNameChangeHandler} />
      <TextInput
        editable={false}
        style={styles.input}
        keyboardType='default'
        defaultValue={email}
        placeholder='xyz@gmail.com' />
    </View>
    <View style={styles.actions}>
      <Button
        disabled={messageS.pending}
        onPress={onUpdatehandler}
        textColor='#fff'
        style={[
          styles.btn,
          {
            backgroundColor: '#9d0208',
          }
        ]}>Update</Button>

      {!authS.user.verified && <Button
        disabled={authS.pending || messageS.pending}
        onPress={onVerifyHandler}
        textColor='#03045e'
        style={[styles.btn, { backgroundColor: '#48cae4' }]}>Verify Account</Button>}
      <Button
        disabled={messageS.pending}
        onPress={() => {
          navigation.navigate('changePassword')
        }}
        textColor='#000'
        style={styles.btn}>change Password</Button>
      <Button
        disabled={authS.pending || messageS.pending}
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
  },
  verifyIconContainer: {
    position: 'absolute',
    right: -5,
    top: -5
  },
  textWarn: {
    color: '#ba181b',
    position: 'absolute',
    bottom: 0,
    marginBottom: 7,
    fontWeight: 'bold',
  }
})
export default User
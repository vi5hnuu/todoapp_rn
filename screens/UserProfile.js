import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

const User = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Profile'
    })
  }, [])
  return (
    <View>
      <Text>User</Text>
    </View>
  )
}

export default User
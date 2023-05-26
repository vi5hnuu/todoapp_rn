import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Login from '../screens/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import User from '../screens/UserProfile'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Register from '../screens/Register'
import CameraX from '../screens/CameraX'
import Verify from '../screens/Verify'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProfile } from '../redux/thunks/AuthThunks'
import { ActivityIndicator, Text, View } from 'react-native'
import ChangePassword from '../screens/ChangePassword'
import ForgotPassword from '../screens/ForgotPassword'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function UserOverview() {
  return <BottomTabs.Navigator>
    <BottomTabs.Screen
      name='home'
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="home-sharp" size={size} color={focused ? "#000" : "#adb5bd"} />
        },
        tabBarLabelStyle: {
          color: "#000"
        }
      }} />
    <BottomTabs.Screen
      name='user'
      component={User}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <FontAwesome name="user" size={size} color={focused ? "#000" : "#adb5bd"} />
        },
        tabBarLabelStyle: {
          color: "#000"
        }
      }} />
  </BottomTabs.Navigator>
}
const Main = () => {
  const { isAuthenticated, pending } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProfile)//relogin user [handle reload/refresh app]
  }, [])

  if (pending) {
    return <View style={{
      flex: 1, alignItems: 'center',
      justifyContent: 'center', gap: 10
    }}>
      <ActivityIndicator size={32} style={{}} />
      <Text>Please wait...</Text>
    </View>
  }

  return <NavigationContainer>
    <Stack.Navigator id='stacknav'>
      {isAuthenticated ? <>
        <Stack.Screen
          name='userOverview'
          component={UserOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='changePassword'
          component={ChangePassword}
          options={{ title: 'Change Password' }}
        />
        <Stack.Screen
          name='verify'
          component={Verify}
          options={{ title: 'Change Password' }}
        />
      </> : <>
        <Stack.Screen
          name='login'
          component={Login}
        />
        <Stack.Screen
          name='register'
          component={Register}
        />
        <Stack.Screen
          name='forgotPassword'
          component={ForgotPassword}
          options={{ title: 'Forgot Password' }}
        />
      </>}
      <Stack.Screen
        name='camera'
        component={CameraX}
      />
    </Stack.Navigator>
  </NavigationContainer>
}


export default Main
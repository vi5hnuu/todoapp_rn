import React from 'react'
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


const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function UserOverview() {
  return <BottomTabs.Navigator>
    <BottomTabs.Screen
      name='home'
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Ionicons name="home-sharp" size={size} color={focused ? "#653600" : "#FFDCB5"} />
        },
        tabBarLabelStyle: {
          color: "#864700"
        }
      }} />
    <BottomTabs.Screen
      name='user'
      component={User}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <FontAwesome name="user" size={size} color={focused ? "#653600" : "#FFDCB5"} />
        },
        tabBarLabelStyle: {
          color: "#864700"
        }
      }} />
  </BottomTabs.Navigator>
}
const Main = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen
        name='home'
        component={UserOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='login'
        component={Login}
      />
      <Stack.Screen
        name='register'
        component={Register}
      />
      <Stack.Screen
        name='camera'
        component={CameraX}
      />
    </Stack.Navigator>
  </NavigationContainer>
}


export default Main
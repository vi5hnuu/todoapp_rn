import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Task = ({ task: { _id, title, description, completed } }) => {
  return <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.box}>
      <Checkbox
        status={completed ? "checked" : "unchecked"}
        color='#38b000'
        uncheckedColor='#004b23' />
      <MaterialCommunityIcons
        name="delete-circle"
        size={24}
        color="#f00" />
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    elevation: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: 18
  },
  description: {}
})
export default Task
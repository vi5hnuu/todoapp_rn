import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  heading: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
})
export default ListHeader
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EmptyListItem = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{label}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: '#ffba08',
  },
  heading: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#6a040f'
  },
})
export default EmptyListItem
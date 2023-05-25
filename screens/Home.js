import { View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, Platform, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import Task from '../components/Task'
import ListHeader from '../components/ListHeader'
import { Entypo } from '@expo/vector-icons';
import { Dialog, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import EmptyListItem from '../components/EmptyListItem'
import { taddTask } from '../redux/thunks/MessageThunk'
const Home = ({ route, navigation }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const state = useSelector(state => state)

  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Tasks',
    })
  }, [])

  function onTitleChangeHandler(titleTxt) {
    setTitle(titleTxt)
  }
  function onDescriptionChangeHandler(descriptionTxt) {
    setDescription(descriptionTxt)
  }
  function toggleDialogHandler() {
    setOpenDialog((open) => !open)
  }
  function addTaskHandler() {
    dispatch(taddTask(title, description))
  }
  const tasks = state.auth.user.tasks

  return <SafeAreaView style={[styles.screen]}>
    <FlatList
      style={styles.list}
      ListEmptyComponent={<EmptyListItem label='No Tasks, add some' />}
      ListHeaderComponent={<ListHeader title='All Tasks' />}
      data={tasks}
      keyExtractor={(task) => task._id}
      renderItem={(taskWrapper) => <Task task={taskWrapper.item} />}
    />
    <TouchableOpacity
      style={[styles.btnAdd]}
      onPress={toggleDialogHandler}
    >
      <Entypo
        name="add-to-list"
        size={24}
        color="black" />
    </TouchableOpacity>
    <Dialog
      onDismiss={toggleDialogHandler}
      visible={openDialog}
      style={{ backgroundColor: '#fff' }}>
      <Dialog.Title>Add Task</Dialog.Title>
      <Dialog.Content style={{ paddingBottom: 5 }}>
        <TextInput
          onChangeText={onTitleChangeHandler}
          cursorColor='#000'
          underlineStyle={{ display: 'none' }}
          style={styles.input}
          placeholder='Title'
        />
        <TextInput
          onChangeText={onDescriptionChangeHandler}
          multiline={true}
          cursorColor='#000'
          underlineStyle={{ display: 'none' }}
          style={[styles.input, { marginBottom: 12, minHeight: 80, maxHeight: 120 }]}
          placeholder='Description'
        />
        <Dialog.Actions style={styles.actions}>
          <TouchableOpacity
            onPress={toggleDialogHandler}
          >
            <Text style={[styles.btnText, { backgroundColor: '#bd1f36' }]}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleDialogHandler}>
            <Text style={[styles.btnText, { backgroundColor: '#FF8E0D' }]}>Add</Text>
          </TouchableOpacity>
        </Dialog.Actions>
      </Dialog.Content>
    </Dialog>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 7
  },
  heading: {

  },
  list: {
    marginBottom: 7
  },
  btnAdd: {
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 28,
    alignSelf: 'center'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
    borderColor: '#000',
    borderWidth: 1,
    textAlignVertical: 'top'
  },
  actions: {
    gap: 12,
    paddingRight: 0
  },
  btnText: {
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    fontSize: 16,
    alignContent: 'center'
  }
})

export default Home
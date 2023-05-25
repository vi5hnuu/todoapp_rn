import axios from "axios";
import { actions as MessageActions } from "../slices.js/MessageSlice";

const serverURL = 'https://rn-todos.onrender.com/api/v1'

export function taddTask(title, description) {
  return async (dispatch, getState) => {
    dispatch(MessageActions.addTaskPending());
    const dt = {
      "title": title,
      "description": description
    }
    try {
      let config = {
        method: 'post',
        url: `${serverURL}/newtask`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: dt
      };
      const { data } = await axios.request(config)
      dispatch(MessageActions.addTask({ message: data.message }));
    } catch (error) {
      dispatch(MessageActions.addTaskFailure({ error: error }));
    }
  }
}

export function tupdateTask(id) {
  return async (dispatch, getState) => {
    dispatch(MessageActions.updateTaskPending());
    try {
      let config = {
        method: 'get',
        url: `${serverURL}/task/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.request(config)
      dispatch(MessageActions.updateTask({ message: data.message }));
    } catch (error) {
      dispatch(MessageActions.updateTaskFailure({ error: error }));
    }
  }
}

export function tdeleteTask(id) {
  return async (dispatch, getState) => {
    dispatch(MessageActions.deleteTaskPending());
    try {
      let config = {
        method: 'delete',
        url: `${serverURL}/task/${id}`,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.request(config)
      dispatch(MessageActions.deleteTask({ message: data.message }));
    } catch (error) {
      dispatch(MessageActions.deleteTaskFailure({ error: error }));
    }
  }
}


export function tupdateProfile(formData) {//TODO
  return async (dispatch, getState) => {
    dispatch(MessageActions.updateProfilePending());
    try {
      let config = {
        method: 'patch',
        url: `${serverURL}/updateProfile`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData
      };
      const { data } = await axios.request(config)
      dispatch(MessageActions.updateProfile({ message: data.message }));
    } catch (error) {
      dispatch(MessageActions.updateProfileFailure({ error: error }));
    }
  }
}
export function tupdatePassword({ oldPassword, newPassword, confirmPassword }) {//TODO
  return async (dispatch, getState) => {
    dispatch(MessageActions.updatePasswordPending());
    try {
      let config = {
        method: 'patch',
        url: `${serverURL}/updatepassword`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: { oldPassword, newPassword, confirmPassword }
      };
      const { data } = await axios.request(config)
      dispatch(MessageActions.updatePassword({ message: data.message }));
    } catch (error) {
      dispatch(MessageActions.updatePasswordFailure({ error: error }));
    }
  }
}

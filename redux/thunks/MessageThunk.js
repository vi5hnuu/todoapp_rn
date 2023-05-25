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
import axios from "axios";
import { actions as AuthActions } from "../slices.js/AuthSlice";

const serverURL = 'https://rn-todos.onrender.com/api/v1'

export function login(email, password) {
  return async (dispatch, getState) => {
    dispatch(AuthActions.loginPending());
    try {
      let creds = JSON.stringify({
        "email": email,
        "password": password
      });

      let config = {
        method: 'post',
        url: `${serverURL}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: creds
      };
      const { data } = await axios.request(config)
      dispatch(AuthActions.login({ user: data.userData, message: data.message }));
    } catch (error) {
      console.log(error);
      dispatch(AuthActions.loginFailure({ error: error }));
    }
  }
}

export async function getMyProfile(dispatch, getState) {
  dispatch(AuthActions.profilePending());
  try {
    let config = {
      method: 'get',
      url: `${serverURL}/me`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.request(config)
    dispatch(AuthActions.profile({ user: data.userData }));
  } catch (error) {
    dispatch(AuthActions.profileFailure({ error: error }));
  }
}

export function tlogout() {//TODO
  return async (dispatch, getState) => {
    dispatch(AuthActions.logoutPending());
    try {
      let config = {
        method: 'get',
        url: `${serverURL}/logout`,
      };
      const { data } = await axios.request(config)
      dispatch(AuthActions.logout({ message: data.message }));
    } catch (error) {
      dispatch(AuthActions.logoutFailure({ error: error }));
    }
  }
}
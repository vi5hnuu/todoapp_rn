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

export function register(formData) {
  return async (dispatch, getState) => {
    dispatch(AuthActions.registerPending());
    try {
      let config = {
        method: 'post',
        url: `${serverURL}/register`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData
      };
      const { data } = await axios.request(config)
      dispatch(AuthActions.register({ user: data.userData, message: data.message }));
    } catch (error) {
      console.log(error);
      dispatch(AuthActions.registerFailure({ error: error }));
    }
  }
}

export function tverifyAccount(otp) {
  return async (dispatch, getState) => {
    dispatch(AuthActions.verifyAccountPending());
    try {
      let config = {
        method: 'post',
        url: `${serverURL}/verifyotp`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: { otp }
      };
      const { data } = await axios.request(config)

      dispatch(AuthActions.verifyAccount({ user: data.userData, message: data.message }));
    } catch (error) {
      dispatch(AuthActions.verifyAccountFailure({ error: error }));
    }
  }
}


export function tresetPassword(otp, newpassword) {
  return async (dispatch, getState) => {
    dispatch(AuthActions.resetPasswordPending());
    try {
      let config = {
        method: 'put',
        url: `${serverURL}/resetpassword`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: { otp, newpassword }
      };
      const { data } = await axios.request(config)

      dispatch(AuthActions.resetPassword({ user: data.userData, message: data.message }));
    } catch (error) {
      dispatch(AuthActions.resetPasswordFailure({ error: error.message }));
    }
  }
}
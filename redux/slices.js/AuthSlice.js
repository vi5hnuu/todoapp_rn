import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: 'auth-slice',
  initialState: {
    isAuthenticated: false,
    error: null,
    pending: false,
    user: null,
    message: null,
  },
  reducers: {
    login: (state, action) => {
      state.error = null;
      state.isAuthenticated = true;
      state.pending = false;
      state.user = action.payload.user
      state.message = action.payload.message
    },
    loginPending: (state, action) => {
      state.pending = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    profile: (state, action) => {
      state.error = null;
      state.isAuthenticated = true;
      state.pending = false;
      state.user = action.payload.user
    },
    profilePending: (state, action) => {
      state.pending = true;
      state.error = null;
    },
    profileFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    logout: (state, action) => {
      state.error = null;
      state.isAuthenticated = false;
      state.pending = false;
      state.user = null
      state.message = action.payload.message
    },
    logoutPending: (state, action) => {
      state.pending = true;
      state.error = null;
      state.message = null
    },
    logoutFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
      state.message = null
    },
    register: (state, action) => {
      state.error = null;
      state.isAuthenticated = true;
      state.pending = false;
      state.user = action.payload.user
      state.message = action.payload.message
    },
    registerPending: (state, action) => {
      state.pending = true;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    verifyAccount: (state, action) => {
      state.error = null;
      state.isAuthenticated = true;
      state.pending = false;
      state.user = action.payload.user
      state.message = action.payload.message
    },
    verifyAccountPending: (state, action) => {
      state.pending = true;
      state.error = null;
    },
    verifyAccountFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    resetPassword: (state, action) => {
      state.error = null;
      state.isAuthenticated = true;
      state.pending = false;
      state.user = action.payload.user
      state.message = action.payload.message
    },
    resetPasswordPending: (state, action) => {
      state.pending = true;
      state.error = null;
    },
    resetPasswordFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    clearError: (state, action) => {
      state.error = null
    }
  }
})

//thunks

export const actions = AuthSlice.actions
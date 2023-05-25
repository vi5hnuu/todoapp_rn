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
    clearError: (state, action) => {
      state.error = null
    }
  }
})

//thunks

export const actions = AuthSlice.actions
import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: 'message-slice',
  initialState: {
    pending: false,
    error: null,
    message: null
  },
  reducers: {
    addTask: (state, action) => {
      state.pending = false;
      state.error = null;
      state.message = action.payload.message
    },
    addTaskPending: (state, action) => {
      state.pending = true;
      state.error = null
    },
    addTaskFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    updateTask: (state, action) => {
      state.pending = false;
      state.error = null;
      state.message = action.payload.message
    },
    updateTaskPending: (state, action) => {
      state.pending = true;
      state.error = null
    },
    updateTaskFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    deleteTask: (state, action) => {
      state.pending = false;
      state.error = null;
      state.message = action.payload.message
    },
    deleteTaskPending: (state, action) => {
      state.pending = true;
      state.error = null
    },
    deleteTaskFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    updateProfile: (state, action) => {
      state.pending = false;
      state.error = null;
      state.message = action.payload.message
    },
    updateProfilePending: (state, action) => {
      state.pending = true;
      state.error = null
    },
    updateProfileFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },
    updatePassword: (state, action) => {
      state.pending = false;
      state.error = null;
      state.message = action.payload.message
    },
    updatePasswordPending: (state, action) => {
      state.pending = true;
      state.error = null
    },
    updatePasswordFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.error
    },

    clearError: (state, action) => {
      state.error = null;
    },
    clearMessage: (state, action) => {
      state.message = null
    }
  }
})

export const actions = messageSlice.actions
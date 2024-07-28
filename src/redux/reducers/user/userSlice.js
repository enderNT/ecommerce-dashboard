import { createSlice } from "@reduxjs/toolkit"
import { authUser, registerUser } from "./actions&Thunks"

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    hasError: false,
    userData: {
      name: '',
      username: '',
      email: '',
      avatar: ''
    }
  },
  reducers: {
    resetError: (state) => {
      state.hasError = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false
        const hasData = Boolean(action.payload.record)
        if (!hasData) {
          state.isAuthenticated = false
          state.hasError = true
          return state
        }
        const { record } = action.payload
        state.isAuthenticated = true
        state.hasError = false
        state.userData = {
          name: record.name,
          username: record.username,
          email: record.email,
          avatar: record.avatar
        }
      })
      .addCase(authUser.pending, (state) => {
        state.isLoading = true
        state.hasError = false
        state.isAuthenticated = false
      })
      .addCase(authUser.rejected, (state) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.hasError = true
        state.userData = {
          name: '', username: '',
          email: '', avatar: ''
        }
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log('ENTRO EN LA ACCION FULLFILED Y TRAE ESTO\n', action)
        state.isLoading = false
        state.hasError = Boolean(action.payload.id)
      })
      .addCase(registerUser.pending, (state, action) => {
        console.log('ENTRO EN LA ACCION PENDING Y TRAE ESTO\n', action)
        state.isLoading = true
      })
  }
})

export const { resetError } = userReducer.actions

export default userReducer

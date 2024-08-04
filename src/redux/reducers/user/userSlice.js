import { createSlice } from "@reduxjs/toolkit"
import { authUser, registerUser } from "./actions&Thunks"

const userReducer = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    userData: {
      name: '',
      username: '',
      email: '',
      avatar: ''
    }
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload 
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false
        const hasData = Boolean(action.payload.record)
        if (!hasData) {
          state.isAuthenticated = false
          return state
        }
        const { record } = action.payload
        state.isAuthenticated = true
        state.userData = {
          name: record.name,
          username: record.username,
          email: record.email,
          avatar: record.avatar
        }
      })
      .addCase(authUser.pending, (state) => {
        state.isLoading = true
        state.isAuthenticated = false
      })
      .addCase(authUser.rejected, (state) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.userData = {
          name: '', username: '',
          email: '', avatar: ''
        }
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
  }
})

export const {setUserData, setIsAuthenticated} = userReducer.actions

export default userReducer

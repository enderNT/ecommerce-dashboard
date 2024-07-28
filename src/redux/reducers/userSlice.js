import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApiCall } from '../../utils/api'

export const authUser = createAsyncThunk(
  'user/auth',
  async (body) => {
    const data = await loginApiCall(body)
    return data
  })

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
    setError: (state) => {
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
        state.userData = { name: '', username: '', email: '', avatar: '' }
      })
      .addCase(authUser.rejected, (state) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.hasError = true
        state.userData = { name: '', username: '', email: '', avatar: '' }
      })
  }
})

export const { setError } = userReducer.actions

export default userReducer

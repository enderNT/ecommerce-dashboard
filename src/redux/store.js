import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/user/userSlice'

export const STORE = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

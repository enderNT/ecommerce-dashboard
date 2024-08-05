import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user/userSlice'
import dashBoardReducer from './reducers/dashboard/dashboardSlice'

export const STORE = configureStore({
  reducer: {
    user: userReducer.reducer,
    dashboard: dashBoardReducer.reducer
  }
})

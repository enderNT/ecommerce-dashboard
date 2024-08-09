import { createSlice } from "@reduxjs/toolkit"
import { getMessages, getOrders, saveOrdersInfo, setTotalRevenueAction } from "./dashboardActions&Thunks"


const dashBoardReducer = createSlice({
  name: 'dashboard',
  initialState: {
    orderItems: [],
    messageItems: [],
    totalRevenue: 0,
    error: false,
    isLoading: false,
    ordersInfo: {
      newOrders: 0,
      pendingOrders: 0,
      shippedOrders: 0,
    }
  },
  reducers: {
    saveOrdersInfoR: (state, action) => saveOrdersInfo(state, action),
    setTotalRevenueReducer: (state, action) => setTotalRevenueAction(state, action)
  },
  extraReducers: (builder) => {
    builder
        .addCase(getOrders.fulfilled, (state, action) => {
            state.orderItems = action.payload.items
            state.error = false
            state.isLoading = false
        })
        .addCase(getOrders.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getOrders.rejected, (state) => {
            state.error = true
        })
        .addCase(getMessages.fulfilled, (state, action) => {
          state.messageItems = action.payload.items
          state.error = false
          state.isLoading = false
        })
  }
})

export const {saveOrdersInfoR, setTotalRevenueReducer} = dashBoardReducer.actions

export default dashBoardReducer

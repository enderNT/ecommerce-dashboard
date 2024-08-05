import { createSlice } from "@reduxjs/toolkit"
import { getOrders, saveOrdersInfo } from "./dashboardActions&Thunks"


const dashBoardReducer = createSlice({
  name: 'dashboard',
  initialState: {
    page: 0,
    perPage: 10,
    totalItems: 0,
    totalPages: 0,
    items: [],
    error: false,
    isLoading: false,
    ordersInfo: {
      newOrders: 0,
      pendingOrders: 0,
      shippedOrders: 0,
    }
  },
  reducers: {
    saveOrdersInfoR: (state, action) => saveOrdersInfo(state, action)
  },
  extraReducers: (builder) => {
    builder
        .addCase(getOrders.fulfilled, (state, action) => {
            state.page = action.payload.page
            state.totalItems = action.payload.totalItems
            state.totalPages = action.payload.totalPages
            state.items = action.payload.items
            state.error = false
            state.isLoading = false
        })
        .addCase(getOrders.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getOrders.rejected, (state) => {
            state.error = true
        })
  }
})

export const {saveOrdersInfoR} = dashBoardReducer.actions

export default dashBoardReducer

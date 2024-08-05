import { createSlice } from "@reduxjs/toolkit"
import { getOrders } from "./dashboardActions&Thunks"


const dashBoardReducer = createSlice({
  name: 'dashboard',
  initialState: {
    page: 0,
	perPage: 10,
	totalItems: 0,
	totalPages: 0,
    items: [],
    error: false,
    isLoading: false
  },
  reducers: {
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

export const {} = dashBoardReducer.actions

export default dashBoardReducer

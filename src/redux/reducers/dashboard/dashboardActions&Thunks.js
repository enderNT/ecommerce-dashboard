import { createAsyncThunk } from "@reduxjs/toolkit";
import { listOrdersApiCall } from "../../../utils/api/dashboardApi";

export const getOrders = createAsyncThunk(
    'dashboard/orders',
    async (token) => {
        const data = await listOrdersApiCall(token)
        return data
    }
)

export const saveOrdersInfo = (state, action) => {
    state.ordersInfo.newOrders = action.payload.filter(element => element.status === 'NEW').length
    state.ordersInfo.pendingOrders = action.payload.filter(element => element.status === 'PENDING').length
    state.ordersInfo.shippedOrders = action.payload.filter(element => element.status === 'SHIPPED').length
    return state
}



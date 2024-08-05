import { createAsyncThunk } from "@reduxjs/toolkit";
import { listMessages, listOrdersApiCall } from "../../../utils/api/dashboardApi";

export const getOrders = createAsyncThunk(
    'dashboard/orders/list',
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

export const getMessages = createAsyncThunk(
    'dashboard/messages/list',
    async (token) => {
        const data = listMessages(token)
        return data
    }
)



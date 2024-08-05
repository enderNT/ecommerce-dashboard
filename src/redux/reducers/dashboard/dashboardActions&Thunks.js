import { createAsyncThunk } from "@reduxjs/toolkit";
import { listOrdersApiCall } from "../../../utils/api/dashboardApi";

export const getOrders = createAsyncThunk(
    'dashboard/orders',
    async () => {
        const data = await listOrdersApiCall()
        return data
    }
)





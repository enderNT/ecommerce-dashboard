import { createAsyncThunk } from "@reduxjs/toolkit"
import {loginApiCall, registerApiCall} from '../../../utils/api'

export const authUser = createAsyncThunk(
    'user/auth',
    async (body) => {
        const data = await loginApiCall(body)
        return data
    })

export const registerUser = createAsyncThunk(
    'user/register',
    async (body) => {
        const data = await registerApiCall(body)
        return data
    }
)

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApiCall } from '../../utils/api'

export const authUser = createAsyncThunk(
    'user/auth',
    async (body) => {
        const data = await loginApiCall(body)
        window.localStorage.setItem("userdata", data) //sessionstorage
        return data
    })

const userReducer = createSlice({
    name: 'userActions',
    initialState: {
        value: 0,
        userData: {
            username: "",
            email: "",
            avatar: ""
        }
    },
    reducers: {
        incremented: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authUser.fulfilled, (state, action) => {
            console.log('request status es', action.meta.requestStatus)
            console.log('LA ACCION CON PAYLOAD ES\n', action.payload)
        })
    }
})

export const { incremented, decremented } = userReducer.actions

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// // {value: 1}

export default userReducer
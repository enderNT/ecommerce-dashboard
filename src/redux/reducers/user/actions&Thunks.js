export const authUser = createAsyncThunk(
    'user/auth',
    async (body) => {
        const data = await loginApiCall(body)
        return data
    })
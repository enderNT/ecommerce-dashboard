import { apiCall } from "./fetch"

const PATH = {
    authenticate: 'api/collections/users/auth-with-password'
}

export const loginApiCall = async (body) => {
    const data = await apiCall({
        body, endpoint: PATH.authenticate, method: 'POST',
        env: 'devOnline'
    })
    return data
}

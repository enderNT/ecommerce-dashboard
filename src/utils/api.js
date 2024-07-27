import { apiCall } from "./fetch"

const PATH = {
    authenticate: 'api/collections/users/auth-with-password'
}

export const loginApiCall = (body) => {
    apiCall({
        body, endpoint: PATH.authenticate, method: 'POST',
        env: 'localDev'
    })
}

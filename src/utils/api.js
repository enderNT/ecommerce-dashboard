import { apiCall } from './fetch'

const PATH = {
  authenticate: 'api/collections/users/auth-with-password',
  register: 'api/collections/users/records'
}

export const loginApiCall = async (body) => {
  const data = await apiCall({
    body,
    endpoint: PATH.authenticate,
    method: 'POST',
    env: 'dev'
  })
  return data
}

export const registerApiCall = async (body) => {
  const data = await apiCall({
    body,
    endpoint: PATH.register,
    method: 'POST',
    env: 'dev'
  })
  return data
} 

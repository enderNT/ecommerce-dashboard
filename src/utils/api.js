const VITE_API_URL = import.meta.env.VITE_API_URL
import { apiCall } from './fetch'

export const PATH = {
  authenticate: 'api/collections/users/auth-with-password',
  register: 'api/collections/users/records'
}

/**
 * Recieve a object as body
 * @param {Object} body 
 * @returns Object response
 */
export const loginApiCall = async (body) => {
  const data = await apiCall({
    body,
    endpoint: PATH.authenticate,
    method: 'POST',
    env: VITE_API_URL
  })
  return data
}

/**
 * Recieve a object as body
 * @param {Object} body 
 * @returns Object response
 */
export const registerApiCall = async (body) => {
  const data = await apiCall({
    body,
    endpoint: PATH.register,
    method: 'POST',
    env: VITE_API_URL
  })
  return data
} 

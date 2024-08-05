import { VITE_API_URL } from "../constants";
import { apiCall } from "../fetch";

export const PATH = {
    retrieveOrders: 'api/collections/orders/records'
}

export const listOrdersApiCall = async (token) => {
    const data = await apiCall({
        endpoint: PATH.retrieveOrders,
        env: VITE_API_URL,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    })
    return data;
}

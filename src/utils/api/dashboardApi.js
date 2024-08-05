import { VITE_API_URL } from "../constants";
import { apiCall } from "../fetch";

export const PATH = {
    retrieveOrders: 'api/collections/orders/records'
}

export const listOrdersApiCall = async () => {
    const data = await apiCall({
        endpoint: PATH.retrieveOrders,
        env: VITE_API_URL,
        method: 'GET'
    })
    return data;
}

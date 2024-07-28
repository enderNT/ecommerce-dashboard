export const URL_CONFIG = {
  prod: '',
  devOnline: 'https://pocketbase-gtsr-production.up.railway.app',
  localDev: 'http://127.0.0.1:8090'
}

export const apiCall = async ({ endpoint, method, env, body }) => {
  const response = await fetch(`${URL_CONFIG[env]}/${endpoint}`, {
    body: JSON.stringify(body),
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}

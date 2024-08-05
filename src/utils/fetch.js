export const apiCall = async ({ endpoint, method, env, body: {} }) => {
  const response = await fetch(`${env}/${endpoint}`, {
    body: JSON.stringify(body),
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}

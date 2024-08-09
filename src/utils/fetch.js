export const apiCall = async({
    endpoint,
    method,
    env,
    body,
    headers
  }) => {
  const response = await fetch(`${env}/${endpoint}`, {
    body: JSON.stringify(body) ?? null,
    method,
    headers: { ...headers ?? null, 'Content-Type': 'application/json' }
  })
  const data = await response.json()
  return data
}

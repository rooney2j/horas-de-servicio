
export async function fetchData(url, token) {
    const rs= await fetch(url, {headers: {authorization: token}})
    const data = await rs.json()
  return data
}
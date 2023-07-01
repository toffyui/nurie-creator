import axios from 'axios'
const apiUrl = process.env.API_BASE_URL + '/image'

export default async function getAllNurie(type) {
  try {
    const response = await axios.post(
      apiUrl,
      {
        get_type: type,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

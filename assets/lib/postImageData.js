import axios from 'axios'
const apiUrl = process.env.API_BASE_URL + '/postogpimg'

export default async function postImageData(uuid, url) {
  try {
    const response = await axios.post(
      apiUrl,
      { uuid: uuid, ogpimg: url },
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

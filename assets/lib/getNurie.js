import axios from 'axios'
const apiUrl = process.env.API_BASE_URL + '/analysis'

export default async function getNurieImage(file, flag) {
  let imageBase64 = file
  imageBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '')
  try {
    const response = await axios.post(
      apiUrl,
      { mypng: imageBase64, saveflag: flag },
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

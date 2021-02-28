import axios from 'axios'
const apiUrl = process.env.API_BASE_URL + '/postogpimg'

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export default async function postImageData(uuid, url) {
  let imageBase64 = null
  try {
    imageBase64 = await toBase64(url)
    imageBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '')
  } catch (error) {
    console.log(error)
    return null
  }
  try {
    const response = await axios.post(
      apiUrl,
      { uuid: uuid, ogpimg: imageBase64 },
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

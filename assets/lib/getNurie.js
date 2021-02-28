import axios from 'axios'
const apiUrl = process.env.API_BASE_URL

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export default async function getNurieImage(file, flag) {
  let imageBase64 = null
  try {
    imageBase64 = await toBase64(file)
    imageBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '')
  } catch (error) {
    console.log(error)
    return null
  }
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

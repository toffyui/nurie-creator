/**
 * Canvasの描画して画像をリサイズする
 * @param {object} image - Imageオブジェクト
 * @param {number} limitWidth - 最大横幅
 * @param {number} limitHeight - 最大縦幅
 * @returns {string} - base64
 */
export default async function resizeImage(image, limitWidth, limitHeight) {
  const aspect = image.width / image.height
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  let canvasWidth
  let canvasHeight
  if (image.width > limitWidth || image.height > limitHeight) {
    // 規定サイズよりも画像が大きい場合
    if (aspect > 1) {
      // 横長画像の場合
      canvasWidth = limitWidth
      canvasHeight = limitHeight * (image.height / image.width)
    } else {
      // 縦長画像の場合
      canvasWidth = limitWidth * (image.width / image.height)
      canvasHeight = limitHeight
    }
    canvas.width = canvasWidth
    canvas.height = canvasHeight
  } else {
    // 規定サイズ内の場合
    canvas.width = image.width
    canvas.height = image.height
    canvasWidth = image.width
    canvasHeight = image.height
  }
  ctx.drawImage(
    image,
    0,
    0,
    image.width,
    image.height,
    0,
    0,
    canvasWidth,
    canvasHeight
  )
  return canvas.toDataURL('image/jpeg', 0.85)
}

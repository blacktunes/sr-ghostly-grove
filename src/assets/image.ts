export const compressImage = (file: File | Blob, width?: number) => {
  return new Promise<string>((resolve) => {
    const src = URL.createObjectURL(file)
    const img = new Image()
    img.src = src
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        resolve('')
        return
      }

      width = width ? (img.width < width ? img.width : width) : img.width
      canvas.width = width
      canvas.height = width * (img.height / img.width)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      resolve(canvas.toDataURL('image/webp'))
      URL.revokeObjectURL(src)
    }
  })
}

export const urlToBase64 = (src: string) => {
  return new Promise<string>((resolve) => {
    const img = new Image()
    img.onload = function () {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        resolve('')
        return
      }

      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      resolve(canvas.toDataURL('image/webp'))
    }
    img.src = src
  })
}

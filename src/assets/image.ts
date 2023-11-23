export const compressImage = (file: File | Blob, width?: number) => {
  return new Promise<string>((reslove) => {
    const src = URL.createObjectURL(file)
    const img = new Image()
    img.src = src
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reslove('')
        return
      }

      width = width ? (img.width < width ? img.width : width) : img.width
      canvas.width = width
      canvas.height = width * (img.height / img.width)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      reslove(canvas.toDataURL('image/webp'))
      URL.revokeObjectURL(src)
    }
  })
}

export const urlToBase64 = (src: string) => {
  return new Promise<string>((reslove) => {
    const img = new Image()
    img.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(img, 0, 0)
      reslove(canvas.toDataURL('image/webp'))
    }
    img.src = src
  })
}

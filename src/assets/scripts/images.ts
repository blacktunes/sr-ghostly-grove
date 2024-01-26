export const imageCompress = (file: File | Blob, maxWidth?: number) => {
  return new Promise<string>((resolve) => {
    if (file.type === 'image/gif') {
      const reader = new FileReader()
      reader.onload = (e) => {
        resolve((e.target?.result as string) || '')
      }
      reader.readAsDataURL(file)
    } else {
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

        maxWidth = maxWidth ? (img.width < maxWidth ? img.width : maxWidth) : img.width
        canvas.width = maxWidth
        canvas.height = maxWidth * (img.height / img.width)
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/webp'))
        URL.revokeObjectURL(src)
      }
    }
  })
}

export const urlToBase64 = (src: string) => {
  return new Promise<string>((resolve) => {
    const img = new Image()
    img.onload = () => {
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

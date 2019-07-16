export class MediaDimensions {
  static getVideoDimensionsFromFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.onload = () => {
        const video = document.createElement('video')

        video.onloadeddata = () =>
          resolve({
            width: video.videoWidth,
            height: video.videoHeight
          })

        video.src = reader.result
      }

      reader.readAsDataURL(file)
    })
  }

  static getImageDimensionsFromFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader()

      reader.onload = () => {
        const img = new Image()
        img.src = reader.result

        img.onload = () =>
          resolve({
            width: img.naturalWidth,
            height: img.naturalHeight
          })
      }

      reader.readAsDataURL(file)
    })
  }
}

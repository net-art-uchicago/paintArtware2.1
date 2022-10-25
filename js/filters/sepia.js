/* global app */
window.filters.sepia = {
  name: 'sepia',
  menu: 'Edit',
  run: function () {
    const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      // store r, g, b values
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]

      // compute sepia values
      const sepiaR = 0.393 * r + 0.769 * g + 0.189 * b
      const sepiaG = 0.349 * r + 0.686 * g + 0.168 * b
      const sepiaB = 0.272 * r + 0.534 * g + 0.131 * b

      // set values for pixels
      // red
      if (sepiaR > 255) {
        data[i] = 255
      } else {
        data[i] = sepiaR
      }
      // green
      if (sepiaG > 255) {
        data[i + 1] = 255
      } else {
        data[i + 1] = sepiaG
      }
      // blue
      if (sepiaB > 255) {
        data[i + 2] = 255
      } else {
        data[i + 2] = sepiaB
      }
    }
    app.ctx.putImageData(imageData, 0, 0)
  }
}

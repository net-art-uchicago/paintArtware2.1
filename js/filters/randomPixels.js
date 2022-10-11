/* global app */
window.filters.randomPixels = {
  name: 'randomPixels',
  menu: 'Edit',
  run: function () {
    const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      data[i] = Math.random() * 255
      data[i + 1] = Math.random() * 255
      data[i + 2] = Math.random() * 255
    }
    app.ctx.putImageData(imageData, 0, 0)
  }
}

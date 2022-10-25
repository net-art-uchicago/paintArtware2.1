/* global app */
window.filters.opacity = {
  name: 'opacity',
  menu: 'Edit',
  run: function () {
    const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      data[i + 3] = parseInt(data[i + 3] / 2) // transparency
    }
    app.ctx.putImageData(imageData, 0, 0)
  }
}

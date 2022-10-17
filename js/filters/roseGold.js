/* global app */
window.filters.roseGold = {
  name: 'rose gold',
  menu: 'Edit',
  run: function () {
    const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 * 0.718
      data[i + 1] = 255 * 0.431
      data[i + 2] = 255 * 0.475
    }
    app.ctx.putImageData(imageData, 0, 0)
  }
}

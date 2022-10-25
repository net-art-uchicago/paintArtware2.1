/* global app */
window.filters.pink = {
  name: 'pink',
  menu: 'Edit',
  run: function () {
    const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
      data[i] = 255 // red
      data[i + 1] = 192// green
      data[i + 2] = 203 // blue
      data[i + 3] = avg // alpha
    }
    app.ctx.putImageData(imageData, 0, 0)
  }
}

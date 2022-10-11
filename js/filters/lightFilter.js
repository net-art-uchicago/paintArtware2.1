window.filters.lightFilter = {
  name: 'Light Filter',
  menu: 'Edit',
  run: function () {
    const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
    const data = imageData.data
    const brightness = 1.4
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]

      let brightR = brightness * r
      let brightG = brightness * g
      let brightB = brightness * b

      data[i] = brightR
      data[i + 1] = brightG
      data[i + 2] = brightB
    }
    app.ctx.putImageData(imageData, 0, 0)
  }
}
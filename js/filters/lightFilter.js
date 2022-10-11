window.filters.lightFilter = {
    name: 'Light Filter',
    menu: 'Edit',
    run: function () {
        const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
        const data = imageData.data
        var brightness = 1.4
        for (let i = 0; i < data.length; i += 4) {
            var r = data[i]
            var g = data[i + 1]
            var b = data[i + 2]

            brightR = brightness * r
            brightG = brightness * g
            brightB = brightness * b

            data[i] = brightR
            data[i + 1] = brightG
            data[i + 2] = brightB
          }
        app.ctx.putImageData(imageData, 0, 0)
    }
  }
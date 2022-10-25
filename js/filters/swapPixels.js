/* global app */
window.filters.swapPixels = {
  name: 'swapPixels',
  menu: 'Edit',
  run: function () {
    const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
    const data = imageData.data
    const widthVar = 4 * app.canvas.width
    for (let i = 0; i < (data.length - widthVar); i += 4) {
      const rand = Math.random()
      if (rand > 0.7) {
        const tempR = data[i]
        const tempG = data[i + 1]
        const tempB = data[i + 2]
        data[i] = data[i + widthVar]
        data[i + 1] = data[i + 1 + widthVar]
        data[i + 2] = data[i + 2 + widthVar]
        data[i + widthVar] = tempR
        data[i + 1 + widthVar] = tempG
        data[i + 2 + widthVar] = tempB
      }
      if (rand > 0.3 && rand < 0.7) {
        const tempR = data[i]
        const tempG = data[i + 1]
        const tempB = data[i + 2]
        data[i] = data[i + (2 * widthVar)]
        data[i + 1] = data[i + 1 + (2 * widthVar)]
        data[i + 2] = data[i + 2 + (2 * widthVar)]
        data[i + (2 * widthVar)] = tempR
        data[i + 1 + (2 * widthVar)] = tempG
        data[i + 2 + (2 * widthVar)] = tempB
      }
      if (rand < 0.3) {
        const tempR = data[i]
        const tempG = data[i + 1]
        const tempB = data[i + 2]
        data[i] = data[i + (3 * widthVar)]
        data[i + 1] = data[i + 1 + (3 * widthVar)]
        data[i + 2] = data[i + 2 + (3 * widthVar)]
        data[i + (3 * widthVar)] = tempR
        data[i + 1 + (3 * widthVar)] = tempG
        data[i + 2 + (3 * widthVar)] = tempB
      }
    }
    app.ctx.putImageData(imageData, 0, 0)
  }
}

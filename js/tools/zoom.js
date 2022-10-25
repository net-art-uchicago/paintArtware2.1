/* global app */
window.tools.zoom = {
  name: 'zoom',
  icon: '/images/zoom-icon.png',
  state: {
    selected: false,
    mousePressed: false,
    range: 50,
    strength: 0.5
  },
  events: {
    mousedown: function (e, self) {
      function getIndex (x, y, range) {
        const rowLen = 4 + range * 8
        x = x + range
        y = y + range
        return (x * rowLen) + (y * 4)
      }

      if (self.state.selected === false) {
        return
      }

      const mouse = app.eventToMouse(e)
      const px = Math.floor(mouse.x)
      const py = Math.floor(mouse.y)

      const minX = Math.max(0, px - self.state.range)
      const minY = Math.max(0, py - self.state.range)

      const pixelsObj = app.ctx.getImageData(minX, minY,
        1 + self.state.range * 2,
        1 + self.state.range * 2)

      const pixels = pixelsObj.data

      for (let i = 3; i < pixels.length; i += 4) {
        pixels[i] = 255
      }

      const range = self.state.range

      let srcIdx
      let newX
      let newY
      let dist
      let x
      let y
      let newIdx

      for (dist = self.state.range; dist >= 1; dist--) {
        // we go top
        y = dist
        for (x = -dist; x <= dist; x++) {
          newIdx = getIndex(x, y, range)
          newX = Math.floor(x / 2)
          newY = Math.floor(y / 2)
          srcIdx = getIndex(newX, newY, range)

          pixels[newIdx] = pixels[srcIdx]
          pixels[newIdx + 1] = pixels[srcIdx + 1]
          pixels[newIdx + 2] = pixels[srcIdx + 2]
          pixels[newIdx + 3] = pixels[srcIdx + 3]
        }
        // we go right
        x = dist
        for (y = dist; y >= -dist; y--) {
          // pixels[getIndex(x, y, range)] = (counter += 11) % 255
          newIdx = getIndex(x, y, range)
          newX = Math.floor(x / 2)
          newY = Math.floor(y / 2)
          srcIdx = getIndex(newX, newY, range)

          pixels[newIdx] = pixels[srcIdx]
          pixels[newIdx + 1] = pixels[srcIdx + 1]
          pixels[newIdx + 2] = pixels[srcIdx + 2]
          pixels[newIdx + 3] = pixels[srcIdx + 3]
        }
        // we go bot
        y = -dist
        for (x = dist; x >= -dist; x--) {
          // pixels[getIndex(x, y, range)] = (counter += 11) % 255
          newIdx = getIndex(x, y, range)
          newX = Math.floor(x / 2)
          newY = Math.floor(y / 2)
          srcIdx = getIndex(newX, newY, range)

          pixels[newIdx] = pixels[srcIdx]
          pixels[newIdx + 1] = pixels[srcIdx + 1]
          pixels[newIdx + 2] = pixels[srcIdx + 2]
          pixels[newIdx + 3] = pixels[srcIdx + 3]
        }
        // we go left
        x = -dist
        for (y = -dist; y <= dist; y++) {
          // pixels[getIndex(x, y, range)] = (counter += 11) % 255
          newIdx = getIndex(x, y, range)
          newX = Math.floor(x / 2)
          newY = Math.floor(y / 2)
          srcIdx = getIndex(newX, newY, range)

          pixels[newIdx] = pixels[srcIdx]
          pixels[newIdx + 1] = pixels[srcIdx + 1]
          pixels[newIdx + 2] = pixels[srcIdx + 2]
          pixels[newIdx + 3] = pixels[srcIdx + 3]
        }
      }

      app.ctx.putImageData(pixelsObj, minX, minY)
    }
  }
}

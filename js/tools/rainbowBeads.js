/* global app */
window.tools.rainbowBeads = {
  name: 'rainbowBeads',
  icon: '/images/rainbow-icon.png',
  state: {
    selected: false,
    mousePressed: false,
    prevMouse: { x: null, y: null }
  },
  events: {
    mousedown: function (e, self) {
      self.state.mousePressed = true
    },
    mouseup: function (e, self) {
      self.state.mousePressed = false
      self.state.prevMouse = { x: null, y: null }
    },
    mousemove: function (e, self) {
    // if self tool is selected AND the mouse is pressed
      if (self.state.selected && self.state.mousePressed) {
        const mouse = app.eventToMouse(e)
        const px = self.state.prevMouse.x || mouse.x
        const py = self.state.prevMouse.y || mouse.y

        const r = Math.random() * 255
        const g = Math.random() * 255
        const b = Math.random() * 255
        app.ctx.fill()
        app.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`

        // find the distance between the current and previous mouse points
        const distance = Math.sqrt((mouse.x - px) ** 2 + (mouse.y - py) ** 2)

        // find the midpoint between the current and previous mouse points
        const midX = (mouse.x + px) / 2
        const midY = (mouse.y + py) / 2

        // draw a circle at the midpoint, with distance as its diameter
        app.ctx.beginPath()
        app.ctx.arc(midX, midY, distance / 2, 0, 2 * Math.PI, false)

        // update prevMouse coordinates
        self.state.prevMouse = { x: mouse.x, y: mouse.y }
      }
    }
  }
}

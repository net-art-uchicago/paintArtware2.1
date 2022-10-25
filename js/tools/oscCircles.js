/* global app */
window.tools.oscCircles = {
  name: 'oscillating circles',
  icon: '/images/osc-icon.png',
  state: {
    selected: false,
    mousePressed: false
  },
  events: {
    mousedown: function (e, self) {
      self.state.mousePressed = true
    },
    mouseup: function (e, self) {
      self.state.mousePressed = false
    },
    mousemove: function (e, self) {
      // if self tool is selected AND the mouse is pressed
      if (self.state.selected && self.state.mousePressed) {
        const mouse = app.eventToMouse(e)
        const radius = Math.abs(Math.sin(Date.now() / 500) * 50)
        app.ctx.beginPath()
        app.ctx.arc(mouse.x, mouse.y, radius, 0, 2 * Math.PI, false)
        app.ctx.fill()
        app.ctx.fillStyle = 'white'
        // app.ctx.lineWidth = 5
        app.ctx.stroke()
      }
    }
  }
}

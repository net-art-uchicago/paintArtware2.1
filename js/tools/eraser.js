/* global app */
window.tools.eraser = {
  name: 'eraser',
  icon: '/images/eraser.png',
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
        const radius = app.ctx.lineWidth * 10
        app.ctx.save()
        app.ctx.globalAlpha = 0.5
        app.ctx.fillStyle = 'white'
        app.ctx.beginPath()
        app.ctx.arc(mouse.x, mouse.y, radius, 0, 2 * Math.PI, false)
        app.ctx.fill()
        app.ctx.restore()
      }
    }
  }
}

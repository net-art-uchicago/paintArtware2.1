/* global app */
window.tools.randomShape = {
  name: 'random shapes',
  icon: '/images/randomshapes.png',
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
      if (self.state.selected && self.state.mousePressed) {
        const randomNumber = Math.floor(Math.random() * 3)
        const mouse = app.eventToMouse(e)
        const size = Math.abs(Math.sin(Date.now() / 500) * 50)
        app.ctx.beginPath()
        if (randomNumber === 0) {
          app.ctx.arc(mouse.x, mouse.y, size, 0, 2 * Math.PI, false)
          app.ctx.fill()
          app.ctx.fillStyle = 'blue'
          app.ctx.stroke()
        }
        else if (randomNumber === 1) {
          app.ctx.rect(mouse.x, mouse.y, (size * 2), (size * 2))
          app.ctx.fill()
          app.ctx.fillStyle = 'red'
          app.ctx.stroke()
        }
        else {
          app.ctx.moveTo(mouse.x + (size / 10) + 50, mouse.y + size / 10)
          app.ctx.lineTo(mouse.x + (size / 8), mouse.y + (size / 8) - 50)
          app.ctx.lineTo(mouse.x + (size / 8) - 50, mouse.y + (size / 8))
          app.ctx.fill()
          app.ctx.fillStyle = 'green'
          app.ctx.stroke()
        }
      }
    }
  }
}
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
        console.log(size)
        app.ctx.beginPath()
        if (randomNumber === 0) {
          app.ctx.arc(mouse.x, mouse.y, size, 0, 2 * Math.PI, false)
          app.ctx.fill()
          app.ctx.fillStyle = 'blue'
          app.ctx.stroke()
          console.log('circle')
        }
        else if (randomNumber === 1) {
          app.ctx.rect(mouse.x, mouse.y, mouse.x + size, mouse.y + size)
          app.ctx.fill()
          app.ctx.fillStyle = 'red'
          app.ctx.stroke()
          console.log('rectangle')
        }
        else {
          app.ctx.moveTo((size / 2) + 50, size / 2)
          app.ctx.lineTo((size / 2), (size / 2) - 50)
          app.ctx.lineTo((size / 2) - 50, size / 2)
          app.ctx.fill()
          app.ctx.fillStyle = 'green'
          app.ctx.stroke()
          console.log('triangle')
        }
      }
    }
  }
}
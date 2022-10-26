/* global app */
window.tools.star = {
  name: 'star',
  icon: '/images/star-icon.png',
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
      app.ctx.save()

      app.ctx.fillStyle = 'rgba(0, 0, 0, 0)'
      app.ctx.strokeStyle = 'gold'

      if (self.state.selected && self.state.mousePressed) {
        const mouse = app.eventToMouse(e)
        const alpha = (2 * Math.PI) / 10
        var r = Math.abs(Math.sin(Date.now() / 500) * 12)
        var star_pt = [mouse.x, mouse.y]

        app.ctx.beginPath()

        for (var i = 10; i > 0; i--) {
          var r_tmp = r * (i % 2 + 1)
          var omega = alpha * i
          app.ctx.lineTo((r_tmp * Math.sin(omega)) + star_pt[0], (r_tmp * Math.cos(omega)) + star_pt[1])
        }

        app.ctx.closePath()
        app.ctx.fill()
        app.ctx.stroke()
        
        app.ctx.restore()
      }
    }
  }
}
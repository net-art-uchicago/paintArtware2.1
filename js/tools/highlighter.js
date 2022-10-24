window.tools.highlighter = {
  name: 'highlighterl',
  icon: '/images/highlighter.jpg',
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
      if (self.state.selected && self.state.mousePressed) {
        const mouse = app.eventToMouse(e)
        const px = self.state.prevMouse.x || mouse.x
        const py = self.state.prevMouse.y || mouse.y
        app.ctx.beginPath()
        app.ctx.moveTo(mouse.x, mouse.y)
        app.ctx.lineTo(px, py)
        app.ctx.closePath()
        app.ctx.stroke()
        app.ctx.strokeStyle = 'rgba(224,237,39,0.5)'
        app.ctx.lineWidth = 10
        self.state.prevMouse = { x: mouse.x, y: mouse.y }
      }
    }
  }
}
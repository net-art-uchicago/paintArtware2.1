/* global app */
window.tools.platformer = {
  name: 'platformer',
  icon: '/images/zoom-icon.png',
  state: {
    selected: false,
    mousePressed: false,
    setup: false,
    xPos: 0,
    yPos: 0,
    oldX: 0,
    oldY: 0
  },
  events: {
    mousedown: function (e, self) {
      const mouse = app.eventToMouse(e)
      if (self.state.selected) {
        console.log(mouse.x, mouse.y)
      }
    },
    mousemove: function (e, self) {
      function platformerLoop (self) {
        console.log('plat loop', self.state.xPos++)
      }
      // using this as a dummy piece of code to run setup early on because
      // I don't have any better choices right now
      // A better option would be to place this in the framework setup
      if (self.state.setup === false) {
        self.state.setup = true
        console.log('hllow')
        setInterval(platformerLoop, 20, self)
      }
    }
  }
}

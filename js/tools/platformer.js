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
    oldY: 0,
    gravity: 1 // note that this value is the downward force
  },
  events: {
    mousedown: function (e, self) {
      const mouse = app.eventToMouse(e)
      if (self.state.selected) {
        self.state.xPos = mouse.x
        self.state.yPos = mouse.y
      }
    },
    mousemove: function (e, self) {
      function platformerLoop (self) {
        console.log('plat loop', self.state.xPos, self.state.yPos, self.state.selected)
        if (self.state.selected) {
          app.ctx.rect(self.state.xPos - 2, self.state.yPos - 2, 3, 3)
          app.ctx.fill()
          // check if touching a black pixel directly below
          var grounded = false
          const floorPixel = app.ctx.getImageData(self.state.xPos, self.state.yPos + 2, 1, 1).data
          if (
            floorPixel[0] < 120 &&
            floorPixel[1] < 120 &&
            floorPixel[2] < 120 &&
            floorPixel[3] > 200) {
            grounded = true
          }
          if (!grounded) {
            self.state.yPos += self.state.gravity
          } else {
            console.log('grounded')
          }
        }
      }
      // using this as a dummy piece of code to run setup early on because
      // I don't have any better choices right now
      // A better option would be to place this in the framework setup
      if (self.state.setup === false) {
        self.state.setup = true
        console.log('hllow')
        setInterval(platformerLoop, 2, self)
      }
    },
    keydown: function (e, self) {
      console.log('user pressed key', e.code)
      if (e.code === 'ArrowLeft') {
        self.state.xPos -= 1
      }
      if (e.code === 'ArrowRight') {
        self.state.xPos += 1
      }
    }
  }
}

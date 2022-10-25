/* global app */
window.tools.platformer = {
  name: 'platformer',
  icon: '/images/zoom-icon.png',
  state: {
    selected: false,
    mousePressed: false,
    jumpFlag: false, // tells the game loop to try and jump
    setup: false,
    xPos: 0,
    yPos: 0,
    oldX: 0,
    oldY: 0,
    xVel: 0,
    yVel: 0,
    gravity: 1, // note that this value is the downward force
    maxGrav: 5
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
      function checkGrounded (self) {
        if (self.state.yPos >= app.canvas.height - 5) {
          return true
        }
        const floorPixel = app.ctx.getImageData(self.state.xPos, self.state.yPos + 2, 1, 1).data
        if (
          floorPixel[0] < 120 &&
          floorPixel[1] < 120 &&
          floorPixel[2] < 120 &&
          floorPixel[3] > 200) {
          return true
        }
        return false
      }

      function platformerLoop (self) {
        console.log('plat loop',
          self.state.xPos, self.state.yPos,
          self.state.selected, self.state.yVel,
          checkGrounded(self), self.state.jumpFlag)
        if (!self.state.selected) {
          return
        }

        // move down an amount equal to yVel if negative
        for (let i = 0; i < self.state.yVel; i++) {
          const grounded = checkGrounded(self)
          if (!grounded) {
            self.state.yPos++
          } else {
            self.state.yVel = 0
            break
          }
        }

        const grounded = checkGrounded(self)

        if (self.state.jumpFlag && grounded) {
          self.state.yVel = -5
        }
        self.state.jumpFlag = false

        if (self.state.yVel < 0) {
          self.state.yPos += self.state.yVel
        }
        if (!grounded && self.state.yVel < self.state.maxGrav) {
          self.state.yVel++
        }

        app.ctx.rect(self.state.xPos - 2, self.state.yPos - 2, 3, 3)
        app.ctx.fill()
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
      if (e.code === 'Space') {
        console.log('hi')
        self.jumpFlag = true
      }
    }
  }
}

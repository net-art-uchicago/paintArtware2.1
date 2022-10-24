/* global app */
window.tools.randAlpha = {
  name: 'randAlpha',
  icon: '/images/randAlpha.png',
  state: {
    selected: false,
    mousePresesd: false
    // other state properties go here
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
        app.ctx.save()

        const mouse = app.eventToMouse(e)
        const fonts = ['Times New Roman', 'Arial', 'monospace', 'Comic Sans', 'fantasy']
        const randFont = Math.floor(Math.random() * fonts.length)
        const randSize = Math.floor(Math.random() * 70) + 15
        // draw random integers between 0-9
        app.ctx.font = randSize + 'px ' + fonts[randFont]
        // adds random fill color
        const rFill = Math.random() * 255
        const gFill = Math.random() * 255
        const bFill = Math.random() * 255
        app.ctx.fillStyle = `rgb(${rFill}, ${gFill}, ${bFill})`
        // adds random stroke color
        const rStroke = Math.random() * 255
        const gStroke = Math.random() * 255
        const bStroke = Math.random() * 255
        app.ctx.strokeStyle = `rgb(${rStroke}, ${gStroke}, ${bStroke})`
        // generates random letter (ASCII 65-116), generates random offset
        const randAlpha = Math.floor(Math.random() * 52) + 65
        const randOffset = Math.floor(Math.random() * (10))
        app.ctx.fillText(String.fromCharCode(randAlpha), mouse.x, mouse.y)
        app.ctx.strokeText(String.fromCharCode(randAlpha), mouse.x + randOffset, mouse.y + randOffset)

        app.ctx.restore()
      }
    }
  }
}

/* global app */
window.filters.blur = {
    name: 'blur',
    menu: 'Edit',
    run: function () {
      const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
      const data = imageData.data
      
        let k1 = [[1, 1, 1],
                    [1, 1, 1],
                    [1, 1, 1]]; // box blur matrix

        let w = app.canvas.width;
        let h = app.canvas.height;
        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                let ul = ((x-1+w)%w + w*((y-1+h)%h))*4; // location of the UPPER LEFT
                let uc = ((x-0+w)%w + w*((y-1+h)%h))*4; // location of the UPPER CENTER
                let ur = ((x+1+w)%w + w*((y-1+h)%h))*4; // location of the UPPER RIGHT
                let ml = ((x-1+w)%w + w*((y+0+h)%h))*4; // location of the LEFT
                let mc = ((x-0+w)%w + w*((y+0+h)%h))*4; // location of the CENTER PIXEL
                let mr = ((x+1+w)%w + w*((y+0+h)%h))*4; // location of the RIGHT
                let ll = ((x-1+w)%w + w*((y+1+h)%h))*4; // location of the LOWER LEFT
                let lc = ((x-0+w)%w + w*((y+1+h)%h))*4; // location of the LOWER CENTER
                let lr = ((x+1+w)%w + w*((y+1+h)%h))*4; // location of the LOWER RIGHT

                p0 = data[ul]*k1[0][0]; // upper left
				p1 = data[uc]*k1[0][1]; // upper mid
				p2 = data[ur]*k1[0][2]; // upper right
				p3 = data[ml]*k1[1][0]; // left
				p4 = data[mc]*k1[1][1]; // center pixel
				p5 = data[mr]*k1[1][2]; // right
				p6 = data[ll]*k1[2][0]; // lower left
				p7 = data[lc]*k1[2][1]; // lower mid
				p8 = data[lr]*k1[2][2]; // lower right
				let red = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/9;
					
				p0 = data[ul+1]*k1[0][0]; // upper left
				p1 = data[uc+1]*k1[0][1]; // upper mid
				p2 = data[ur+1]*k1[0][2]; // upper right
				p3 = data[ml+1]*k1[1][0]; // left
				p4 = data[mc+1]*k1[1][1]; // center pixel
				p5 = data[mr+1]*k1[1][2]; // right
				p6 = data[ll+1]*k1[2][0]; // lower left
				p7 = data[lc+1]*k1[2][1]; // lower mid
				p8 = data[lr+1]*k1[2][2]; // lower right
				let green = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/9;
					
				p0 = data[ul+2]*k1[0][0]; // upper left
				p1 = data[uc+2]*k1[0][1]; // upper mid
				p2 = data[ur+2]*k1[0][2]; // upper right
				p3 = data[ml+2]*k1[1][0]; // left
				p4 = data[mc+2]*k1[1][1]; // center pixel
				p5 = data[mr+2]*k1[1][2]; // right
				p6 = data[ll+2]*k1[2][0]; // lower left
				p7 = data[lc+2]*k1[2][1]; // lower mid
				p8 = data[lr+2]*k1[2][2]; // lower right
				let blue = (p0+p1+p2+p3+p4+p5+p6+p7+p8)/9;
					
				data[mc] = red;
				data[mc+1] = green;
				data[mc+2] = blue;
				data[mc+3] = data[lc+3];
			}
        }

      app.ctx.putImageData(imageData, 0, 0)
    }
  }
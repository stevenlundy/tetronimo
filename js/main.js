'use strict';
var c = document.getElementById('pane').getContext('2d');
var w = c.canvas.width;
var h = c.canvas.height;

// Canvas code here
 var vx = 1;
var vy = 1;
var step = 50;  // In milliseconds

var x = 0;
var y = 0;
var size = 50;
var w = c.canvas.width;
var h = c.canvas.height;
var cmTID;


function drawStep() {
  // Clear the screen
  c.clearRect(0, 0, w, h);
  // Draw the box
  //c.strokeRect(x, y, size, size);
  drawScreen();
  // Move the box unless at edge
  if (x + vx + size < w &&
      y + vy + size < h) {
    x += vx;
    y += vy;
    clearTimeout(cmTID);
    // Do it again in a little bit
    cmTID = setTimeout(drawStep, step);
  }
}
function randBetween(min, max){
  var range = max - min +1;
  return Math.floor(Math.random()*range + min);
}

function drawScreen(){
  var y = 0;
  var height = h/scr.length;
  for(var i = 0; i <scr.length; i++){
    var x = 0;
    var width = w/scr[i].length;
    for(var j = 0; j < scr[i].length; j++){
      if(scr[i][j] === "X"){
        c.fillStyle = "RGB("+randBetween(0,255)+","+randBetween(0,255)+","+randBetween(0,255)+")";
        c.fillRect(x, y, width, height)
      }
      x += width;
    }
    y += height;
  }
}

var scr = [];
for(var i = 0; i < 20; i++){
  scr[i] = [];
  for(var j = 0; j < 10; j++){
    scr[i][j] = "X";
  }
}
drawStep();
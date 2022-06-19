let canvas = document.getElementById("moncanvas");
let scoreEl = document.getElementById("score-el");
let vagueEl = document.getElementById("vague-el");
let ctx = canvas.getContext("2d")

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx=2;
let dy=4;
let r = 10;
let X = 150;
let Y = 150;
let padPosition = canvas.width / 2;
let padHeight = 10;
let padWidht = 75;
let rightDown = false;
let leftDown = false;
let t = 20;
let score = 0;
let vague = 0;

/*function menu() {
  var x = document.getElementById("param");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}*/

ctx.strokeText('SUPER CASSE BRIQUE', 25, 50);

function Play(){ 
  let audio = new Audio('audio/pokemon-blanche-noire-musique-port-yoneuve.mp3');
  audio.play();
}

function winStage(){
  let audio = new Audio('audio/win.wav');
  audio.play();
}

function failStage(){
  let audio = new Audio('audio/fail.wav');
  audio.play();
}

function pop(){ 
  let pop = new Audio('audio/pop.wav');
  pop.play();
}

function init() {
  ctx = canvas.getContext("2d");
  WIDTH = canvas.width;
  HEIGHT = canvas.height;
  initbricks();
  return setInterval(draw, t);
}

function over() {
  ctx.strokeText('GAME OVER', 25, 50);
}

function circle(X,Y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2,true);
  ctx.closePath();
  ctx.fillStyle="white";
  ctx.fill();
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

// Fin du code des fonctions de notre bibliothèque

function draw() {
  clear();
  circle(X, Y, r,0,Math.PI*2);

  if (x + dx > WIDTH - r || x + dx < r) // Dépassement à droite ou à gauche
    dx = -dx;
  if (y + dy > HEIGHT - r || y + dy < r) // Dépassement en bas ou en haut
    dy = -dy;

  x += dx;
  y += dy;
}

function draw() {
  clear();
  circle(X, Y, r,0,Math.PI*2);
  rect(padPosition, HEIGHT - padHeight, padWidht, padHeight);
  padding = 6;
 
  if (x + dx > WIDTH - r || x + dx < r)
    dx = -dx;

  if (y + dy < r)
    dy = -dy;
  else if (y + dy > HEIGHT - r) {
    if (x > padPosition && x < padPosition + padWidht)
      // Si la balle rentre en collision avec la raquette, la balle rebondit
      dy = -dy;
  }

  x += dx;
  y += dy;
}



// En cas d'appui sur une touche
function onKeyDown(evt) {
  if (evt.keyCode == 39) 
    rightDown = true; // La touche droite est enfoncée
  else if (evt.keyCode == 37) 
    leftDown = true; // La touche gauche est enfoncée
}

// En cas de relâchement d'une touche
function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false; // La touche droite est relâchée
  else if (evt.keyCode == 37) leftDown = false; // La touche gauche est relâchée
}

document.onkeydown = onKeyDown; // Association de nos fonctions aux événements
document.onkeyup=onKeyUp;     // correspondants du clavier
       
function draw() {
  clear();
  circle(x, y, r,0,Math.PI*2);

  // Déplacer la raquette selon si gauche ou droite est actuellement enfoncée
  if (rightDown == true) 
    padPosition += 5;
  else if (leftDown == true) 
    padPosition -= 5;
  rect(padPosition, HEIGHT - padHeight, padWidht, padHeight); // Traçage de la raquette
 
  if (x + dx > WIDTH || x + dx < 0)
    dx = -dx;

  if (y + dy < 0)
    dy = -dy;
  else if (y + dy > HEIGHT) {
    if (x > padPosition && x < padPosition + padWidht)
      dy = -dy;
    else
      alert('Ho')
  }
 
  x += dx;
  y += dy;
}



var bricks;
var NROWS;
var NCOLS;
var BRICKWIDTH;
var BRICKHEIGHT;
var PADDING;

function initbricks() {
  NROWS = 5;
  NCOLS = 5;
  BRICKWIDTH = (WIDTH/NCOLS) - 1;
  BRICKHEIGHT = 20;
  PADDING = 1;

  bricks = new Array(NROWS);
  for (i=0; i < NROWS; i++) {
    bricks[i] = new Array(NCOLS);
    for (j=0; j < NCOLS; j++) {
      bricks[i][j] = 1;
    }
  }
}
       
function draw() {
  clear();
  circle(x, y, 10,0,Math.PI*2);

  if (rightDown) padPosition += 5;
  else if (leftDown) padPosition -= 5;
  rect(padPosition, HEIGHT - padHeight, padWidht, padHeight);

  // Traçage des briques
  for (i=0; i < NROWS; i++) {
    for (j=0; j < NCOLS; j++) {
      if (bricks[i][j] == 1) { // Si elle n'a pas été démolie
        rect((j * (BRICKWIDTH + PADDING)) + PADDING, 
             (i * (BRICKHEIGHT + PADDING)) + PADDING,
             BRICKWIDTH, BRICKHEIGHT);
      }
    }
  }

  // La balle est-elle rentrée en collision avec une brique ?
  rowheight = BRICKHEIGHT + PADDING;
  colwidth = BRICKWIDTH + PADDING;
  row = Math.floor(y/rowheight);
  col = Math.floor(x/colwidth);
  // Si c'est le cas, faire rebondir la balle et marquer la brique comme démolie
  if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
    pop();
    dy = -dy;
    bricks[row][col] = 0;
    score++;
    scoreEl.textContent = "SCORE: " + score;
  }

  if (score === 25) {
      winStage();
      score = 0;
      t-=2;
      initbricks();
      vague++;
      vagueEl.textContent = "VAGUE: " + vague;  
      console.log(t)
    }

 
  // On prend en compte la paroi de la balle et non son centre
  if (x + dx + r > WIDTH || x + dx - r < 0)
    dx = -dx;

  if (y + dy - r < 0)
    dy = -dy;
  else if (y + dy + r > HEIGHT - padHeight) {
    if (x > padPosition && x < padPosition + padWidht) {
      // On renvoie la balle différemment selon son lieu d'atterrissage
      dx = 8 * ((x-(padPosition+padWidht/2))/padWidht);
      dy = -dy;
    }
    else if (y + dy + r > HEIGHT){ 
      failStage();
      
      location.reload();
      
      if (confirm("GAME OVER! " + "\n" + " YOUR SCORE: " + score + " VAGUE SURVIVE: " + vague + "\n" + "REPLAY?") == true) {
        init();
        initbricks();
      }     }
  }
 
  x += dx;
  y += dy;
}

 
    
  
 







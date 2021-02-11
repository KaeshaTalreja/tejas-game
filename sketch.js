
var gameState="loading";
var game;
var loadingPng

function preload(){
loadingPng = loadImage("download.png")
}
function setup() {
  
  createCanvas(800,400);
  game= new Game()
}

var playButton,playButton2,boy,ground;

function draw() {
  background(255,255,255);  
  drawSprites();
   if (gameState==="loading") {
   	game.loading();
   }
   else if (gameState==="instruction") {
   	game.instruction();
   }
   else if (gameState==="play") {
    game.play();
   }
}
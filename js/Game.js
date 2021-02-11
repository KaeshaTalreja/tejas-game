class Game {
	constructor(){
  
	}
	loading(){
		
		 playButton = createSprite(450,210,50,50)
		 playButton.addImage(loadingPng)
		 drawSprites();
		 text("loading page",400,200)
		if (mousePressedOver(playButton)) {
	        gameState="instruction";
	        playButton.visible=false;
		}
		else{
			playButton.visible=false
		}
	}
	instruction(){
		text("welcome to earn to live",400,200)
	//	playButton.visible=false;
		playButton2=createSprite(400,300,100,100)
		drawSprites();
		if (mousePressedOver(playButton2)) {
	        gameState="play";
	        playButton2.visible=false;
		}
		else{
			playButton2.visible=false
		}
	}
	
	play(){
		//background("white");
		
	    boy = createSprite(100,300,10,10)
	    ground = createSprite(400,370,200,40)
	    ground.velocityX=-4
	    if(ground.x<0)
	    	ground.x=ground.width/2 
		drawSprites();
	}

}
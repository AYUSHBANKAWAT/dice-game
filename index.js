function diceRoll(){
	var index = Math.floor(Math.random()*6+1);
	var diceimage = "dice"+index+".png";
	var diceAddress = "resources/"+diceimage;
	var image1 = document.querySelectorAll("img")[0];
	image1.src = diceAddress;
	var index2 = Math.floor(Math.random()*6+1);
	var diceimage2 = "dice"+index2+".png";
	var diceAddress2 = "resources/"+diceimage2;
	var image2 = document.querySelectorAll("img")[1];
	image2.src = diceAddress2;
	if( index>index2 ){
		var text1  = document.querySelectorAll("h2")[2].innerHTML = "Left Player Wins";
	}else if( index<index2 ){
		var text1  = document.querySelectorAll("h2")[2].innerHTML = "Right Player Wins";
	}else{
		var text1  = document.querySelectorAll("h2")[2].innerHTML = "Draw";
	}

}

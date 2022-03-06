 

 



//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////






let moveC = new moveCountHTML();

moveC.setCount(0);

let boxes = new BoxesAndHTML();
boxes.setCols(5);

let coloR = new color();
let playerNum = Math.floor(Math.random()*25);

for(let i = 0; i < 25; i++){
	if(playerNum != i){
		let box = new boxAndHtml();	
		box.setScore(Math.floor(Math.random()*15));
		box.element.element.style.backgroundColor = coloR.generate();
		boxes.setBox(box.element.element);		
	} else {
		let player = new playerAndHtml();
		player.element.element.stylebackgroundColor = 'white';
		player.element.element.textContent = 'игрок';
		boxes.setBox(player.element.element);		
	}	
}

// -------------------------------

let rowS = new rowsAndHTML();
rowS.setCount(5);

for(let i =0 ; i < rowS.getCount(); i++){
	let roW = new rowAndHtml();
	rowS.setRow(row);
}

// -------------------------------

let colS = new colsAndHTML();
colS.setCount(5);

for(let i =0 ; i < colS.getCount(); i++){
	let coL = new colAndHTML();
	colS.setCol(col);
}

boxes.reload();
rowS.reload();
colS.reload();





///////////// протестируем какое-нибудь действие


//let actCollisionRow = new actionCollisionRow();
//let actCollisionCol = new actionCollisionCol();
/*
let actMove = new actionMoveLeft();
let complexCollisioN = new complexCollision();
let playeR = new playerAndHtmlM();

actMove.setStep(50);
actMove.setNext(complexCollisioN);

actMove.action(playeR.element);
*/


let ek = new eventKeyDown();

ek.setKey( new arrowLeftKey()  );
ek.setKey( new arrowUpKey()    );
ek.setKey( new arrowRightKey() );
ek.setKey( new arrowDownKey()  );

let playeR = new playerAndHtmlM();
playeR.score.setScore(5);
ek.event(playeR);

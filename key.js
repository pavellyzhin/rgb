class key {
	
	constructor(){
		this.code = null;
		this.handler = null;
	}
	
	setCode(code){
		this.code = code;
	}
	
	getCode(){
		return this.code;
	}
	
	setHandler(handler){
		this.handler = handler;
	}
	
	action(){
		this.handler();
	}
	
	getHandler(){
		return this.handler;
	}
	
	clearHandler(){
		this.handler = null;
	}
	
	clearCode(){
		this.code = null;
	}
}

class arrowLeftKey extends key {
	constructor(){
		super();
		this.setCode('ArrowLeft');
	}	
	
	down(player){
		
		let actMove = new actionMoveLeft();
		
		let collisionRow = new actionCollisionRow();
		let collisionCol = new actionCollisionCol();
		let collisionBox = new actionCollisionBox();
		
		let outUp    = new actionMoveOutUp();
		let outLeft  = new actionMoveOutLeft();
		let outRight = new actionMoveOutRight();
		let outDown  = new actionMoveOutDown();
		
		actMove.setStep(50);
		let gameOveR = new gameOver();
		gameOveR.setNext(actMove);
		actMove.setNext(outUp);
		outUp.setNext(outLeft);
		outLeft.setNext(outRight);
		outRight.setNext(outDown);
		outDown.setNext(collisionRow);
		
		collisionRow.setNext(collisionCol);
		collisionCol.setNext(collisionBox);
		
		let acj = new actionColorJoines();
		collisionBox.setNext(acj);
		
		gameOveR.action(player);
	}
}

class arrowRightKey extends key {
	constructor(){
		super();
		this.setCode('ArrowRight');
	}	
	
	down(player){
	
		let actMove = new actionMoveRight();
		
		let collisionRow = new actionCollisionRow();
		let collisionCol = new actionCollisionCol();
		let collisionBox = new actionCollisionBox();
		
		let outUp    = new actionMoveOutUp();
		let outLeft  = new actionMoveOutLeft();
		let outRight = new actionMoveOutRight();
		let outDown  = new actionMoveOutDown();
		
		actMove.setStep(50);
		let gameOveR = new gameOver();
		gameOveR.setNext(actMove);
		actMove.setNext(outUp);
		outUp.setNext(outLeft);
		outLeft.setNext(outRight);
		outRight.setNext(outDown);
		outDown.setNext(collisionRow);
		
		collisionRow.setNext(collisionCol);
		collisionCol.setNext(collisionBox);
		
		let acj = new actionColorJoines();
		collisionBox.setNext(acj);
		
		gameOveR.action(player);
	}
}

class arrowUpKey extends key {
	constructor(){
		super();
		this.setCode('ArrowUp');
	}
	
	down(player){
		
		
		let actMove = new actionMoveUp();
		
		let collisionRow = new actionCollisionRow();
		let collisionCol = new actionCollisionCol();
		let collisionBox = new actionCollisionBox();
		
		let outUp    = new actionMoveOutUp();
		let outLeft  = new actionMoveOutLeft();
		let outRight = new actionMoveOutRight();
		let outDown  = new actionMoveOutDown();
		
		actMove.setStep(50);
		let gameOveR = new gameOver();
		gameOveR.setNext(actMove);
		actMove.setNext(outUp);
		outUp.setNext(outLeft);
		outLeft.setNext(outRight);
		outRight.setNext(outDown);
		outDown.setNext(collisionRow);
		
		collisionRow.setNext(collisionCol);
		collisionCol.setNext(collisionBox);
		
		let acj = new actionColorJoines();
		collisionBox.setNext(acj);
		
		gameOveR.action(player);
	}
}

class arrowDownKey extends key {
	constructor(){
		super();
		this.setCode('ArrowDown');
	}
	
	down(player){
		
		
		let actMove = new actionMoveDown();
		
		let collisionRow = new actionCollisionRow();
		let collisionCol = new actionCollisionCol();
		let collisionBox = new actionCollisionBox();
		
		let outUp    = new actionMoveOutUp();
		let outLeft  = new actionMoveOutLeft();
		let outRight = new actionMoveOutRight();
		let outDown  = new actionMoveOutDown();
		
		actMove.setStep(50);
		let gameOveR = new gameOver();
		gameOveR.setNext(actMove);
		actMove.setNext(outUp);
		outUp.setNext(outLeft);
		outLeft.setNext(outRight);
		outRight.setNext(outDown);
		outDown.setNext(collisionRow);
		
		collisionRow.setNext(collisionCol);
		collisionCol.setNext(collisionBox);
		
		let acj = new actionColorJoines();
		collisionBox.setNext(acj);
		
		gameOveR.action(player);
	}
}





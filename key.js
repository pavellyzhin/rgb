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
		let commanD = new command();
		commanD.setAct(new actionMoveLeft());
		commanD.action(player);
	}
}

class arrowRightKey extends key {
	constructor(){
		super();
		this.setCode('ArrowRight');
	}	
	
	down(player){
		let commanD = new command();
		commanD.setAct(new actionMoveRight());
		commanD.action(player);
	}
}

class arrowUpKey extends key {
	constructor(){
		super();
		this.setCode('ArrowUp');
		
	}
	
	down(player){
		// этот функционал повторяется, а значит его нужно вынести. из 3 сделать 1 
		let commanD = new command();
		commanD.setAct(new actionMoveUp());
		commanD.action(player);
	}
}

class arrowDownKey extends key {
	constructor(){
		super();
		this.setCode('ArrowDown');
	}
	
	down(player){
		let commanD = new command();
		commanD.setAct(new actionMoveDown());
		commanD.action(player);
	}
}

class command {
	
	constructor(){
		this.act = null;
	}
	
	setAct(act){
		this.act = act;
	}
	
	action(player){
		let collisionRow = new actionCollisionRow();
		let collisionCol = new actionCollisionCol();
		let collisionBox = new actionCollisionBox();
		
		let outUp    = new actionMoveOutUp();
		let outLeft  = new actionMoveOutLeft();
		let outRight = new actionMoveOutRight();
		let outDown  = new actionMoveOutDown();
		let gameOveR = new gameOver();
		
		this.act.setStep(50);
		
		gameOveR.setNext(this.act);
		this.act.setNext(outUp);
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
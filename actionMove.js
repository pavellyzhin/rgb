class actionMove extends action {
	
	constructor(){
		super();
		this.step = null; // шаг на Npx влево вправо и т.д.
	}
	
	setStep(num){
		this.step = num;
	}
	
	getStep(){
		return this.step;
	}
	
	clearStep(){
		this.step = null;
	}
}

class actionMoveLeft extends actionMove {
	constructor(){
		super();
	}
	
	action(element){
		
		element.element.element.style.left = element.element.getLeft() - this.getStep() + 'px';
		
		if(this.next != null) {
			this.next.action(element);
		}
	}
}

class actionMoveRight extends actionMove {
	constructor(){
		super();
	}
	
	action(element){
		
		element.element.element.style.left = element.element.getLeft() + this.getStep() + 'px';
		
		if(this.next != null){
			this.next.action(element);
		}
	}
}

class actionMoveUp extends actionMove {
	constructor(){
		super();
	}
	
	action(element){
		
		element.element.element.style.top = element.element.getTop() - this.getStep() + 'px';
		
		if(this.next != null){
			this.next.action(element);
		}
	}
}

class actionMoveDown extends actionMove {
	constructor(){
		super();
	}
	
	action(element){
		
		element.element.element.style.top = element.element.getTop() + this.getStep() + 'px';
		
		if(this.next != null) {
			this.next.action(element);
		}
	}
}

class actionMoveOut extends actionMove {
	constructor(){
		super();
	}
	
	action(element){
		
		// игрок выходит за пределы игрового поля?
		// нужно отследить
		
		if(this.next != null) {
			this.next.action(element);
		}
	}
}


class actionMoveOutLeft extends actionMoveOut {
	
	constructor(){
		super();
	}
	
	action(element){ // element - .player
		
		let collision = new collisionHTML();
		let gameBoard = new html();
		
		gameBoard.qs('.gameBoardRGB');
		
		collision.setElement(element.element);
		collision.setTarget(gameBoard);
		
		if(collision.elementLeftLeftTargetLeft()) {
			
			element.element.element.style.left = element.element.getLeft() + 50 + 'px';
			
		} else {
			if(this.next != null) {
				this.next.action(element);
			}
		}
	}
}


class actionMoveOutRight extends actionMoveOut {
	
	constructor(){
		super();
	}
	
	action(element){ // element - .player
		
		let collision = new collisionHTML();
		let gameBoard = new html();
		
		gameBoard.qs('.gameBoardRGB');
		
		collision.setElement(element.element);
		collision.setTarget(gameBoard);
		
		if(collision.elementLeftRightTargetRight() || collision.elementLeftEquallyTargetRight()){
			
			element.element.element.style.left = element.element.getLeft() - 50 + 'px';
			
		} else {
			if(this.next != null) {
				this.next.action(element);
			}
		}
	}
}


class actionMoveOutUp extends actionMoveOut {
	
	constructor(){
		super();
	}
	
	action(element){ // element - .player
		
		let collision = new collisionHTML();
		let gameBoard = new html();
		
		gameBoard.qs('.gameBoardRGB');
		
		collision.setElement(element.element);
		
		collision.setTarget(gameBoard);
		
		if(collision.elementTopHeigerTargetTop()){
			
			element.element.element.style.top = element.element.getTop() + 50 + 'px';
			
		} else {
			if(this.next != null) {
				this.next.action(element);
			}
		}
	}	
}

class actionMoveOutDown extends actionMoveOut {
	
	constructor(){
		super();
	}
	
	action(element){ // element - .player
		
		let collision = new collisionHTML();
		let gameBoard = new html();
		
		gameBoard.qs('.gameBoardRGB');
		
		collision.setElement(element.element);
		collision.setTarget(gameBoard);
		
		if(collision.elementTopLowerTargetBottom() || collision.elementTopEquallyTargetBottom()){
			
			element.element.element.style.top = element.element.getTop() - 50 + 'px';
			
		} else {
			if(this.next != null) {
				this.next.action(element);
			}
		}
	}	
}
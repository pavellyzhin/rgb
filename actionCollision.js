class actionCollision extends action {
	
	constructor(){
		super();
	}
	
}

class actionCollisionRow extends actionCollision {

	constructor(){
		super();
	}

	action(element){
		let collision = new collisionHTML();
		collision.setElement(element.element);
		
		let rows = new collectionHTML();
		rows.qsa('.row');
		// this.element - .player
		// element - .row
		
		for(let i = 0; i < rows.collection.length; i++){
			rows.setElement(rows.collection[i]);
			collision.setTarget(rows);
			
			if(collision.elementTopEquallyTargetTop()){		
			
				element.move.row = rows.element.textContent;
			console.log('row: '+ element.move.row);
				if(this.next != null) {
					this.next.action(element);
				}
			}
		}

	}
}

class actionCollisionCol extends actionCollision {
	
	constructor(){
		super();
	}
	
	action(element){
		
		// this.element - .player
		// element - .col
		
		let collision = new collisionHTML();
		collision.setElement(element.element);
		
		let cols = new collectionHTML();
		cols.qsa('.col');

		for(let i = 0; i < cols.collection.length; i++){
			cols.setElement(cols.collection[i]);
			collision.setTarget(cols);
			
			if(collision.elementLeftEquallyTargetLeft()){	
				element.move.col = cols.element.textContent;			
			console.log('col: '+cols.element.textContent);
				if(this.next != null) {
					this.next.action(element);
				}
			}
		}
	}
}

class actionCollisionBox extends actionCollision {
	
	constructor(){
		super();
	}
	
	action(element){
		
		// this.element - .player
		// element - .box
		let collision = new collisionHTML();
		collision.setElement(element.element);
		
		let rows = new collectionHTML();
		rows.qsa('.box');
		// this.element - .player
		// element - .row

		for(let i = 0; i < rows.collection.length; i++){
			
			rows.setElement(rows.collection[i]);
			collision.setTarget(rows);
			
			if(collision.elementTopEquallyTargetTop() && collision.elementLeftEquallyTargetLeft()){			
				
				element.move.score = rows.element.textContent;			
				element.move.color = rows.element.style.backgroundColor;
				element.move.target = rows.element;
				element.move.setMove();
			
				element.moves.setMove(element.move.element.element);
				element.move.clear();
				element.moves.reload();
				element.moveCount.setCount(element.moves.moves.length);
				console.log(rows.element.style.backgroundColor);
				console.log('Box - ' + rows.element.textContent);
				if(this.next != null) {
					this.next.action(element);
				}
			}
		}
	}
}


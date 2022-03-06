
class movesModel {
	
	constructor(){
		this.moves = [];
	}
	
	setMove(move){
		this.moves.push(move);
	}
	
	get count(){
		return this.moves.length;
	}
	
}

class movesAndHTML extends movesModel {
	
	constructor(){
		super();
		this.element = new html();
		this.element.qs('.moves div.list');
	}
	
	setMove(moveAndHTML){
		super.setMove(moveAndHTML);
		this.reload();
	}
	
	reload(){
		
		this.element.clearContent();
		
		for(let i = 0; i < this.moves.length; i++){
			
			let move = new moveAndHTML();
			
			move.element.element.textContent = '#' + i + '-' + this.moves[i].textContent + ',';
			
			this.element.element.appendChild(move.element.element);
			
		}
	}
	
}

class moveModel {
	
	constructor(){
		this.move  = ''; // #1-A1-C-R - координата ее поместим в спан
		this.row   = null;
		this.col   = null;
		this.color = null;
		this.score = null;
		this.target = null;
	}
	
	setRow(row){
		this.row = row;
	}
	
	setTarget(target){
		this.target = target;
	}
	
	setCol(col) {
		this.col = col;
	}
	
	setColor(color){
		this.color = color;
	}
	
	setScore(score){
		this.score = score;
	}
	
	setMove(){
		this.move = this.row + this.col + '-' + this.color + ':' + this.score;
	}
	
	getMove(){
		return this.move;
	}
	
	clear(){
		this.move = '';
	}
}

class moveAndHTML extends moveModel {
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.create('span');
		this.element.element.className = 'mov';
	}
	
	setMove(){
		super.setMove();
		this.element.element.textContent = this.move;
	}
	
	clear(){
		super.clear();
		this.element = new html();
		this.element.create('span');
		this.element.element.className = 'mov';
	}
	
}

class moveCount {
	
	constructor(){
		this.count = 0;
	}
	
	setCount(num){
		this.count = num;
	}
	
	getCount(){
		return this.count;
	}
}

class moveCountHTML extends moveCount {
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.qs('.moves div.count');
		
	}
	
	setCount(num){
		super.setCount(num);
		this.element.element.textContent = 'Количество ходов: ' + num;
	}
	
}
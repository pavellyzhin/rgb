class htmlModel {
	
	constructor(element=''){
		this.element = element;
		this.collection = [];
	}

	getQS(className){
		this.element = document.querySelector('.' + className);
	}
	
	getQSA(className){
		this.collection = document.querySelectorAll('.' + className);
	}
	
	addElement(tag){
		this.element = document.createElement(tag);
	}
	
	getLeft(){
		return this.element.style.left.replace('px','');
	}
	
	getTop(){
		return this.element.style.top.replace('px','');
	}
	
	toLeft(num){
		this.element.style.left = parseInt(this.getLeft()) - parseInt(num) + 'px';
	}
	
	toRight(num){
		this.element.style.left = parseInt(this.getLeft()) + parseInt(num) + 'px';
	}
	
	toUp(num){
		this.element.style.top = parseInt(this.getTop()) - parseInt(num) + 'px';
	}
	
	toDown(num){
		this.element.style.top = parseInt(this.getTop()) + parseInt(num) + 'px';
	}
	
	setTop(y){
		this.element.style.top = y + 'px';
	}
	
	setLeft(x){
		this.element.style.left = x + 'px';
	}
	
	getWidth(){
		return this.element.offsetWidth;
	}
	
	getHeight(){
		return this.element.offsetHeight;
	}
	
	clear(){
		this.element.innerHTML='';
	}
	
}

class gameModel extends htmlModel {
	
	constructor(className){
		super();
		this.getQS(className);
		
		this.gameBoard      = new gameBoardModel('gameBoard');
		this.gameBoardRGB   = new gameBoardRGBModel('gameBoardRGB');
		this.gameBoardRows  = new gameBoardRowsModel('rows');
		this.gameBoardCols  = new gameBoardColsModel('gameBoardCols');
		
		this.gameScore	    = new gameScoreModel('score');
		this.gameMoves	    = new gameMovesModel('gameMoves');
		this.gameMovesScore = new gameMovesScoreModel('count');		
		
		this.player = new htmlModel();
		
		
		this.box = new htmlModel();
		
		
	}
	
	init(num){
		
		this.gameBoardCols.init(num);
		this.gameBoardRows.init(num);
		this.gameBoardRGB.initGen( num , num );
		
		this.gameScore.setScore(num);
		this.gameMovesScore.get(this.gameMoves.list.length);
		
		this.gameBoardCols.getQSA('col');
		this.gameBoardRows.getQSA('row');
		
		this.player.getQS('player');
		this.box.getQSA('box'); // collection box
		
		this.initHandle();
	}
	
	initHandle(){
		
		let keyDownDocument = new eventsKeyDownModel();
		
		let player = this.player;
		let boxCollection = this.box.collection;
		keyDownDocument.event((e) => {
		
		let playerActionCollision = new actionCollisionModel(player.element,boxCollection);
			
			switch(e.code){
				case 'ArrowLeft' : 
					
				break;
				case 'ArrowRight' : 
					
					
				break;
				case 'ArrowUp' :
					
					
				break;
				case 'ArrowDown' : 
					
					
				break;
			}
			
			
			
		});
		
	}
	
	actions(){
		
	}
}

class gameBoardModel extends htmlModel {
	constructor(className){
		super();
		this.getQS(className);
	}
}

class gameBoardRowsModel extends htmlModel{
	constructor(className){
		super();
		this.getQS(className);
	}
	
	init(num){
		
		for(let i = 0 ; i < num; i++ ){
			
			let el = new gameBoardRowsCellModel();
			el.element.style.width  = '50px';
			el.element.style.height = '50px';
			el.element.style.top = i * 50 + 'px';
			el.element.style.className = 'row';
			el.element.style.id = 'row_' + ( i + 1 );
			el.element.textContent = i + 1;
			el.element.style.lineHeight = '50px';
			el.element.style.textAlign = 'center';
			
			this.element.appendChild(el.element);
		}
	}
}

class gameBoardColsModel extends htmlModel{
	constructor(className){
		super();
		this.getQS(className);
	}
	
	init(num){
		
		this.clear();
		
		let generate = new generateContentModel();
		
		for(let i = 0 ; i < num; i++){
			
			let el = new gameBoardColsCellModel();
			
			el.element.style.width = '50px';
			el.element.style.height = '50px';
			el.element.style.left = i * 50 + 'px';
			el.element.style.className = 'col';
			el.element.style.id = 'col_' + ( i + 1 );
			el.element.style.lineHeight = '50px';
			el.element.style.textAlign = 'center';
			el.element.textContent = generate.symbol(i);
			
			this.element.appendChild(el.element);
		}
	}
	
	 
}

class gameBoardRGBModel extends htmlModel{
	
	constructor(className){
		super();
		this.getQS(className);
		
	}
	
	initGen(col,row){
		
		this.clear();
		
		this.element.style.width = col * 50 + 'px';
		this.element.style.height = row * 50 + 'px';
		
		let left = 0;
		let top  = 0;
		
		let gen  = new generateContentModel();
		
		let player = Math.floor(Math.random() * (col * row));
		
		for(let i = 0 ; i < (col * row) ; i++ ){
			
			let el  = new gameBoardRGBCellModel();
			let rgb = gen.randomRGB();
			
			if(i%row == 0 && i > 0) {

				left = 0;
				top += 50;

			} else {
				
				if(i > 0){
					
					left += 50;
					
				}
			}
			
			el.element.style.left   = left + 'px' ;
			el.element.style.top    = top  + 'px' ;
			el.element.style.width  = '50px' ;
			el.element.style.height = '50px' ;
			
			if(player == i){
				
				el.element.textContent = 'игрок';
				el.element.className   = 'player';
				el.element.style.zIndex = 2;
				el.element.style.backgroundColor = 'white';
				
			} else {
				
				el.element.style.zIndex = 1;
				el.element.textContent = gen.randomNumber(15);
				el.element.className   = 'box';
				el.element.style.backgroundColor = rgb;
				
			}
			
			el.element.id = i;
			
			this.element.appendChild(el.element);
		}
	}
	
	 
}

class gameScoreModel extends htmlModel {
	constructor(className){
		super();
		this.getQS(className);
	}
	
	getScore(){
		
	}
	
	setScore(num){
		this.element.textContent = 'Счет: ' + num;
	}
}

class gameMovesModel extends htmlModel{
	constructor(className){
		super();
		this.getQS(className);
		this.list = [];
	}
	
	setMove(){
		
	}
	
	getMoves(){
		
	}
}

class gameMovesScoreModel extends htmlModel {
	
	constructor(className){
		super();
		this.getQS(className);
	}
	
	get(num){
		this.element.textContent = 'Количество ходов: ' + num;
	}
	
}

class gameBoardRGBCellModel extends htmlModel{
	constructor(){
		super();
		this.addElement('div');
	}
}

class gameBoardColsCellModel extends htmlModel{
	constructor(){
		super();
		this.addElement('div');
	}
}

class gameBoardRowsCellModel extends htmlModel {
	constructor(){
		super();
		this.addElement('div');
	}
}

class gameMoveModel extends htmlModel {
	constructor(){
		super();
		this.addElement('span');
	}
}

class generateContentModel {
	
	constructor(){
		this.rgb = ['red','green','blue'];
		this.symbols = ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ'];
	}
	
	randomRGB(){
		return this.rgb[Math.floor(Math.random() * this.rgb.length)];
	}
	
	symbol(point){
		return this.symbols[point];
	}

	randomNumber(max){
		return Math.floor( Math.random() * max );
	}
}

class spaceModel {
	
	collisionLeftTop(element,target){
		return (this.eLeftEquallytTLeft(element,target) && this.eTopEquallyTTop(element,target));
	}
	
	
	eLeftEquallytTLeft(element,target){
		return (this.sizeToNum(element.style.left) == this.sizeToNum(target.style.left));
	}
	
	eLeftEquallytTRight(element,target){
		return (this.sizeToNum(element.style.left) 
		== 
		this.sizeToNum(target.style.left) + this.sizeToNum(target.style.width));
	}
	
	eRightEquallytTLeft(element,target){
		return (this.sizeToNum(element.style.left) + this.sizeToNum(element.style.width) 
		== 
		this.sizeToNum(target.style.left));
	}
	
	eRightEquallytTRight(element,target){
		return (this.sizeToNum(element.style.left) + this.sizeToNum(element.style.width)
			== 
			this.sizeToNum(target.style.left) + this.sizeToNum(target.style.width));
	}
	
	eTopEquallyTTop(element,target){
		return (this.sizeToNum(element.style.top) 
			== 
		   this.sizeToNum(target.style.left));
	}
	
	eTopEquallyTBottom(element,target){
		return (this.sizeToNum(element.style.top) 
			== 
		   this.sizeToNum(target.style.left) + this.sizeToNum(target.style.height));
	}
	
	eBottomEquallyTTop(element,target){
		return (this.sizeToNum(element.style.top) + this.sizeToNum(element.style.height)
			== 
		   this.sizeToNum(target.style.left));
	}
	
	eBottomEquallyTBottom(element,target){
		return (this.sizeToNum(element.style.top) + this.sizeToNum(element.style.height)
			== 
		   this.sizeToNum(target.style.left) + this.sizeToNum(target.style.height));
	}
	
	eLeftLeftTLeft(element,target){
		return (this.sizeToNum(element.style.left) 
			< 
		this.sizeToNum(target.style.left));
	}
	
	eLeftRightTLeft(element,target){
		return (this.sizeToNum(element.style.left) 
			> 
		this.sizeToNum(target.style.left));
	}
	
	eLeftLeftTRight(element,target){
		return (this.sizeToNum(element.style.left) 
			< 
		this.sizeToNum(target.style.left) + this.sizeToNum(target.style.width));
	}
	
	eLeftRightTRight(element,target){
		return (this.sizeToNum(element.style.left) 
			> 
		this.sizeToNum(target.style.left) + this.sizeToNum(target.style.width));
	}
	
	eRightLeftTLeft(element,target){
		return (this.sizeToNum(element.style.left) + this.sizeToNum(element.style.width) 
			< 
			this.sizeToNum(target.style.left));
	}
	
	eRightRightTLeft(element,target){
		return (this.sizeToNum(element.style.left) + this.sizeToNum(element.style.width) 
			> 
		this.sizeToNum(target.style.left));
	}
	
	eRightLeftTRight(element,target){
		return (this.sizeToNum(element.style.left) + this.sizeToNum(element.style.width) 
			< 
		this.sizeToNum(target.style.left)+this.sizeToNum(target.style.width));
	}
	
	eRightRightTRight(element,target){
		return (this.sizeToNum(element.style.left) + this.sizeToNum(element.style.width) 
			< 
		   this.sizeToNum(target.style.left)+this.sizeToNum(target.style.width));
	}
	
	eTopHigherTTop(element,target){
		return (this.sizeToNum(element.style.top) < this.sizeToNum(target.style.top));
	}
	
	eTopLowerTTop(element,target){
		return (this.sizeToNum(element.style.top) + this.sizeToNum(element.style.height)
			> 
		   this.sizeToNum(target.style.top));
	}
	
	eTopHigherTBottom(element,target){
		return ( this.sizeToNum(element.style.top)
			<
		    this.sizeToNum(target.style.top)+this.sizeToNum(target.style.height));
	}
	
	eTopLowerTBottom(element,target){
		return (this.sizeToNum(element.style.top) 
			> 
			this.sizeToNum(target.style.top)+this.sizeToNum(target.style.height));
	}
	
	eBottomHigherTTop(element,target){
		return (this.sizeToNum(element.style.top)+this.sizeToNum(element.style.height) 
			< 
			this.sizeToNum(target.style.top));
	}
	
	eBottomLowerTTop(element,target){
		return ( this.sizeToNum(element.style.top) + this.sizeToNum(element.style.height) 
			> 
			this.sizeToNum(target.style.top));
	}
	
	eBottomHigherTBottom(element,target){
		return ( this.sizeToNum(element.style.top)+this.sizeToNum(element.style.height) 
			< 
			this.sizeToNum(target.style.top)+this.sizeToNum(target.style.height));
	}
	
	eBottomLowerTBottom(element,target){
		return ( this.sizeToNum(element.style.top)+this.sizeToNum(element.style.height) 
			>
			this.sizeToNum(target.style.top)+this.sizeToNum(target.style.height));
	}
	
	sizeToNum(size){
		return parseInt(size.replace('px','')) ?? 0;
	}
}

class keyBoardModel {
	
	constructor(){
		this.list = [];
	}
	
	getKeyDown(){
		let key = '';
		
		document.addEventListener('keyDown',function(k){
			key = k.code;
		});
		
		this.list = [];
		
		return key;
	}
	
	getKeyUp(){
		
		let key = '';
		
	}
}

class actionModel extends htmlModel{
	constructor(element){
		super(element);
		this.next = null;
		
	}
	
	action(){
		
	}
	
	setNext(action){
		this.next = action;
	}
}

class actionMoveModel extends actionModel {
	constructor(element){
		super(element);
	}
	
	action(){
		
	}
}

class actionMoveLeftModel extends actionMoveModel{
	constructor(element){
		super(element);
	}
	
	action(){
		this.toLeft(50);
		
		if(this.next != null){
			this.next.action();
		}
	}
}

// проверяем находится ли игрок на гировом поле
class actionCollisionGameBoardModel extends actionModel{
	
	constructor(element){
		super(element)
	}
	
	action(){
		// проверяем находится ли Элемент в пределах игровой доски
		
		let gameBoard = new htmlModel();
		gameBoard.getQS('gameBoardRGB');
		let next = true;
		// 
		
		if(this.getLeft() <= 0){
			
			this.setLeft(0);
			next = false;
		}
		
		if(this.getTop() >= gameBoard.getHeight()){
			
			this.setTop(gameBoard.getHeight() - 50);
			next = false;
		}
		
		if(this.getTop() <= 0){
			
			this.setTop(0);
			next = false;
		}
		
		if(this.getLeft() >= gameBoard.getWidth()){
			this.setLeft(gameBoard.getWidth() - 50);
			next = false;
		}
		
		if(this.next != null && next){
			this.next.action();
		}
		
	}
}


class actionMoveRightModel extends actionMoveModel{
	constructor(element){
		super(element);
	}
	
	action(){
		this.toRight(50);
		
		if(this.next != null){
			this.next.action();
		}
	}
}

class actionMoveUpModel extends actionMoveModel{
	constructor(element){
		super(element);
	}
	
	action(){
		this.toUp(50);
		
		
		if(this.next != null){
			this.next.action();
		}
	}
}

class actionMoveDownModel extends actionMoveModel{
	constructor(element){
		super(element);
	}
	
	action(){
		this.toDown(50);
		
		if(this.next != null){
			this.next.action();
		}
	}
}

class actionSendColorModel extends actionModel {
	constructor(element){
		super(element);
	}
	
	action(){
		
	}
}

class actionCollisionModel extends actionModel {
	constructor(element){
		super(element);
		this.space = new spaceModel();
	}
	
	action(target,cb){
		return cb(this.space.collision(element,target));
	}
	
	actionList(array,cb){
		
		for(let i = 0 ; i < array.length; i++){
			
		}
	}
}

class eventsModel{
	constructor(element=''){
		this.element = (element) ? element : document;
	}
}

class eventsKeyDownModel extends eventsModel {
	constructor(element=''){
		super(element);
	}
	
	event(cb){
		this.element.addEventListener('keydown',function(e){
			cb(e);
		});
	}
}

class eventsKeyUpModel extends eventsModel{
	constructor(element=''){
		super(element);
	}
	
	event(cb){
		this.element.addEventListener('keyUp',function(e){
			return db(e);
		});
	}
}

class eventsMouseOverModel extends eventsModel {
	constructor(element=''){
		super(element);
	}
	
	event(cb){
		this.element.addEventListener('mouseover',function(e){
			return cb(e);
		});
	}
}

class eventsMouseOutModel extends eventsModel {
	
	constructor(element=''){
		super(element);
	}
	
	event(cb){
		this.element.addEventListener('mouseout',function(e){
			return cb(e);
		});
	}
}

class eventsMouseClickModel extends eventsModel {
	
	constructor(element=''){
		super(element);
	}
	
	event(cb){
		this.element.addEventListener('click' , function(e){
			return cb(e);
		});
	}
}

let game = new gameModel('game');
game.init(5);

// собираем приложение
// исходя из уровня сложноти будет формироваться игра

var config = { level: 'small' };

let player= new htmlModel();
player.getQS('player');

let goLeft = new actionMoveLeftModel(player.element);
let goDown = new actionMoveDownModel(player.element);
let goRight = new actionMoveRightModel(player.element);
let goUp = new actionMoveUpModel(player.element);
let inBoard = new actionCollisionGameBoardModel(player.element);

goLeft.setNext(inBoard);
goDown.setNext(inBoard);
goRight.setNext(inBoard);
goUp.setNext(inBoard);

document.addEventListener('keydown',function(e){
	
	switch(e.code){
		case 'ArrowLeft'  : goLeft.action(); break;
		case 'ArrowDown'  : goDown.action(); break;
		case 'ArrowRight' : goRight.action(); break;
		case 'ArrowUp'    : goUp.action(); break;
		
	}
	
});



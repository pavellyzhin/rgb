class htmlModel {
	
	constructor(className){
		this.element = document.querySelector('.' + className);
	}
	
	getLeft(){
		return this.element.style.left.replace('px','');
	}
	
	getTop(){
		return this.element.style.top.replace('px','');
	}
	
	setTop(y){
		return this.element.style.top.replace('px',''):
	}
	
	setLeft(x){
		return this.element.style.left.replace('px','');
	}
	
	getWidth(){
		return this.element.offsetWidth;
	}
	
	getHeight(){
		return this.element.offsetHeight;
	}
	
}

class gameModel {
	
	constructor(className){
		this.element = new htmlModel(className);
	}
}

class gameBoardModel {
	constructor(className){
		this.element = new htmlModel(className);
	}
}

class gameBoardRowsModel{
	constructor(className){
		this.element = new htmlModel(className);
		
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
			this.element.element.appendChild(el.element);
		}
	}
}

class gameBoardColsModel {
	constructor(className){
		this.element = new htmlModel(className);
	}
	
	init(num){
		
		let generate = new generateContentModel();
		
		for(let i = 0 ; i < num; i++){
			
			let el = new gameBoardColsCellModel();
			
			el.element.style.width = '50px';
			el.element.style.height = '50px';
			el.element.style.left = i * 50 + 'px';
			el.element.style.className = 'col';
			el.element.style.id = 'col_' + ( i + 1 );
			el.element.textContent = generate.symbol(i);
			
			this.element.element.appendChild(el.element);
		}
	}
}

class gameBoardRGBModel{
	constructor(className){
		this.element = new htmlModel(className);
	}
}

class gameScoreModel{
	constructor(className){
		this.element = new htmlModel(className);
	}
}

class gameMovesModel {
	constructor(className){
		this.element = new htmlModel(className);
	}
}

// Ячейки будут генерироваться
class gameBoardRGBCellModel{
	constructor(){
		this.element = document.createElement('div');
	}
}

class gameBoardColsCellModel {
	constructor(){
		this.element = document.createElement('div');
	}
}

class gameBoardRowsCellModel {
	constructor(){
		this.element = document.createElement('div');
	}
}

class gameMoveModel{
	constructor(){
		this.element = document.createElement('span');
	}
}

// генерация контента в ячейки
class generateContentModel {
	
	constructor(){
		this.rgb = ['red','green','blue'];
		this.symbols = ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ'];
	}
	
	randomRGB(){
		return rgb[Math.floor(Math.random() * this.rgb.length)];
	}
	
	symbol(point){
		return this.symbols[point];
	}

	randomNumber(max){
		return Math.floor( Math.random() * max );
	}
}

// создаем кучу экземпляров по управлению элементами

let game 	       = new gameModel('game');
let gameBoard      = new gameBoardModel('gameBoard');
let gameBoardRows  = new gameBoardRowsModel('gameBoardRows');
let gameBoardCols  = new gameBoardColsModel('gameBoardCols');
let gameScoreModel = new gameScoreModel('gameScore');
let gameMoves	   = new gameMovesModel('gameMoves');

// собираем приложение
// исходя из уровня сложноти будет формироваться игра
var config = { level: 'small' };
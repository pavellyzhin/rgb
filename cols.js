class col {
	
	construct(){
		this.symbol = null;
	}
	
	setSymbol(symbol){
		this.symbol = symbol;
	}
	
	getSymbol(){
		return this.symbol;
	}
	
}

class colAndHTML extends col{
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.create('div');
		this.element.element.className = 'col';
		
	}
	
	setSymbol(symbol){
		super.setSymbol(symbol);
		this.element.element.textContent = symbol;
	}
	
}

class cols {
	
	constructor(){
		this.count = null;
		this.list = [];
	}
	
	setCol(col){
		this.list.push(col);
	}
	
	setCount(count){
		this.count = count;
	}
	
	getCount(){
		return this.count;
	}
	
	clear(){
		this.count = null;
	}
}

class colsAndHTML extends cols {
	
	constructor(){
		super();
		this.element = new html();
		this.element.qs('.gameBoardCols');
		
	}
	
	reload(){
		
		let symbols = new symbol();
		
		for(let i = 0 ; i < this.list.length; i++){
			
			let coL = new colAndHTML();
			coL.element.element.style.left = i*50 + 'px';
			coL.setSymbol(symbols.getSymbolByPosition(i));
			this.element.element.appendChild(coL.element.element);
		}
		
		
	}
	
}
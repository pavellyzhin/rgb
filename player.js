class player {
	
	constructor(){
		this.color = null;
	}
	
	setColor(color){
		this.color = color;
	}
	
}

class playerAndHtml extends player {
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.create('div');
		this.element.element.className = 'player';
		this.setColor('white');
	}
	
	setColor(color){
		super.setColor(color);
		this.element.element.style.backgroundColor = color;
	}
}

class playerAndHtmlM extends player { // это глобальный объект его мы и будем пробрасывать
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.qs('.player');
		
		this.score = new scoreAndHTML();
		this.moves = new movesAndHTML();
		this.move = new moveAndHTML();
		this.moveCount = new moveCountHTML();
		
		
	}
	
	setColor(color){
		super.setColor(color);
		this.element.element.style.backgroundColor = color;
	}
}
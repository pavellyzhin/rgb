class actionColor extends action {
	
	constructor(){
		super();
		this.color = null;
	}
	
	setColor(color){
		this.color = color;
	}
	
	getColor(){
		return this.color;
	}
	
	clearColor(){
		this.color = null;
	}
	
	action(element){
		element.style.backgroundColor = this.getColor();
		
		if(this.next != null){
			this.next.action(element);
		}
	}
}


class actionColorBlue extends actionColor {
	
	constructor(){
		super();
		this.setColor('blue');
	}
	
	action(element){
		element.style.backgroundColor = this.getColor();
		
		if(this.next != null){
			this.next.action(element);
		}
	}
}


class actionColorRed extends actionColor {
	constructor(){
		super();
		this.setColor('red');
	}
	
	action(element){
		switch(element.element.element.style.backgroundColor){
			case 'red'   : 
				// Сюда как-то должен попасть и элемент и таргет
			; break;
			case 'green' : 
				// меняем цвет на синий
			; break;
			case 'blue'  : 
			
			; break;
			case 'white' : 
			
			; break;
			default: '';
		}
	}
}

class actionColorGreen extends actionColor {
	
	constructor(){
		super();
		this.setColor('green');
	}
	
	action(element){
		
	}
	
}
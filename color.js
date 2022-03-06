class color {
	constructor(){
		this.color = 'none';
		this.list = ['red','green','blue'];
	}
	
	generate(){
		return this.list[Math.floor(Math.random()*this.list.length)];
	}
	
	setColor(color){
		this.color = color;
	}
	
	getColor(){
		return this.color;
	}
	
	join(color){
		switch(this.color){
			case 'white' : 
				switch(color) {
					case 'blue' : this.setColor('blue'); break;
					case 'red' : this.setColor('red'); break;
					case 'green' : this.setColor('green'); break;
				}
			break;
			case 'red' :
				switch(color) {
					case 'blue' : this.setColor('green'); break;
					case 'red' : this.setColor('red'); break;
					case 'green' : this.setColor('blue'); break;
				}
			break;
			case 'green' :
				switch(color) {
					case 'blue' : this.setColor('red'); break;
					case 'red' : this.setColor('blue'); break;
					case 'green' : this.setColor('green'); break;
				}
			break;
			case 'blue' :
				switch(color) {
					case 'blue' : this.setColor('blue'); break;
					case 'red' : this.setColor('green'); break;
					case 'green' : this.setColor('red'); break;
				}
			break;
		}
	}
}
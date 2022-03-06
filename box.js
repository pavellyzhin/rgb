class box {
	
	constructor(){
		this.score = null;
		this.color = null;
	}
	
	setColor(color){
		this.color = color;
	}
	
	getColor(){
		return this.color;
	}
	
	setScore(num){
		this.score = num;
	}
	
	getScore(){
		return this.score;
	}
	
	clear(){
		this.score = null;
		this.color = null;
	}
	
	clearScore(){
		this.score = null;
	}
	
	clearColor(){
		this.color = null;
	}
	
}

class boxAndHtml extends box {
	
	constructor(){
		super();		
		this.element = new html();
		this.element.create('div');
		this.element.element.className = 'box';
	}
	
	setScore(num){
		super.setScore(num);
		this.element.element.textContent = num;
	}
	
	setColor(color){
		super.setColor(color);
		this.element.element.style.backgroundColor = color;
	}
	
	clearColor(){
		super.clearColor();
		this.element.element.style.backgroundColor = 'white';
	}
	
	clearScore(){
		super.clearScore();
		this.element.element.textContent = '';
	}
	
	clear(){
		this.clearColor();
		this.clearScore();
	}	
}

class Boxes {
	
	constructor(){
		this.list = [];
		this.cols = 4;
		this.rows = 4;
	}
	
	get width(){
		return this.cols*50;
	}
	
	setBox(boxAndHTML){
		this.list.push(boxAndHTML);
	}
	
	setCols(num){
		this.cols = num;
	}
	
	setRows(num){
		this.rows = num;
	}
	
	clear(){
		this.list = [];
	}
}

class BoxesAndHTML extends Boxes {
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.qs('.gameBoardRGB');
		
	}
	
	setBox(boxAndHTML){
		super.setBox(boxAndHTML);
	}
	
	reload(){
		let left = 0; 
		let top = 0;
		
		let coloR = new color();
		this.element.element.style.width = this.width +'px';
		this.element.element.style.left = 0 +'px';
		this.element.element.style.top = 0 +'px';
		let pllayerNum = Math.floor(Math.random()*this.list.length);
		for(let i = 0 ; i < this.list.length; i++){
			
			this.list[i].style.position = 'absolute';
		
			if(i%this.cols == 0 && i > 0){
				left = 0;
				top +=50;
			}else{
				if(i > 0){
					left +=50;
				}
			}
			
			this.list[i].style.left = left + 'px';
			this.list[i].style.top  = top + 'px';
			
			
			this.element.element.appendChild(this.list[i]);
			
		}
	}
}

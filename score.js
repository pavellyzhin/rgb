 
class scoreModel {
	
	constructor(){
		this.score = null;
	}
	
	setScore(num){
		this.score = num;
	}
	
	upScore(num){
		this.score += num;
	}
	
	getScore(){
		return this.score;
	}
}


class scoreAndHTML extends scoreModel {
	
	constructor(){
		
		super();
		this.element = new html();
		this.element.qs('.score');
		
	}
	
	setScore(num){
		
		super.setScore(num);
		this.element.element.textContent = 'Ваш счет:' + num;
		
	}
	
	upScore(num){
		
		super.upScore(num);
		this.element.element.textContent = 'Ваш счет:' + this.score;
	}
}
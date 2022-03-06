class actionScore extends action {
	
	constructor(scoreAndHtml){
		super();
		this.score = scoreAndHtml;
	}
	
	action(element){
		this.score.setScore(parseInt(element.textContent) + this.score.getScore());
		
		if(this.next != null) {
			this.next.action(element);
		}
	}
}
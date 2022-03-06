class gameOver extends action {
	
	constructor(){
		super();
	}
	
	action(element){
		if(element.score.getScore() == 0) {
			
		} else {
			
			let boxes = new collectionHTML();
			boxes.qsa('.box');
			
			for(let i = 0; i < boxes.collection.length; i++){
				if(boxes.collection[i].style.backgroundColor != 'white'){
					if(this.next != null){
						this.next.action(element);
						break;
					} else {
						
					}
				}
			}
		}
	}

}



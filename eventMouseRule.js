class eventMouseRule{
	
	constructor(){
		this.rule = null;
		this.mouseBut = null;
	}
	
	setRule(rule){
		this.rule = rule;
	}
	
	getRule(){
		return this.rule;
	}
	
	setMouseBut(mouseBut){
		this.mouseBut = mouseBut;
	}
	
	getMouseBut(){
		return this.mouseBut;
	}
}


class eventMouseClickLeftRule extends eventMouseRule{
	
	constructor(){
		// rule + mouseBut
		
		this.setRule(new ruleAndHTML());
		this.setMouseBut(new mouseButLeft());
	}
	
	action(element){
		
		this.mouseBut.click(()=>{
			
			alert();
			
		});
	}
}













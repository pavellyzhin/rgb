class rule {
	
	constructor(){
		this.rule = null;
	}
	
	setRule(rule){
		this.rule = rule;
	}

	getRule(){
		return this.rule;
	}
	
	clear(){
		this.rule = null;
	}
	
}



class ruleAndHTML extends rule {
	
	constructor(){
		this.element = new html();
		this.element.qs('.rule');
	}
	
	
}

















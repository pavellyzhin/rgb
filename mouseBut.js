class mouseBut {
	
	constructor(){
		this.key = null;
	}
	
	setKey(key){
		this.key = key;
	}
	
	clear(){
		this.key = null;
	}
	
	getKey(){
		return this.key;
	}
	
}


class mouseButLeft extends mouseBut {
	
	constructor(){
		super();
		this.setKey(1);
	}
	
	click(cb){
		return cb();
	}
	
}

class mouseButRight extends mouseBut {
	
	constructor(){
		super();
		this.setKey(2);
	}
}

class mouseButCenter extends mouseBut {
	constructor(){
		super();
		this.setKey(3);
	}
}



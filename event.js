class event {
	
	constructor(){
		this.element = document;
	}
	
	setEventElement(element){
		this.element = element;
	}
	
	getEventElement(){
		return this.element;
	}
}

class eventKey extends event {
	
	constructor(){
		super();
		this.key = null;
		
	}
	
	setKey(key){
		this.key = key;
	}
	
	getKey(){
		return this.key;
	}
	
	clear(){
		this.key = null;
	}
	
}

class eventKeys extends event {
	
	constructor(){
		super();
		this.list = [];
	}
	
	setKey(key){
		this.list.push(key);
	}
	
	clear(){
		this.list = [];
	}
	
}

class eventKeyDown extends eventKeys {
	
	constructor(){
		super();
	}
	
	event(player){	
		this.element.addEventListener('keydown',(e) => {

			this.list.filter((item)=>item.code == e.code)[0]?.down(player) ?? '' ;
			
		});
	}
}

class eventKeyUp extends eventKey {
	
	constructor(){
		super();
	}
	
	event(cb){
		this.element.addEventListener('keyup',(e) => { cb(e) });
	}
}
 
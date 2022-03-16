class eventMouse extends event{
	constructor(){
		super();
	}
	
	event(){
		
	}
}


class eventMouseClick extends eventMouse {
	
	constructor(){
		super();
		this.list = [];
	}
	
	setItem(item){
		this.list.push(item);
	}
	
	clear(){
		this.list = [];
	}
	
	event(element){
		this.element.addEventListener('click',function(mouse){
			this.list.filter((item)=>item.code==mouse.which)[0].action(element);
		});
	}
}
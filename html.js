class html {
	
	constructor(){
		this.element = null;
	}
	
	qs(selector){
		this.element = document.querySelector(selector) ?? this.create('div');
	}
	
	clearContent(){
		this.element.textContent = '';
	}
	
	create(tag){
		this.element = document.createElement(tag);
	}
	
	clearHTML() {
		this.element.innerHTML = '';
	}
	
	clearElement(){
		this.element=null;
	}
	
	setElement(element){
		this.element = element;
	}
	
	getTop(){
		return parseInt(this.element.style.top.replace('px','')) ?? 0;
	}

	getLeft(){
		return parseInt(this.element.style.left.replace('px',''));
	}

	getWidth(){
		return parseInt(this.element.offsetWidth);
	}
	
	getHeight(){
		return parseInt(this.element.offsetHeight);
	}
	
}

class collectionHTML extends html {
	
	constructor(){
		super();
		this.collection = [];
	}
	
	qsa(selector){
		this.collection = document.querySelectorAll(selector);
	}
	
	clearCollection(){
		this.collection = null;
	}
	
	appendCollection(element){
		this.collection.push(element);
	}

}

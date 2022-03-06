class row {
	
	constructor(){
		this.number = null;
	}
	
	setNumber(num) {
		
		this.number = num;
	}
	
	getNumber(){
		return this.number;
	}
	
	clear(){
		this.number = null;
	}
}

class rowAndHtml extends row {
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.create('div');
		this.element.element.className = 'row';
	}
	
	setNumber(num){
		super.setNumber(num);
		this.element.element.textContent = num;
		
	}
	
	clear(){
		super.clear();
		this.element.element.textContent = '';
	}
	
	
}

class rows {
	
	constructor(){
		this.count = null;
		this.rows = [];
	}
	
	setCount(number) {
		
		this.count = number;
	}
	
	getCount(){
		return this.count;
	}
	
	setRow(row){
		this.rows.push(row);
	}
	
}

class rowsAndHTML extends rows {
	
	constructor(){
		super();
		
		this.element = new html();
		this.element.qs('.rows');
		
	}
	
	reload(){
		
		let symbolS = new symbol([1,2,3,4,5]);
		
		for(let i = 0; i < this.count; i++){
			let roW = new rowAndHtml();
			
			roW.element.element.style.top = i * 50 + 'px';
			roW.element.element.textContent = symbolS.getSymbolByPosition(i);
			this.element.element.appendChild(roW.element.element);
		}
		
	}
}



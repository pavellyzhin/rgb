class symbol {
	
	constructor(list){
		this.list = list ?? ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У'];
	}
	
	getSymbolByPosition(position){
		return this.list[position];
	}
}
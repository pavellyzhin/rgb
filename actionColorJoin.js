class actionColorJoin extends actionColor {
	
	constructor(){
		super();
		this.joinCode = null;
	}
	
	setJoinCode(code){
		this.joinCode = code;
	}
}

class actionColorJoinRed extends actionColorJoin {
	constructor(){
		super();
		this.color = 'red';
	}
}

class actionColorJoinRedRed extends actionColorJoinRed {
	constructor(){
		super();
		this.joinCode = 'redred';
	}
	
	join(element){
		
		element.move.target.style.backgroundColor = 'white';
		element.score.upScore(parseInt(element.move.target.textContent));
		element.move.target.textContent = '';
	}
}

class actionColorJoinRedBlue extends actionColorJoinRed {
	constructor(){
		super();
		this.joinCode = 'redblue';
	}
	
	join(element){
			element.element.element.style.backgroundColor='green';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
	}
}

class actionColorJoinRedGreen extends actionColorJoinRed {
	constructor(){
		super();
		this.joinCode = 'redgreen';
	}
	
	join(element){
			element.element.element.style.backgroundColor='blue';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
	}
}

class actionColorJoinRedWhite extends actionColorJoinRed {
	constructor(){
		super();
		this.joinCode = 'redwhite';
	}
	
	join(element){
		element.score.upScore(-1);
		console.log('asd');
	}
}

class actionColorJoinGreen extends actionColorJoin {
	
	constructor(){
		super();
		
	}
	
	join(element){
		
	}
}

class actionColorJoinGreenGreen extends actionColorJoinGreen {
	constructor(){
		super();
		this.joinCode = 'greengreen';
	}
	
	join(element){
			
		element.move.target.style.backgroundColor = 'white';
		element.score.upScore(parseInt(element.move.target.textContent));
		element.move.target.textContent = '';
	}
	
}

class actionColorJoinGreenBlue extends actionColorJoinGreen {
	constructor(){
		super();
		this.joinCode = 'greenblue';
	}
	
	join(element){
			element.element.element.style.backgroundColor='red';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
	}
	
}

class actionColorJoinGreenRed extends actionColorJoinGreen {
	constructor(){
		super();
		this.joinCode = 'greenred';
	}
	
	join(element){
			element.element.element.style.backgroundColor='blue';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
		
	}
	
}
class actionColorJoinGreenWhite extends actionColorJoinGreen {
	constructor(){
		super();
		this.joinCode = 'greenwhite';
	}
	
	join(element){
		element.score.upScore(-1);
		
	}
	
}

class actionColorJoinBlue extends actionColorJoin {
	constructor(){
		super();
		this.joinCode = 'blue';
	}
	
	join(element){
		
	}
	
}

class actionColorJoinBlueBlue extends actionColorJoinBlue {
	constructor(){
		super();
		this.joinCode = 'blueblue';
	}
	
	join(element){
			
		element.move.target.style.backgroundColor = 'white';
		element.score.upScore(parseInt(element.move.target.textContent));
		element.move.target.textContent = '';
		
	}
	
}

class actionColorJoinBlueGreen extends actionColorJoinBlue {
	constructor(){
		super();
		this.joinCode = 'bluegreen';
	}
	
	join(element){
			element.element.element.style.backgroundColor='red';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
		
	}
	
}

class actionColorJoinBlueRed extends actionColorJoinBlue {
	constructor(){
		super();
		this.joinCode = 'bluered';
	}
	
	join(element){
		
		element.element.element.style.backgroundColor = 'green';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
	}
	
}

class actionColorJoinBlueWhite extends actionColorJoinBlue {
	constructor(){
		super();
		this.joinCode = 'bluewhite';
	}
	
	join(element){
		element.score.upScore(-1);
	}
	
}

class actionColorJoinWhite extends actionColorJoin {
	
	constructor(){
		super();
	}
	
	join(element){
		
	}
}

class actionColorJoinWhiteBlue extends actionColorJoinWhite {
	
	
	constructor(){
		super();
		this.joinCode = 'whiteblue';
	}
	
	join(element){
			element.element.element.style.backgroundColor='blue';
		element.move.target.style.backgroundColor = 'white';
		
		element.move.target.textContent = '';
		
		console.log('whiteBlue');
	}
	
}

class actionColorJoinWhiteRed extends actionColorJoinWhite {
	
	
	constructor(){
		super();
		this.joinCode = 'whitered';
	}
	
	join(element){
		element.element.element.style.backgroundColor='red';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
		
		console.log('whiteRed');	
	}
	
}

class actionColorJoinWhiteGreen extends actionColorJoinWhite {
		
	constructor(){
		super();
		this.joinCode = 'whitegreen';
	}
	
	join(element){
		element.element.element.style.backgroundColor='green';
		element.move.target.style.backgroundColor = 'white';
		element.move.target.textContent = '';
		
		console.log('whiteGreen - Белый пришел к зеленому');
	}
	
}

class actionColorJoines extends actionColor {
	
	constructor(){
		super();
		this.list = [];
		this.next = null;
	}
	
	setJoin(Join){
		this.list.push(Join);
	}
	
	clear(){
		this.list = [];
	}
	
	action(element){
		let playerJoinCode = element.element.element.style.backgroundColor + element.move.color;
		
		//console.log(playerJoinCode);
		
		this.setJoin( new actionColorJoinRedRed()	  );
		this.setJoin( new actionColorJoinRedGreen()	  );
		this.setJoin( new actionColorJoinRedBlue()	  );
		this.setJoin( new actionColorJoinGreenGreen() );
		this.setJoin( new actionColorJoinGreenBlue()  );
		this.setJoin( new actionColorJoinGreenRed()	  );
		this.setJoin( new actionColorJoinBlueBlue()	  );
		this.setJoin( new actionColorJoinBlueRed()	  );
		this.setJoin( new actionColorJoinBlueGreen()  );
		this.setJoin( new actionColorJoinWhiteGreen() );
		this.setJoin( new actionColorJoinWhiteBlue()  );
		this.setJoin( new actionColorJoinWhiteRed()   );
		this.setJoin( new actionColorJoinRedWhite()   );
		this.setJoin( new actionColorJoinGreenWhite() );
		this.setJoin( new actionColorJoinBlueWhite()  );
		
		this.list.filter((item)=>item.joinCode == playerJoinCode)[0]?.join(element);

	}
}

let acj = new actionColorJoines();






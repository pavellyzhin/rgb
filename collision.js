class collision {
	
	constructor(){
		this.element = null;
		this.target = null;
	}
	
	setElement(element){
		this.element = element;
	}
	
	setTarget(target){
		this.target = target;
	}	
}


class collisionHTML extends collision {
	
	constructor(){
		super();
	}
	
	
	elementLeftEquallyTargetLeft(){
		return (this.element.getLeft() == this.target.getLeft());
	}
	
	elementLeftEquallyTargetRight(){
		return (this.element.getLeft() == this.target.getLeft() + this.target.getWidth());
	}
	
	elementRightEquallyTargetRight(){
		return (this.element.getLeft() + this.element.getWidth() == this.target.getLeft() + this.target.getWidth());
	}
	
	elementRightEquallyTargetLeft(){
		return (this.element.getLeft() + this.element.getWidth() == this.target.getLeft());
	}
	
	elementTopEquallyTargetTop(){
		return (this.element.getTop() == this.target.getTop());
	}
	elementTopEquallyTargetBottom(){
		return (this.element.getTop() == this.target.getTop() + this.target.getHeight());
	}
	
	elementLeftLeftTargetLeft(){
		return (this.element.getLeft() < this.target.getLeft());
	}
	
	elementLeftRightTargetLeft(){
		return (this.element.getLeft() + element.getWidth() == this.target.getLeft());
	}
	
	elementRightLeftTargetLeft(){
		return (this.element.getLeft() + element.getWidth() == this.target.getLeft());
	}
	
	elementRightRightTargetLeft(){
		return (this.element.getLeft() + element.getWidth() == this.target.getLeft());
	}
	
	elementLeftLeftTargetRight(){
		return (this.element.getLeft() < this.target.getLeft() + this.target.getWidth());
	}
	
	// x1 > x2 + width2
	elementLeftRightTargetRight(){
		return (this.element.getLeft() > this.target.getLeft() + this.target.getWidth());
	}
	
	elementRightLeftTargetRight(){
		return (this.element.getLeft() + this.element.getWidth() < this.target.getLeft());
	}
	
	elementRightRightTargetRight(){
		return (this.element.getLeft() + this.element.getWidth() > this.target.getLeft() + this.target.getWidth());
	}
	
	elementTopHeigerTargetTop(){
		
		return (this.element.getTop() < this.target.getTop());
	}
	
	elementTopHeigerTargetBottom(){
		return (this.element.getTop() < this.target.getTop() + this.target.getHeight());
	}
	
	elementTopLowerTargetTop(){
		return (this.element.getTop() > this.target.getTop());
	}
	
	elementTopLowerTargetBottom(){
		return (this.element.getTop() > this.target.getTop() + this.target.getHeight());
	}
	
	elementBottomHeigerTargetTop(){
		return (this.element.getTop() + this.element.getHeight() < this.target.getTop());
	}
	
	elementBottomHeigerTargetBottom(){
		return (this.element.getTop() + this.element.getHeight() < this.target.getTop() + this.target.getHeight());
	}
	
	elementBottomLowerTargetTop(){
		return (this.element.getTop() + this.element.getHeight() > this.target.getTop());
	}
	
	elementBottomLowerTargetBottom(){
		return (this.element.getTop() + this.element.getHeight() > this.target.getTop() + this.target.getHeight());
	}
	
	
	
}
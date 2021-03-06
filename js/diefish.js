function DieFish(type){
	this.type=type;
	this.x=0;
	this.y=0;
	this.w=0;
	this.h=0;
	this.rotate=0;
	this.cur=4;
	
	this.move();
}
DieFish.prototype.draw=function(gd){
	gd.save();
	
	gd.translate(this.x,this.y);
	
	gd.rotate(d2a(this.rotate));
	
	gd.drawImage(JSON['fish'+this.type],0,this.h*this.cur,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
	
	gd.restore();	
};

DieFish.prototype.move=function(){
	var _this=this;
	setInterval(function(){
		_this.cur++;	
		if(_this.cur==8){
			_this.cur=4;
		}
	},100);
};

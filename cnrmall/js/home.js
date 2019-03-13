
//轮播图
window.onload=function(){
	var dd=new Sport();
	    dd.init();
	    dd.Dong();
}
function Sport(){
	this.box=document.getElementById("topBanner");
	this.bt=document.getElementById("bt");
	this.timer=null;
	this.index=0;
	this.init=function(){
		this.timer=setInterval(
			this.play,2000
		)
	}
	this.play=function(){
		for(var i=0;i<this.bt.children.length;i++){
			this.bt.children[i].className="";
			startMove(this.box.children[i],{opacity:0})
		}
		this.bt.children[this.index].className="current";
		startMove(this.box.children[this.index],{opacity:100})
		this.index++;
		if(this.index==this.bt.children.length){
			this.index=0
		}
	}.bind(this)
	
	this.Dong=function(){
		for(let j=0;j<this.bt.children.length;j++){
			var that=this;
			this.bt.children[j].onmouseover=function(){
				that.over(j)
			}
			this.bt.children[j].onmouseout=function(){
				that.out()
			}
		}
	}
	this.over=function(num){
		clearInterval(this.timer)
		this.index=num;
		this.play()
	}
	this.out=function(){
		this.timer=setInterval(this.play,2000)
	}
	this.box.onmouseover=function(){
		clearInterval(this.timer)
		
	}.bind(this)
	this.box.onmouseout=function(){
		this.timer=setInterval(this.play,2000)
		
	}.bind(this)
}

/*var timer=null;
var $ulist=$("#topBanner li");
var $olist=$("#bt li");
var index=0;
 timer=setInterval(autoPlay,2000);
 function autoPlay(){
 	index++;
 	if(index==$olist.size()){
 		index=0;
 	}
 	$ulist.eq(index).fadeIn(2000).siblings().fadeOut(2000);
 	$olist.eq(index).addClass("current").siblings().removeClass("current");
 }
$olist.mouseenter(function(){
	clearInterval(timer);
	index=$(this).index()-1;
	autoPlay()
})
$olist.mouseleave(function(){
	timer=setInterval(autoPlay,2000)
})*/
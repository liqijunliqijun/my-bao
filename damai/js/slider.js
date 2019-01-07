
//项目中有哪些类：轮播图
function Slider(
				$box,width,height,ps,imgs,
				doudouSize,doudouColor,doudouHighColor,
				isCircle,direction,timeSpace){
	this.$box = $box;//轮播图的容器
	this.backgroundImage= null;//这是个背景图,
	this.$lis = null;//这是个jQuery对象,存储所有的li标签,
	this.$pss=null;//这是个jQuery对象,存储所有的p标签
	this.width = width;
	this.height = height;
	this.ps=ps; // 这是个方向图片数组，1个左右
	this.imgs = imgs;//图片数组
	this.doudouSize = doudouSize;
	this.doudouColor = doudouColor;
	this.doudouHighColor = doudouHighColor;//高亮颜色
	this.isCircle = isCircle;
	// this.border=borderColor;
	
	this.direction = direction;//左还是右
	this.timeSpace = timeSpace;//每张图片直接的间隔,大于1000
	this.currOrd = 0;
	this.myTimer = null;
	
	this.createUI();
	this.addEvent();
	this.changeImg();
	this.showp();
}

Slider.prototype.createUI= function(){
	this.$box.css({
		position:"relative",
		// overflow:"hidden"
	});
	
	//1、创建所有的图片
	for(let i=0;i<this.imgs.length;i++){
		let $span = $("<span></span>");
		$span.css({
			"backgroundImage":"url("+this.imgs[i]+")",
			"backgroundPosition":"top center",
			"backgroundSize":this.width+"% "+this.height+"%",
			"position":"absolute",
			"top":"0px", 
			width: this.width+"%",	
			height:this.height+"%",	
			left:i==0?"0px":this.width+"%"
		});
		this.$box.append($span);
		if(this.$backgroundImage==null){
			this.$backgroundImage=$span;
		}else{
			this.$backgroundImage = this.$backgroundImage.add($span);
			// console.log(this.$imgs);
		}
	}

	
	//2、创建所有的豆豆
	//1)、豆豆的容器
	let $ul = $("<ul></ul>");
	$ul.css({
		position:"absolute",
		right:"50px",
		bottom:"10px",
		"list-style":"none",
		"z-index":2,
		left:"43%"
	});
	this.$box.append($ul);
	
	//2)、豆豆
	for(let i=0;i<this.imgs.length;i++){
		let $li = $("<li></li>");
		$li.css({
			float:"left",
			"margin-left":"20px",
			width:this.doudouSize+"px",
			height:this.doudouSize+"px",
			backgroundColor:i==0?this.doudouHighColor:this.doudouColor,
			borderRadius:this.isCircle?"50%":0
		});

		$ul.append($li);
		this.$lis==null?this.$lis=$li:this.$lis=this.$lis.add($li);
	}

	//3）创建装方向图片的容器
	let $div=$("<div></div>");
	$div.css({
		zoom: "1",
    	zIndex: "4"
	})
	this.$box.append($div);
	//创建方向图片
	for(let i=0;i<this.ps.length;i++){
	let $a= $("<a></a>");
	$a.css({
		"position":"absolute",
		width: "50px",
		height: "100px",
		// "backgroundImage": "url("+this.ps[i]+") no-repeat",
		top: "50%",
		"marginTop": "-50px",
		
    	// backgroundPosition:"top left",
    	opacity:"0.8"
	});
		$div.append($a);
		this.$pss==null?this.$pss=$a:this.$pss=this.$pss.add($a);
	}
}

Slider.prototype.showImg = function(inOrd,outOrd){
	
	if(inOrd==outOrd){
		return;
	}
	
	//1)、滑入滑出前的准备工作
	this.$backgroundImage.eq(inOrd).css({"left":this.width+"%"});
	
	//2）、滑入滑出效果
	this.$backgroundImage.eq(inOrd).animate({
		left:0
	},300);
	this.$backgroundImage.eq(outOrd).animate({
		// left:-1*this.width+"%"
		left:-1*this.width+"%",
		transform: "translateZ(100px)"
	},300);
	//function(){
	// 	this.animate({
	// 		width: "100%",
	// 		height: "100%"
	// 	},1000);
	 //});
}

Slider.prototype.showLi=function(){
	//    B、改豆豆		
	this.$lis.eq(this.currOrd)
	.css({"backgroundColor":this.doudouHighColor})
	.siblings()
	.css({"backgroundColor":this.doudouColor});
}
Slider.prototype.showp=function(){
	//图片分左右
	// console.log(this.$pss.eq(0));
	this.$pss.css({
		"display":"none"
	});
	this.$pss.eq(0).css({
	left: "6%",
	"background":"url("+this.ps[0]+") no-repeat -116px 0"
	});
	// console.log(this.$pss.eq(1));
	this.$pss.eq(1).css({
	right: "6%",
    "background":"url("+this.ps[1]+") no-repeat top left"

	});
}
//1、自动播放图片
Slider.prototype.changeImg=function(){
	this.myTimer = setInterval(()=>{
		//1）、数据：改变图片的当前序号（加加），并考虑边界
		//currOrd = ++currOrd>4?0:currOrd;
		let outOrd = this.currOrd;
		this.currOrd++;
		
		if(this.currOrd>this.imgs.length-1){
			this.currOrd=0;
		}
		
		//2）、外观：
		//A、改图片
		this.showImg(this.currOrd,outOrd);
		//B、改豆豆
		this.showLi();

	},this.timeSpace);
}

//2、停止播放
Slider.prototype.stopChange=function(){
	//停止定时器
	window.clearInterval(this.myTimer);
}

//4、跳转到指定的图片
Slider.prototype.goImg=function(transOrd){//1
    //1）、数据：把transOrd赋给当前图片序号
    let outOrd = this.currOrd;
    this.currOrd = transOrd;

    //2）、外观：
    //A、改图片
    this.showImg(this.currOrd,outOrd);
    //B、改豆豆
    this.showLi();
}

Slider.prototype.addEvent = function(){
	var orr=0;
	let obj = this;//this是Slider的对象
	this.$box.mouseover(()=>{
		this.$pss.css({
		"display":"block"
	});
		obj.stopChange();
	});
	
	this.$box.mouseout(()=>{
		this.$pss.css({
		"display":"none"
	});
		obj.changeImg();
	});
	// 点击左边图片改变轮播图下标，最小为1原因为下面先--了
	this.$pss.eq(0).click(()=>{
		if(orr<1){
		orr=1;
	}
		obj.goImg(--orr);
	});
	// 点击左边图片改变轮播图下标，-1原因为下面先++了
	// obj.$lis.index()的意思为在这个obj中$lis的下标为几
	this.$pss.eq(1).click(()=>{
		if(orr>=this.imgs.length-2){
		orr=this.imgs.length-2;
	}
		obj.goImg(++orr);
		// console.log($("li").index(obj.$lis));
	});
	this.$lis.click(function(){
		obj.goImg($(this).index());
	});
}

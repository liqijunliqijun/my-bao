//运动的封装
//功能：动态改变DOM的样式属性，让一个物体，按照指定时间，指定的
//向从某个地方运动到某个地方
//参数：DOM元素  样式属性attr  结束值 步长 方向 时间间隔


function moverObj(domObj,attr,endValue,step,direction,timeSpace){
	let currValue = parseFloat(getStyle(domObj,attr));
	let myTimer = setInterval(function(){
		//1.改变数据
		currValue = currValue + direction * step;
		//2.处理边界
		if(Math.abs(currValue-endValue) <= step){
			currValue = endValue;
			clearInterval(myTimer);
		}
		//3.改变外观
		domObj.style[attr] = currValue + 'px';
	},timeSpace)
}

//功能：运动：动态改变DOM的样式属性
//     让一个物体，按照指定时长，指定的方向从某个地方运动到某个地方。
//参数：
// DOM元素
// 样式属性：attr
// 结束的值
// 时长（单位是毫秒）
//返回值：无

function moverObj2(domObj,attr,endValue,timeLong){
	let currValue = parseFloat(getStyle(domObj,attr));
	let direction = endValue > currValue ? 1: -1;
	let timeSpace = 16;
	//路程/时间,表示的是一毫秒走多少像素 *16；
	let step = Math.abs(endValue - currValue) / timeLong *timeSpace;

	let myTimer = setInterval(function(){
		//1.改变数据
		currValue = currValue + direction * step;
		//2.边界处理
		if(Math.abs(currValue - endValue) <= step){
			currValue = endValue;
			clearInterval(myTimer);
		}
		//3.改变样式
		domObj.style[attr] = currValue + 'px';
	},timeSpace)
}

//扩展：
//此函数带一个回调函数的参数，目的是，当运动结束后，会调用该函数
function moverObj3(domObj,attr,endValue,timeLong,func){
	let currValue = parseFloat(getStyle(domObj,attr));
	let direction = endValue > currValue ? 1 : -1;
	let timeSpace = 16;
	let step = Math.abs(endValue - currValue) / timeLong * timeSpace;

	let myTimer = setInterval(function(){
		//1.改变时间
		currValue = currValue + direction * step;
		//2.边界处理
		if(Math.abs(endValue - currValue) <= step){
			currValue = endValue;
			clearInterval(myTimer);
			func && func();
		}
		//3.改变样式
		domObj.style[attr] = currValue + 'px';
	},timeSpace)
}

//淡入淡出：函数的封装
//参数：domObj:要运动的物体（dom元素） attr:样式属性 endValue:结束值  timeLong:时长

function fade(domObj,attr,endValue,timeLong){
	let currValue = parseFloat(getStyle(domObj,attr));
	let direction = endValue - currValue ? 1 : -1;
	let timeSpace = 16;
	let step = Math.abs(endValue - currValue)/timeLong *timeSpace;

	let myTimer = setInterval(function(){
		//1、改变数据
		currValue = currValue + direction * step;
		//2、边界处理
		if(Math.abs(endValue - currValue) <= step){
			currValue = endValue;//当差值不够一个步长时，直接将结束值赋给当前值
			clearInterval(myTimer);
		}
		//3、改变外观
		let temp = currValue;//由于currValue还继续参与运算，不能直接加px,故将此值赋给临时变量
		if(attr != "opacity"){
			temp = temp + 'px';
		}
		domObj.style[attr] = temp;
	},timeSpace)
}

//淡入：让某个dom元素花多长时间淡入
function fadeIn(domObj,timeLong){
	fade(domObj,'opacity',1,timeLong);
}
//淡出
function fadeOut(domObj,timeLong){
	fade(domObj,'opacity',0,timeLong);
}

//淡入淡出：两张图片的淡入淡出
function fadeInOut(inDomObj,outDomObj,timeLong){
	let endValue = 1;//假设为1
	let currValue = 0;//假设为0
	let direction = 1;
	let timeSpace = 16;
	let step = Math.abs(endValue - currValue)/timeLong * timeSpace;

	let myTimer = setInterval(function(){
		//1.改变数据
		currValue = currValue + direction * step;
		//2.边界处理
		if(Math.abs(endValue - currValue) <= step){
			currValue = endValue;
			clearInterval(myTimer);
		}
		//3.改变外观
		inDomObj.style.opacity = currValue;
		outDomObj.style.opacity = 1 - currValue;
	},timeSpace)
}


//多属性运动
//单属性运动，每次只改一个属性的值，多属性每次需要改多个属性的值（用循环）
/*
animate(
	$("box"),
	{
	"width":500,
	"height":400,
	"left":500
	},
	2000);
*/

function animate(domObj,attrObj,timeLong){
	let currValueObj = {};
	for(let key in attrObj){//key 相当于 属性
		//currValueObj["width"] = parseFloat(getStyle(domObj,"width"))
		currValueObj[key] = parseFloat(getStyle(domObj,key));
	}

	//let direction = endValue > currVlaue ? 1: -1
	let directionObj = {};
	for(let key in attrObj){
		directionObj[key] = attrObj[key] - currValueObj[key] ? 1 : -1;
	}
	let timeSpace = 16;
	//let step = Math.abs(endValue-currValue)/timeLong*timeSpace;
	let stepObj = {};
	for(let key in attrObj){
		stepObj[key] = Math.abs(attrObj[key] - currValueObj[key])/timeLong*timeSpace
	}

	let myTimer = setInterval(function(){
		//1、改变数据
		//currVlaue = currVlaue + direction * step
		for(let key in currValueObj){
			currValueObj[key] = currValueObj[key] +  directionObj[key] * stepObj[key];
		}
		//2、边界处理
		let isOver = false;//表示是否到终点
		for(let key in currValueObj){
			if(Math.abs(currValueObj[key] - attrObj[key]) <= stepObj[key]){
				currValueObj[key] = attrObj[key];
				isOver = true;
			}
		}
		//isOver && clearInterval(mytimer);
		if(isOver){
			clearInterval(myTimer);
		}
		//3、改变外观
		for(let key in currValueObj){
			let temp = currValueObj[key];
			if(key != 'opacity'){
				temp = temp + 'px';
			}
			domObj.style[key] = temp;
		}
	},timeSpace)
}
//获取id class a 的函数

function $(str){   //id  class tagname
	if(str.charAt(0) == "#"){
		return document.getElementById(str.substring(1));
		
	}else if(str.charAt(0) == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

//-------------------------------------------
//h获取css样式
function getStyle(domObj,attr){
	if(domObj.currentStyle){
		//domObj.currentStyle.attr;//这是不对的，因为并没有名字为attr的属性
		return domObj.currentStyle[attr];//如果对象的属性名是变量的方式表示，就只能用方括号。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}

//------------------------------------------------
//运动框架
	







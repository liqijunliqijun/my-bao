



window.onload = function(){
	
//切换效果
	for(var i = 0 ; i < 3 ; i++){
		$('.gou')[i].index = i;
		$('.gou')[i].onclick = function (){
			for(var i = 0 ; i < 3 ; i++){
				$('.gou')[i].style.backgroundColor = 'white';
				$('.gou')[i].style.color = '#111';
				$('.tou')[i].style.display = 'none';
			}
			this.style.backgroundColor = 'firebrick';
			this.style.color = 'white';
			$('.tou')[this.index].style.display = 'block';
		}
	}
//第一个表单验证
	//用户名
// 	var fm = document.forms["fm"];
// 	$('#nameID').onblur = function(){
// 			//；必须是中文，，先中文的十六进制的编码；因为js不识别中文；
// 			var tex = /[\u4e00-\u9fa5]{2}/;
// 			var arr = $('#nameID').value;
// 			if(tex.test(arr)){
// 				$('#c').style.display = "none";
// 			}else{
// 				$('#c').style.display = "block";
// 		     }
// 		}
// 	for(let i=0;i<$('input').length;i++){
// 		$('input')[i].onmouseover = function(){
// 			$('input')[i].style.border = '1px solid red';
// 		}
// 			for(let i =0 ; i<$('input').length; i++ ){
// 				$('input')[i].onclick = function(){
// 					$('input')[i].style.border = '1px solid red';
// 				}
// 				$('input')[i].onmouseout = function(){
					
// 					$('input')[i].style.border = '1px solid #ccc';
// 				}
// 			}
//       }
// 	//密码''
// 	$('#passID').onblur = function(){
// 		var tex = /[a-zA-Z]/;
// 		var tex1=/[0-9]/;
// 		var tex2=/[#$%]/;
// 		var arr = $('#passID').value;
// 		if(arr.length >=6 && tex.test(arr) && tex1.test(arr) && tex2.test(arr) ){
// 				$('#c').style.display = "none";
			
// 		}else{
// 				$('#c').style.display = "block";
// 		}
// 	}
// 	//验证;
// 		fm.onsubmit = function(){
// 			if (tex.test(arr) && arr.length >=6 && tex.test(arr) && tex1.test(arr) && tex2.test(arr) ) {
// 				return true;
// 			} else{
// 				return false;
// 				$('#c').style.display = "block";
// 			}
// 		}
// //第二个表单.短信登录	
// 	$('#quhao').onclick = function (){
// 		$('#phpon').style.display = 'block';
// 	}
// 	let lis = $('.ppp');
// 	let qup= $('.teph');
// 	for (let i = 0; i < lis.length; i++){
// //		lis[i].index = i;
// 		lis[i].onclick = function (event){
			
// 			for(var j = 0; j< lis.length ;j ++){
// 				lis[j].style.backgroundColor = 'white';
// 				lis[j].style.color = '#111';
// 		    }
			
// 			let evt = event || window.event;
// 			lis[i].style.backgroundColor = 'firebrick';
// 			lis[i].style.color = 'white';
// //			console.log(i);
// //			console.log(this.getElementsByClassName("teph")[0].innerHTML);
// 			$('#h88').innerHTML = this.getElementsByClassName("teph")[0].innerHTML;
// 			evt.stopPropagation();
// 			$('#phpon').style.display = 'none';
// 		}
// 	}
	
	// --------------------------------------

}

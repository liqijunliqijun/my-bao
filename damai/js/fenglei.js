

window.onload = function(){
	var al = $("#search_city_line").getElementsByTagName('a');
	var ctiy = $('.search_city_line');
	 let  index = 0;
	 let currIndex = -1;//当前点击过的下标
	for(let i =0 ; i < al.length ; i++){
		al[i].onmouseover = function (){
			for(let j = 0; j < al.length ; j++){
					al[j].style.background = 'white';
					al[j].style.color = '#333333';
			}
			this.style.background = 'brown';
			this.style.color = 'white';
			if(currIndex>-1){
				al[currIndex].style.background = 'brown';
				al[currIndex].style.color = 'white';
			}
			
			al[i].onclick = function (){
				currIndex = i;
				this.style.background = 'brown';
				this.style.color = 'white';
			}
		}

	}
	
//登录按钮鼠标滑过,显示,下拉表单,和图片;
	$('#denglu').onmouseover = function(){
		$('.zhanghao')[0].style.display = 'block';
	
		$('.zhanghao')[0].style.background="#FF0078";
		var aa =$('.zhan');
		for(let i =0 ; i<aa.length; i++ ){
			aa[i].onmouseover = function(){
				aa[i].style.background = 'thistle';
			}
			aa[i].onmouseout = function(){
				aa[i].style.background = 'white';
			}
		}
	}
	$('#denglu').onmouseout = function(){
			$('.zhanghao')[0].style.display = 'none';
		}
		
	$('#jiaobrat').onmouseover = function(){
			$('.xiazai')[0].style.display = 'block';
		}
	$("#jiaobrat").onmouseout = function(){
			$('.xiazai')[0].style.display = 'none';
		}
//	---------------------------------
//	更多,收起
    let cur=0;
	$('#shouqi').onclick = function(){
		
		cur++;
		console.log(cur);
		if(cur%2 == 0 ){
			movertime(460);
			$('#search_city_line').style.overflow = "hidden";
		}else{
			 movertime(100);
		}
	}
}
let timer = null;
function movertime(iTarget){
			clearInterval(timer);
			timer = setInterval (function(){
				var spend =0; 
				let a2 = $("#search_city_line")
				if (a2.offsetHeight >iTarget) {
					spend = -10;
				} else{
					spend = 10;
				}
				if(a2.offsetHeight == iTarget){
					clearInterval(timer);
				}else{
					a2.style.height = a2.offsetHeight+spend +"px";

				}

			},30);
		}



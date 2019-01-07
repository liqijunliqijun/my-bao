
function chu(){
	var vipid = getCookie("vipid");
	if(vipid!=null){
		$("#idSpan")[0].innerHTML = vipid;
		// $("welcome").style.display = "block";
		// $("login").style.display = "none";
	}else{
		// $("welcome").style.display = "none";
		// $("login").style.display = "block";
	}
}


//--------------------------

//----------------------------

	
//-----------------------------
//页面加载事件；，在一个页面里面只能有一个；

window.onload = function(){
	let s1 =new Slider($("#box"),100,100,["",""],["../img/1111.jpg","../img/2222.jpg","../img/3333.jpg","../img/4444.jpg","../img/5555.jpg"],10,"#fff","#666",true,1,3000);
	chu();
	//3、注销
			$("#quxiao").onclick= function(){
					removeCookie("vipid");
					location.href="denglu.html";
			}

	for(let j = 0; j< $('.name-city').length-1; j++ ){
				
		$('.name-city')[j].onclick = function(){
		   $('#cityheaderwrap')[0].style.display = 'none';
				 console.log(this);
		   $('#dizhi')[0].innerHTML=this.innerHTML;
	   }
   }
   $('.heardOne-1')[0].onmouseover = function(){
	   $('#cityheaderwrap')[0].style.display = 'block';

	   $('#cityheaderwrap')[0].style.background="#EBEBEB";
	   
   }
   $(".heardOne-1")[0].onmouseout = function(){
	   $('#cityheaderwrap')[0].style.display = 'none';
   }

	//登录	
$('#denglu')[0].onmouseover = function(){
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
		$('#denglu')[0].onmouseout = function(){
			$('.zhanghao')[0].style.display = 'none';
		}
	$('#jiaobrat').hover(function(){
			$('.xiazai').css({display:'block'});
		});
	$("#jiaobrat")[0].onmouseout = function(){
			$('.xiazai')[0].style.display = 'none';
		}
// ------------------------------
var www = $(".deng")[0];
var w1 = $(".denglu")[0];
var w2 = $(".denglu")[1];
var w3 = $(".denglu")[2];
//			console.log(w3);
var kuaisu = $(".zhuce")[0].getElementsByTagName("span")[0];
var shoujidenglu = $(".zhuce")[1].getElementsByTagName("span")[0];
var lijizhuce =$("#lijizhuce")[0];
var qita   = $(".zhuce")[2].getElementsByTagName("span")[0];
var InpTxHidText   = $(".InpTxHidText")[0];
var InpTxHidden   = $(".InpTxHidden")[0];
var ccc = $(".zhanghao")[0].getElementsByTagName("a")[0];
var bbb = $(".zhanghao")[0].getElementsByTagName("a")[1];

bbb.onclick = function(){
	$("#xxx")[0].style.display = "block";
	www.style.display = "block";
	w1.style.display = "block"; //d登陆
	$("#opsecity")[0].style.display = "block";
	kuaisu.onclick = function(){
		w1.style.display = "none";
		w2.style.display = "block"; //
		w3.style.display = "none";
			
		lijizhuce.onclick = function(){
			w2.style.display = "none";
			w3.style.display = "none";
			w1.style.display = "block";
			
			qita.onclick = function(){
				w2.style.display = "block";
				w1.style.display = "none";
				w3.style.display = "none";
			}
		}
	}
}
InpTxHidText.onclick = function(){
	InpTxHidden.style.display = "block";
	InpTxHidText.style.display = "none";
}
shoujidenglu.onclick = function(){
	w3.style.display = "block";//手机登陆  -- 其他登陆
	w2.style.display = "none";//登陆  ---立即注册 --其手机登陆
	w1.style.display = "none";//注册 ----- 快速登陆
}
//		console.log($("#lijizhuce"));
ccc.onclick = function(){
	$("#xxx")[0].style.display = "block";

	www.style.display = "block";
	w2.style.display = "block"; //登陆  ---立即注册 --其手机登陆
	w1.style.display = "none";  //注册 ----- 快速登陆
	w3.style.display = "none"; //手机登陆  -- 其他登陆
	$("#opsecity")[0].style.display = "block";

lijizhuce.onclick = function(){
		w2.style.display = "none";
		w3.style.display = "none";
		w1.style.display = "block";//zhuce

	kuaisu.onclick = function(){
		w1.style.display = "none";
		w2.style.display = "block"; //
		w3.style.display = "none";
	}		
}
}
//w2. //登陆  ---立即注册 --其手机登陆
//w1.  //注册 ----- 快速登陆
//w3. //手机登陆  -- 其他登陆
qita.onclick = function(){
w1.style.display = "none";
w2.style.display = "block"; //
w3.style.display = "none";
}		
//		console.log($("#lijizhuce"));

//	
$("#xxx")[0].onclick = function(){
$(".deng")[0].style.display = "none";
$("#opsecity")[0].style.display = "none"; //
w1.style.display = "none";
w2.style.display = "none"; //
w3.style.display = "none";
}		

// 	$("#xxx")[0].click(function(){
//		$(".deng")[0].css({"dispaly":"none"})
//		$("#opsecity")[0].css({"display":"none"})	
//	})
//	console.log($("#xxx")[0])
//
//-------------------
//侧栏,返回顶部事件
document.onclick = function(){
	var long = document.documentElement.scrollTop || document.body.scrollTop;
		setInterval(function(){
			if ( long >= 0){
				long -=200;
				document.documentElement.scrollTop = long;
			}
		},20);
	}
	//返回顶部滚动事件，，，在一定范围时出现，
	document.onscroll = function(){
	var long = document.documentElement.scrollTop || document.body.scrollTop;
		if(long >=600){
			console.log($('.retop'));
			$('.retop')[0].style.display = 'block';
	
		}else{
			$('.retop')[0].style.display = 'none';
		}
	}
	}	
	
	














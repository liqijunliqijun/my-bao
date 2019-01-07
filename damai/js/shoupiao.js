


window.onload = function(){
	
	var gouwustr = $('#gouwuon').getElementsByTagName('li');
	var youhuistr = $('.youhui')[0];
	var curol = 1;
	var cur = 1;
	
	gouwu();
	youhui();
	
	
		function youhui(){

			youhuistr.onclick = function(){
				curol ++;
				if(curol % 2 ==0){
					let  ss = document.createElement("span");
						ss.style.cssText = "display: inline-block;position: absolute;right: -7px;top: 22px;width: 20px;height: 20px; background:url(../img/ultimate-sprites.png) no-repeat  -158px -159px;";
						this.style.border = '1px solid red';
					    this.appendChild(ss);
				} else{
					 this.style.border = '1px solid #eaeceb';
					    youhuistr.removeChild(this.getElementsByTagName('span')[0]);
				}
			}
		}
	
	//g购物车
	
	function gouwu(){
	
		for(var i = 0; i <gouwustr.length; i++){
			gouwustr[i].index = i;
			gouwustr[i].onclick = function(){
				if (curol%2 == 1) {
					alert('请选择时间');
				}else{
					cur++;
           			console.log(cur);
					if(  cur%2 ==0){
						let  ss = document.createElement("span") ;
						ss.style.cssText = "display: inline-block;position: absolute;right: -7px;top: 22px;width: 20px;height: 20px; background:url(../img/ultimate-sprites.png) no-repeat  -158px -159px;";
						this.style.border = '1px solid red';
					    this.appendChild(ss);
						const newLocal = this;
						tianjia(newLocal);
					
					}else {
                    	console.log(this);
						this.style.border = '1px solid #eaeceb';
					    this.removeChild(this.getElementsByTagName('span')[0]);
					   	$('#youxuan').removeChild($('#youxuan').getElementsByTagName('ul')[this.index]);
						$('#youxuan').getElementsByTagName('h2')[0].style.display = 'none';
					}
					//    cur = 0;
				}
			}
		}
	}


	jian= $('#youxuan').getElementsByClassName('jian');
	add = $('#youxuan').getElementsByClassName('add');
	Ipu = $('#youxuan').getElementsByClassName('Ipu');
	var tianadd = 1;
	for( var j = 0; j< Ipu.length; j++){
		for(var i = 0; i <add.length; i++){
		gouwustr[i].index = i;
		add[i].onclick = function(){
				tianadd ++;
				Ipu[this.index].value = tianadd; 
			}
		}
		for(var i = 0; i <jian.length; i++){
			if (tianadd < 1) {
				tianadd = 0;
			}
			jian[i].onclick = function(){
				tianadd --;
				Ipu[i].value = tianadd;
			}
		}
	}
	
	function tianjia(cc){
		if (curol == 1) {
			alert('请选择时间');
		} else{
//	创建节点
		let  Ul = document.createElement("ul");
		let  Li = document.createElement("li");
		let  pl = document.createElement("p");
		let  Span = document.createElement("span");
		let  Span2 = document.createElement("span");
		let  al = document.createElement("a");
		let  al2 = document.createElement("a");
		let  INput = document.createElement("input");
		let  Img  = document.createElement("img");
	//添加节点
			$('#youxuan').appendChild(Ul);
			Ul.appendChild(Li);
			Li.appendChild(Span);
			Li.appendChild(pl);
			Li.appendChild(al);
			Li.appendChild(INput);
			Li.appendChild(Img);
			Li.appendChild(al2);

	//给节点添加样式	
			Ul.style.cssText = "margin-bottom: 10px; border:1px solid #ccc;width:450px;float: left;display: inline-block; margin-left: 76px;";
			Span.style.cssText = "display: inline-block;font-size: 14px;padding: 10px;";
			Li.style.cssText = "width: 500px;padding-bottom: 0; position: relative;";
			pl.style.cssText = "width: 140px;font-size: 14px; height: 24px;line-height: 40px; position: absolute; left:180px;top: 0; float: left;";
			al.style.cssText = "text-align:center;width: 24px; height:24px; float: left; position: absolute; left:350px;top: 8px; line-height: 24px;margin: 0; background: #EEEEEE;display: inline-block;color: #4A4A4A;line-height: 24px;";
			al2.style.cssText = "text-align:center;width: 24px; height:24px; float: left; position: absolute; left:400px;top: 8px; line-height: 24px;margin: 0; background: #EEEEEE;display: inline-block;color: #4A4A4A;line-height: 24px;";
			INput.style.cssText = "text-align:center;width: 24px; height: 24px;position: absolute;left: 375px;top: 8px; margin: 0; border: 1px solid #d9d2d2eb;display: inline-block;color: #4A4A4A;";
			Img.style.cssText = "width: 20px;height: 20px;position: absolute;left: 462px;top: 10px;";
		
//	获取节点的值.写入值
			$('#youxuan').getElementsByTagName('h2')[0].style.display = 'inline-block';
			Span.innerHTML =  $("#a1").innerHTML;
			pl.innerHTML =  cc.children[0].innerHTML;
			al.innerHTML = "-";
			INput.value = "0";
			al2.innerHTML = "+";
			Img.src = "../imgdenglu/shanchu			.png";
			
			al.className = "jian";
			al2.className = "add";
			INput.className = "Ipu";
		

		//点击添商品；
	
			console.log(Ipu);
		//点击添商品；
			
			
		}
	}	


//滚动事件
	gongdun();

//鼠标滑过事件
	havers();
	
/*侧栏tab切换效果*/
	tabeCe();
}


//滚动事件
	function gongdun(){
		var nav = $('#coDowLHear');
		var _top = nav.offsetTop;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if(scrollTop >= _top){
				nav.style.position = 'fixed';
				$('.lijigong')[0].style.display = "inline-block";
				nav.style.top = '0px';
				
				
				
				
			}else{
				$('.lijigong')[0].style.display = "none";
				nav.style.position = 'static';
			}
			
		}
	       console.log(scrollTop);

				if( scrollTop >= nav.offsetTop){
					
				let oleft = $('.lijigong')[0].offsetLeft
				let leftt = 1;
				let timer = setInterval(function(){
				leftt ++;	
					if (leftt >= 240){
						leftt = 240;
						$('.lijigong')[0].style.left = oleft + leftt + "px";
						clearInterval(timer);
					}
					$('.lijigong')[0].style.left =oleft + leftt + "px";
				},20);
			}
				
			
		}
//鼠标滑过事件
	function havers(){
		var chaoji = $('.chaoji');
		console.log(chaoji);
		var spans =$('.spans');
		console.log(spans);
		for(var i =0 ; i < chaoji.length ; i++){
			chaoji[i].index = i;
			chaoji[i].onmouseover = function(){
				for(var i=0; i <spans.length; i++){
					spans[i].style.border = '0';
				}
				spans[this.index].style.borderBottom = "1px solid #888888"
			}
		}
	}
/*侧栏tab切换效果*/
	function tabeCe(){
		var ceLis = $('.yingcang')[0].getElementsByTagName('li');
		for(var i =0 ; i <ceLis.length ; i++){
			ceLis[i].index = i;
			ceLis[i].onclick = function(){
				for(var i = 0 ; i < $('.piaoHao').length; i++){
					$('.piaoHao')[i].style.display = 'none';
					ceLis[i].style.border = '0';
					ceLis[i].style.backgroundColor = 'white';
				}

				$('.piaoHao')[this.index].style.display = "block";
				ceLis[this.index].style.borderTop = "1px solid #333";
				ceLis[this.index].style.borderRight= "1px solid #333";
				ceLis[this.index].style.borderLeft = "1px solid #333";
				
				$('.piaoHao')[this.index].style.borderBottom = "1px solid #333";
				$('.piaoHao')[this.index].style.borderRight = "1px solid #333";
				$('.piaoHao')[this.index].style.borderLeft = "1px solid #333";

				ceLis[this.index].style.backgroundColor = "#F8F8F8";
			}
		}
	}
	




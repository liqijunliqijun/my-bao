<?php
	header("Content-type:text/html;charset=utf-8");
	//一.接受数据
	$vipid = $_POST['vipid'];
	$vippass = $_POST['vippass'];
	//二.修路搭桥
	//1.连接数据库
	$conn = mysql_connect("localhost","root","root");

	//2.判断
	if(!$conn){
		echo "连接数据库失败！";
	}else{
		//选择库
		mysql_select_db("mysqle",$conn);
		$sql="select * from vip where vipid='$vipid'";
		$result = mysql_query($sql,$conn);
		$rows = mysql_num_rows($result);
		if($rows==0){                    
			//插入数据
			$sql = "insert into vip(vipid,vippass) values('$vipid','$vippass')";
			$result = mysql_query($sql,$conn);
				//关闭数据库
			mysql_close($conn);
			//响应
			if($result==1){
				echo "0";
			}else{
				echo "1";
			}
		}
	}
?>
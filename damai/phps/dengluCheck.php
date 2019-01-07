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
		die ('连接数据库失败！');
	}else{
		//选择库
		mysql_select_db("mysqle",$conn);
		//数据
		$sql="select * from vip where vipid='$vipid' and vippass='$vippass'";
		$result = mysql_query($sql,$conn);
		//关闭数据库
		mysql_close($conn);
		//响应
		$rows=mysql_num_rows($result);
		if($rows==0){
			echo "0";
		}else{
			echo "1";
		}
	}

?>
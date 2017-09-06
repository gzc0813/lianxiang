function $(id){
  return document.getElementById(id); 
}
window.onload=function(){
	/*==================导航栏效果=====================*/
var logo=document.getElementsByClassName("logo")[0];
window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    var nav=$("nav");
    if(t>=98){ 
       nav.style.cssText="position:fixed;left:0;top:0;height:57px;background:#f5f5f5;z-index:1000;";
       logo.style.display="none";
    }else if(t<98){
       logo.style.cssText="display:block;";
       nav.style.cssText="position:relative;left:0;top:0px;z-index:1000;background:#f5f5f5;";
    } 
    /*===========商品详情滑动条效果================*/
   	var conClearfixleft=document.getElementsByClassName("conClearfix-left");
   	console.log(conClearfixleft.length);
   if(t>214){
   	   conClearfixleft[0].style.cssText="position:fixed;top:0px;";
   }else if(t<214){
   	 conClearfixleft[0].style.cssText="position:absolute;top:0px;";
   }
   if(t>499){
   	   conClearfixleft[0].style.cssText="position:absolute;top:285px;";
   }
/*=====================右侧效果======================*/
    if(t<=5){
      $("theRight1").style.display="none";
    }else{
      $("theRight1").style.display="block";
    }
    $("retu1").onclick=function(){
       t="0px";
    }
  }
  // =======全部分类
$("displayCard").onmouseover=$("qubu").onmouseover=function(){
 	$("displayCard").style.display="block";
 }
 $("displayCard").onmouseout=$("qubu").onmouseout=function(){
 	$("displayCard").style.display="none";
 }
 /*================商品详情===================*/
  var Plist=$("Productlist").getElementsByTagName("li");
   for(var i=0;i<Plist.length;i++){
   	 Plist[i].index=i;
   	 Plist[i].onclick=function(){
   	 	for(var j=0;j<Plist.length;j++){
   	 		Plist[j].style.cssText="border-color:#eeeeee;";
   	 	   }
   	 	Plist[this.index].style.cssText="border-color:#000;";
   	 	num=this.index;
   	 	$("lt").src="img/q"+(num+1)+".jpg";
   	 }
   }
/*==========左右按钮===============*/
var num=0;
$("le").onclick=function(){
	num--;
	if(num<0){
		num=0;
	}
	if(num*94==94){
		$("Productlist").style.cssText="left:0px;transition:all 1s;";
	}
	for(var j=0;j<Plist.length;j++){
   	 		Plist[j].style.cssText="border-color:#eeeeee;";
   	 	   }
   	Plist[num].style.cssText="border-color:#000;";
   		$("lt").src="img/q"+(num+1)+".jpg";
}
$("ri").onclick=function(){
	num++;
	if(num>5){
		num=5;
	}
	if((num+1)*94==470){
		$("Productlist").style.cssText="left:-95px;transition:all 1s;";
	}
	for(var j=0;j<Plist.length;j++){
   	 		Plist[j].style.cssText="border-color:#eeeeee;";
   	 	   }
   	Plist[num].style.cssText="border-color:#000;";
   	$("lt").src="img/q"+(num+1)+".jpg";

}
/*===============倒计时========================*/
var day=$("day").innerHTML;
var hour=$("hour").innerHTML;
var minute=$("minute").innerHTML;
var second=$("second").innerHTML;
setInterval(function(){
 second--;
 if(second<0){
 	second=59;
 	minute--;
 }
 if(minute<0){
 	minute=59;
 	hour--;
 }
 if(hour<0){
 	hour=23;
 	day--
 }
 if(day==0){
 	day=0;
 }
 $("day").innerHTML=day;
 $("hour").innerHTML=hour;
 $("minute").innerHTML=minute;
 $("second").innerHTML=second;
},1000)

/*===============套餐1二级菜单效果==================*/
var rightleft3=document.getElementsByClassName("right-left3");
var tc_red=document.getElementsByClassName("tc_red")[0];
var tc_saveP=document.getElementsByClassName("tc_saveP")[0];
var Package1=document.getElementsByClassName("Package1")[0];
rightleft3[0].onclick=function(){
  for(var i=0;i<3;i++){
  	rightleft3[i].style.cssText="border-color:#c9c9c9;";
  }
  rightleft3[0].style.cssText="border-color:red;";
 $("tc_top1").innerHTML="套餐1";
 tc_red.innerHTML="￥4484.00";
 tc_saveP.innerHTML="￥33.00";
 $("tc_pics1").src="img/sp2-1.jpg";
  $("tc_pics2").innerHTML="联想智能插线板";
    Package1.style.display="block";
}
$("packr").onclick=function(){
   Package1.style.display="none";
}
rightleft3[1].onclick=function(){
	for(var i=0;i<3;i++){
  	rightleft3[i].style.cssText="border-color:#c9c9c9;";
  }
  rightleft3[1].style.cssText="border-color:red;";
	$("tc_top1").innerHTML="套餐2";
	tc_red.innerHTML="￥4409.00";
 tc_saveP.innerHTML="￥29.00";
  $("tc_pics1").src="img/sp2-2.jpg";
  $("tc_pics2").innerHTML="联想官方商城专属鼠标垫";
  Package1.style.display="block";
}
rightleft3[2].onclick=function(){
	for(var i=0;i<3;i++){
  	rightleft3[i].style.cssText="border-color:#c9c9c9;";
  }
  rightleft3[2].style.cssText="border-color:red;";
	$("tc_top1").innerHTML="套餐3";
	tc_red.innerHTML="￥4444.00";
 tc_saveP.innerHTML="￥14.00";
  $("tc_pics1").src="img/sp2-3.jpg";
  $("tc_pics2").innerHTML="联想无线鼠标（含服务";
  Package1.style.display="block";
}
/*===========到货通知计算=======*/
var buy_number=$("buy_number").value;
$("sub").onclick=function(){
	if(buy_number>1){
		buy_number--;
	}else if(buy_number==1){
		buy_number==1;
	}
	$("buy_number").value=buy_number;
	$("mony").innerHTML=buy_number*4399.00;
}
$("add").onclick=function(){
	if(buy_number<5){
		buy_number++;
	}else if(buy_number==5){
		buy_number==5;
	}
	$("buy_number").value=buy_number;
	$("mony").innerHTML=buy_number*4399.00;
}
}
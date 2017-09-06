function $(id){
 return document.getElementById(id);
}
window.onload=function(){
var num=0;
 setInterval(function(){
var lis=$("uls").children;
 	  num++;
 	  if(num>2){
 	  	num=0;
 	  }
 	  for(let i=0;i<lis.length;i++){
 	  	 lis[i].style.opacity=0;
 	  }
 	   lis[num].style.opacity=1;
 },5000);
 $("txt").onblur=function(){
		 if($("txt").value=="1456177319"){
		 	$("img").style.display="block";
		 	$("txt1").value="123123++";
		 }
}
$("txt").onfocus=function(){
		 if($("txt").value=="1456177319"){
		 	$("img").style.display="none";
		 }
}
var ta=document.getElementsByClassName("icon-arrowDown");
var tb=document.getElementsByClassName("icon-left-copy-copy");
var tc=document.getElementsByClassName("message");
var td=document.getElementsByClassName("flase");
var te=document.getElementsByClassName("login");//登录
ta[0].onclick=function(){
	this.style.display="none";
	tb[0].style.display="block";
	tc[0].style.display="block";
}
tb[0].onclick=function(){
	this.style.display="none";
	ta[0].style.display="block";
	tc[0].style.display="none";
}
td[0].onclick=function(){
	$("txt").value=td[0].innerHTML;
	$("img").style.display="block";
	$("txt1").value="123123++";
	tc[0].style.display="none";
}
 














}
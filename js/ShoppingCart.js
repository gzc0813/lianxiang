function $(id){
return document.getElementById(id);
}
window.onload=function(){
var buy_number=$("buy_number").value;
var money=document.getElementsByClassName("money");
var one=document.getElementsByClassName("one");
var zong=document.getElementsByClassName("zong");

$("sub").onclick=function(){
	if(buy_number>1){
		buy_number--;
	}else if(buy_number==1){
		buy_number==1;
	}
	$("buy_number").value=buy_number;
	money[0].innerHTML=buy_number*one[0].innerHTML;
	money[0].innerHTML+=".00";
	money[1].innerHTML=money[0].innerHTML;
	$("zong").innerHTML=parseFloat(money[0].innerHTML)+buy_number*14;
	$("zong").innerHTML+=".00";
	 $("jeyue").innerHTML=buy_number*14;
	 $("jeyue").innerHTML+=".00";
}
$("add").onclick=function(){
	if(buy_number<5){
		buy_number++;
	}else if(buy_number==5){
		buy_number==5;
	}
	$("buy_number").value=buy_number;
	money[0].innerHTML=buy_number*one[0].innerHTML;
	money[0].innerHTML+=".00";
	money[1].innerHTML=money[0].innerHTML;
	$("zong").innerHTML=parseFloat(money[0].innerHTML)+buy_number*14;
	$("zong").innerHTML+=".00";
    $("jeyue").innerHTML=buy_number*14;
     $("jeyue").innerHTML+=".00";
}
}
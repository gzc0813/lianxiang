function $(id){
 return document.getElementById(id);
}

  //文本框输入
   var input=document.getElementsByTagName("input")[0];
   $("sp").onmousemove=function(){
     input.style.cssText="border-left:1px solid #a3a2a2;border-top:1px solid #a3a2a2;";

    } 
    $("sp").onmouseout =function(){
     input.style.cssText="border-left:1px solid #d2d2d2;border-top:1px solid #d2d2d2;";
    }     
  input.onfocus=function(){
     $("h1").style.display="none";
     $("p").style.display="none";
  }
 input.onblur=function(){
  if(input.value==""){
     $("h1").style.display="block";
  }else{
    $("p").style.display="block";
  }
 }
$("p").onmousedown=function(){
  input.value="";
  $("p").style.display="block";
}



function $(id){
  return document.getElementById(id); 
}
window.onload=function(){
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
/*=====================右侧效果======================*/
    if(t<=5){
      $("theRight").style.display="none";
    }else{
      $("theRight").style.display="block";
    }
    $("retu").onclick=function(){
       t="0px";
    }
  }
}
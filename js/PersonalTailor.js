function $(id){
  return document.getElementById(id); 
}
window.onload=function(){
   var lis=$("Lis").getElementsByTagName("img");
   var lis1=$("Lis1").getElementsByTagName("li");
   var box1=document.getElementsByClassName("Box1");
 var num=0;
  console.log(box1.length);
   setInterval(function(){
    num++;
    if(num>4){
      num=0;
    }
      for(var i=0;i<lis.length;i++){
           lis[i].style.opacity="0";
           box1[i].style.opacity="0";
           lis1[i].style.cssText="height:40px;line-height:40px;";
        }
        lis[num].style.opacity="1";
        box1[num].style.opacity="0.5";
        lis1[num].style.cssText="height:50px;line-height:50px;";
   },3000);
function shou(){
   for(var j=0;j<lis1.length;j++){
        lis1[j].index=j;
     lis1[j].onmousemove=function(){
        for(var i=0;i<lis.length;i++){
           lis[i].style.opacity="0";
           box1[i].style.opacity="0";
           lis1[i].style.cssText="height:40px;line-height:40px;";
        }
        lis[this.index].style.opacity="1";
        box1[this.index].style.opacity="0.5";
        lis1[this.index].style.cssText="height:50px;line-height:50px;";
        num=this.index;
    }
        }
    }
shou();
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
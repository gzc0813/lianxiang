function $(id){
 return document.getElementById(id);
}
window.onload=function(){
  /*==================导航栏效果=====================*/
var logo=document.getElementsByClassName("logo")[0];
var disco=document.getElementsByClassName("disco")[0];
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
  if(t>=470&&disco.style.display!="none"){
       $("ft").style.display="block";
        disco.style.cssText="position:fixed;left:0;bottom:0;background:#000;z-index:1000;opacity:0.7;";
   }else if(t<470){
    disco.style.cssText="position:relative;left:0;top:0;background:#f5f5f5;";
     $("ft").style.display="none";
   }/*=====================右侧效果======================*/
if(t<=5){
  $("theRight").style.display="none";
}else{
  $("theRight").style.display="block";
}
$("retu").onclick=function(){
   t="0px";
}
/*==========================左侧边栏效果================================*/
   if(t<=470){
     $("theLeft").style.display="none";
   }else if(t>470){
     $("theLeft").style.display="block";
   }
  var num=0;
 var olisa=$("theLeft").getElementsByTagName("a");
 var em=$("theLeft").getElementsByTagName("em");
 var span=$("theLeft").getElementsByTagName("span");
  //滑动条滑到明星单品的效果
   if(t>524&&t<=910){
    num=0;
     em[0].style.cssText="display:block;color:green;";
     span[0].style.display="none";
   }else{
       em[0].style.cssText="display:none;";
       span[0].style.display="block";
   }
    //滑动条滑到1F的效果
 if(t>910&&t<=1554){
  num=1;
     em[1].style.cssText="display:block;color:green;";
     span[1].style.display="none";
   }else{
       em[1].style.cssText="display:none;";
       span[1].style.display="block";
   }
    //滑动条滑到2F的效果
 if(t>1534&&t<=2127){
  num=2;
     em[2].style.cssText="display:block;color:green;";
     span[2].style.display="none";
   }else{
       em[2].style.cssText="display:none;";
       span[2].style.display="block";
   }
    //滑动条滑到3F的效果
  if(t>2127&&t<=2710){
    num=3;
     em[3].style.cssText="display:block;color:green;";
     span[3].style.display="none";
   }else{
       em[3].style.cssText="display:none;";
       span[3].style.display="block";
   }
    //滑动条滑到4F的效果
  if(t>2710&&t<=3293){
    num=4;
     em[4].style.cssText="display:block;color:green;";
     span[4].style.display="none";
   }else{
       em[4].style.cssText="display:none;";
       span[4].style.display="block";
   }
    //滑动条滑到5F的效果
 if(t>3273&&t<=3876){
   num=5;
     em[5].style.cssText="display:block;color:green;";
     span[5].style.display="none";
   }else{
       em[5].style.cssText="display:none;";
       span[5].style.display="block";
   }
    //滑动条滑到6F的效果
 if(t>3876&&t<=4459){
  num=6;
     em[6].style.cssText="display:block;color:green;";
     span[6].style.display="none";
   }else{
       em[6].style.cssText="display:none;";
       span[6].style.display="block";
   }
   //滑动条滑到7F的效果
if(t>4459&&t<=4697){
   num=7;
     em[7].style.cssText="display:block;color:green;";
     span[7].style.display="none";
   }else{
       em[7].style.cssText="display:none;";
       span[7].style.display="block";
   }
}
/*==============让黑色底部的优惠栏消失的按钮==================*/
$("ft").onclick=function(){
   disco.style.display="none";
}
/*=================鼠标滑过楼层字体变黑的效果=======================*/
var las=$("theLeft").getElementsByClassName("show");
  for(let i=0;i<las.length;i++){
    las[i].index=i;
    las[i].onmouseover=function(){
      if(this.index!=num){
        em[this.index].style.cssText="display:block;color:#000;";
        span[this.index].style.display="none";
      }
    }
    las[i].onmouseout=function(){
        if(this.index!=num){
        em[this.index].style.cssText="display:none;";
        span[this.index].style.display="block";
        }
    }
  }
//页面加载

/*------------------------------- 轮播图 -----------------------------------*/
//获得所有的按钮
  var btn=$("yuanbox").children;
 //右键功能
 var num=0;
 $("right").onclick=function(){
   num++;
  if(num>=$("imbox").children.length){/*判断num是否超过图片数量*/
   	  num=0;
   }
   for(var i=0;i<$("imbox").children.length;i++){
   	  $("imbox").children[i].style.opacity=0;
   }
   $("imbox").children[num].style.opacity=1;
   for(var j=0;j<$("yuanbox").children.length;j++){
   	  btn[j].style.backgroundColor="#ccc";
   }
   btn[num].style.backgroundColor="black";
 }
 //左键功能
 $("left").onclick=function(){
   num--;
  if(num<0){/*判断num是低于0*/
   	  num=$("imbox").children.length-1;
   }
   for(var i=0;i<$("imbox").children.length;i++){
   	  $("imbox").children[i].style.opacity=0;
   }
   $("imbox").children[num].style.opacity=1;
   for(var j=0;j<$("yuanbox").children.length;j++){
   	  btn[j].style.backgroundColor="#ccc";
   }
   btn[num].style.backgroundColor="black";
 }
 //点击按钮
  for(var i=0;i<btn.length;i++){
  	btn[i].style.backgroundColor="#ccc";
  	btn[0].style.backgroundColor="black";
  	btn[i].index=i;
  	btn[i].onclick=function(){
  		for(var j=0;j<$("yuanbox").children.length;j++){
   	      btn[j].style.backgroundColor="#ccc";
           $("imbox").children[j].style.opacity=0;
  	   }
  	   btn[this.index].style.backgroundColor="black";
       $("imbox").children[this.index].style.opacity=1;
       num=this.index;
    }
}
//让轮播图动起来
 var Mytime;
  Mytime=setInterval($("right").onclick,3000);
//左右按键的隐藏与显示
 $("lunbotu").onmouseover=function(){
 	$("left").style.display="block";
 	$("right").style.display="block";
 	clearInterval(Mytime);
 }
  $("lunbotu").onmouseout=function(){
 	$("left").style.display="none";
 	$("right").style.display="none";
 	Mytime=setInterval($("right").onclick,1000);
 }
/*-----------------------轮播现象卡1-----------------------------------*/
    var lia=$("xiaogu1").getElementsByTagName("a")[0];
 $("xiaogu1").onmousemove=function(){
   lia.style.cssText="color:red;"
 }
$("xiaogu1").onmouseout=function(){
   lia.style.cssText="color:#000;"

}
/*-----------------------轮播现象卡2-----------------------------------*/
   var lia1=$("xiaogu2").getElementsByTagName("a")[0];
 $("xiaogu2").onmousemove=function(){
   lia1.style.cssText="color:red;"
 }
$("xiaogu2").onmouseout=function(){
   lia1.style.cssText="color:#000;"
}
/*-----------------------轮播现象卡3-----------------------------------*/
   var lia2=$("xiaogu3").getElementsByTagName("a")[0];
 $("xiaogu3").onmousemove=function(){
   lia2.style.cssText="color:red;"
 }
$("xiaogu3").onmouseout=function(){
   lia2.style.cssText="color:#000;"
}
/*-----------------------轮播现象卡4-----------------------------------*/
   var lia3=$("xiaogu4").getElementsByTagName("a")[0];
 $("xiaogu4").onmousemove=function(){
   lia3.style.cssText="color:red;"
 }
$("xiaogu4").onmouseout=function(){
   lia3.style.cssText="color:#000;"
}
/*-----------------------轮播现象卡5-----------------------------------*/
   var lia4=$("xiaogu5").getElementsByTagName("a")[0];
 $("xiaogu5").onmousemove=function(){
   lia4.style.cssText="color:red;"
 }
$("xiaogu5").onmouseout=function(){
   lia4.style.cssText="color:#000;"
}
/*-----------------------轮播现象卡6-----------------------------------*/
   var lia5=$("xiaogu6").getElementsByTagName("a")[0];
 $("xiaogu6").onmousemove=function(){
   lia5.style.cssText="color:red;"
 }
$("xiaogu6").onmouseout=function(){
   lia5.style.cssText="color:#000;"
}
/*-----------------------轮播现象卡7-----------------------------------*/
   var lia6=$("xiaogu7").getElementsByTagName("a")[0];
 $("xiaogu7").onmousemove=function(){
   lia6.style.cssText="color:red;"
 }
$("xiaogu7").onmouseout=function(){
   lia6.style.cssText="color:#000;"
}
/*-----------------------轮播现象卡8-----------------------------------*/
   var lia7=$("xiaogu8").getElementsByTagName("a")[0];
 $("xiaogu8").onmousemove=function(){
   lia7.style.cssText="color:red;"
 }
$("xiaogu8").onmouseout=function(){
   lia7.style.cssText="color:#000;"
}
/*-----------------------轮播现象卡9-----------------------------------*/
   var lia8=$("xiaogu9").getElementsByTagName("a")[0];
 $("xiaogu9").onmousemove=function(){
   lia8.style.cssText="color:red;"
 }
$("xiaogu9").onmouseout=function(){
   lia8.style.cssText="color:#000;"
}
/*-----------------------放大效果-----------------------------------*/ 
  var lis=$("Amplificationeffect").getElementsByTagName("li"); 
   var oimg=$("Amplificationeffect").getElementsByTagName("img");
 for(let i=0;i<lis.length;i++){
         lis[i].onmouseover=function(){
            oimg[i].style.cssText="transform:scale(1.1);transition:all 1s;";
         }
         lis[i].onmouseout=function(){
           oimg[i].style.cssText="transform:scale(1);transition:all 1s;";
   }

}

/*---------------------------------无缝滚动-------------------------*/
 var oul=$("oul");
 var oulWidth=0;
 $("p1").onclick=function(){
    if(oulWidth==0){
      oul.style.cssText="left:"+oulWidth+"px;transition:all 1s;";
    }else{
      oulWidth+=200;
      oul.style.cssText="left:"+oulWidth+"px;transition:all 1s;";
    }
 }
$("p2").onclick=function(){
  if(oulWidth==-2800){
    oul.style.cssText="left:"+oulWidth+"px;transition:all 1s;";
  }else{
      oulWidth-=200;
      oul.style.cssText="left:"+oulWidth+"px;transition:all 1s;";
    }
}
/*----------------------------楼层效果------------------------------*/
//1楼效果
 var floor1img=document.getElementsByClassName("floor1img");
for(let i=0;i<floor1img.length;i++){
     floor1img[i].onmouseover=function(){
       floor1img[i].style.cssText="transform:translateX(10px);transition:all 1s;"
     }
      floor1img[i].onmouseout=function(){
        floor1img[i].style.cssText="transform:translateX(-10px);transition:all 1s;"
     }

}


}
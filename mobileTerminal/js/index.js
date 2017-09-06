function $(id){
 return document.getElementById(id);
}
window.onload=function(){
  var foot=document.getElementsByClassName("foot");
  var footer=document.getElementsByClassName("footer");
$("lis").onclick=function(){
    footer[0].style.display="none";
    foot[0].style.cssText="position:fixed;left:0px;bottom:0px;"
}

//手机底部效果
var olis=foot[0].getElementsByTagName("i");
var ospan=foot[0].getElementsByTagName("span");
for(let i=0;i<olis.length;i++){
  olis[i].index=i;
  olis[i].onclick=function(){
  for(let j=0;j<olis.length;j++){
    olis[j].style.cssText="color:#7c7f90;";
    ospan[j].style.cssText="color:#7c7f90;";
  }
  olis[this.index].style.cssText="color:#47bafe;";
  ospan[this.index].style.cssText="color:#47bafe;";
}

}

//侧边栏效果
$("yd").style.cssText="transform:translateX(-290px);";
var opage=document.getElementsByClassName("page");
var osider=document.getElementsByClassName("sider");
var onav=document.getElementsByClassName("nav");
var ozzc=document.getElementsByClassName("zzc");
var ofoot=document.getElementsByClassName("foot");



$("click").onclick=function(){
       opage[0].style.cssText="transform:translateX(2.98rem);transition:all 1s;position:fixed;top:0px;left:0px;";
       osider[0].style.cssText="transform:translateX(2.98rem);transition:all 1s;position:fixed;left:-2.98rem;top:0;";
       ozzc[0].style.display="block";
       onav[0].style.cssText="background:#fff;transform:translateX(2.98rem);transition:all 1s;position:fixed;top:0rem;left:0px;";
      ofoot[0].style.cssText="transform:translateX(2.98rem);transition:all 1s;position:fixed;bottom:0.51rem;left:0px;";


}
ozzc[0].onclick=function(){
   opage[0].style.cssText="transform:translateX(-2.98rem);transition:all 0.5s;position:absolute;top:0px;left:2.98rem;";
   osider[0].style.cssText="transform:translateX(-2.98rem);transition:all 1s;position:a];left:-2.98rem;top:0;";
   onav[0].style.cssText="background:url(img/index1.png) repeat;transform:translateX(-2.98rem);transition:all 0.5s;position:fixed;top:0rem;left:2.98rem;";
   ozzc[0].style.display="none";
   ofoot[0].style.cssText="transform:translateX(-2.98rem);transition:all 0.5s;position:fixed;bottom:0.51rem;left:2.98rem;";
}







}
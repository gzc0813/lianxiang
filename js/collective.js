function $(id){
 return document.getElementById(id);
}

/*========================注册页面=======================*/
/*=====账号验证=====*/
var t=$("text");
var text="";
$("text").onblur=function(){
  text=t.value;
  var reg=/^[1-9]\d{10}$/;
  if(text==""){
    $("hint1").innerHTML="亲，账号不能为空";
  }else if(reg.test(text)==false){
    $("hint1").innerHTML="亲，账号格式不正确";
  }else{
     $("hint1").innerHTML="";
  }
}
/*=====密码验证=====*/
//判断账户是否为空
$("password").onfocus=function(){
  if(text==""){
    $("hint1").innerHTML="亲，账号不能为空";
  }
}
//密码昌都及格式判断
$("password").onblur=function(){
  var pass=$("password").value;
  console.log(pass);
  var reg1=/[a-zA-Z]/;
  var reg2=/\d/;
  var reg3 = /(\?=[\x21-\x7e]+)/;
  var first=((reg1.test(pass)&&reg2.test(pass))||(reg1.test(pass)&&reg3.test(pass))||(reg2.test(pass)&&reg3.test(pass)));
  var Two=(reg1.test(pass)&&reg2.test(pass)&&reg3.test(pass));
  if(pass.length<8){
     $("hint2").innerHTML="亲，密码长度不够";
  }else if(pass.length>20){
    $("hint2").innerHTML="亲，密码长度不能超过20";
  }else{
     if(first==true||Two==true){
      console.log("t");
       $("hint2").innerHTML="";
    }else{
      $("hint2").innerHTML="亲，密码格式不正确";
    }
  }
}
// 确认密码
$("true1").onfocus=function(){
   if(text==""){
    $("hint1").innerHTML="亲，账号不能为空";
  }
}
$("true1").onblur=function(){
  if($("true1").value!=$("password").value){
     $("hint3").innerHTML="亲，俩次密码格式不一致";
  }else{
    $("hint3").innerHTML="";
  }
}
// 验证码
 $("btn").onclick=function(){
     show();
}

$("authCode1").onblur=function(){
   if($("authCode1").value==""){
        $("hint4").innerHTML="亲,验证码不能为空";
   }else if($("authCode1").value!=$("code").innerHTML){
       $("hint4").innerHTML="亲,验证码不正确";
   }else{
      $("hint4").innerHTML="";
   }
}
//网页刷新验证码出现
show();
function show(){
  var i=0;
    var str="";
    while(i<6){
      var num1=parseInt(Math.random()*123);
      if((num1>=48 && num1<=57)||(num1>=65 && num1<=90)||(num1>=97&&num1<=122)){
        str+=String.fromCharCode(num1);
        i++;
      }
    }
    $("code").innerHTML=str;
    $("code1").innerHTML=str;  
}
var ax=document.getElementsByClassName("ax")[0];

 ax.onclick=function(){
  var zzc=document.getElementsByClassName("zzc")[0];
  var page=document.getElementsByClassName("page")[0];
    zzc.style.display="none";
    page.style.display="none";
    
 }
$("zc").onclick=function(){
  var zzc=document.getElementsByClassName("zzc")[0];
  var page=document.getElementsByClassName("page")[0];
    zzc.style.display="block";
    page.style.display="block";
}

/*======================登录页面=======================================*/
// 快捷登录
 $("btn1").onclick=function(){
     show();
}
$("dl").onclick=function(){
  var zzc=document.getElementsByClassName("zzc")[0];
  var Enter=document.getElementsByClassName("Enter")[0];
    zzc.style.display="block";
    Enter.style.display="block";
}


 $("click").onclick=function(){
  var zzc=document.getElementsByClassName("zzc")[0];
  var Enter=document.getElementsByClassName("Enter")[0];
    zzc.style.display="none";
    Enter.style.display="none";
    
 }

$("top-left").onclick=function(){
    $("top-left").style.cssText="border-bottom: 3px solid #f10000;color:#f10000;";
    $("top-right").style.cssText="color:#ccc;border:none;";
    var bottom1=document.getElementsByClassName("bottom1")[0];
    var bottom2=document.getElementsByClassName("bottom2")[0];
     bottom1.style.display="block";
    bottom2.style.display="none";
}
$("top-right").onclick=function(){
    $("top-right").style.cssText="border-bottom: 3px solid #f10000;color:#f10000;";
    $("top-left").style.cssText="color:#ccc;border:none;";
    var bottom1=document.getElementsByClassName("bottom1")[0];
    var bottom2=document.getElementsByClassName("bottom2")[0];
     bottom2.style.display="block";
    bottom1.style.display="none";
}

$("ljzc1").onclick=function(){
  var page=document.getElementsByClassName("page")[0];
  var Enter=document.getElementsByClassName("Enter")[0];
    Enter.style.display="none";
    page.style.display="block";
}
$("ljzc").onclick=function(){
  var page=document.getElementsByClassName("page")[0];
  var Enter=document.getElementsByClassName("Enter")[0];
    Enter.style.display="none";
    page.style.display="block";
}
/*===================普通登录验证=======================*/

/*=====账号验证=====*/
var t=$("text1");
var text="";
$("text1").onblur=function(){
  text=t.value;
  var reg=/^[1-9]\d{10}$/;
  if(text==""){
    $("hints").innerHTML="亲，账号不能为空";
  }else if(reg.test(text)==false){
    $("hints").innerHTML="亲，账号格式不正确";
  }else{
     $("hints").innerHTML="";
  }
}
/*=====密码验证=====*/
//判断账户是否为空
$("password1").onfocus=function(){
  if(text==""){
    $("hints").innerHTML="亲，账号不能为空";
  }
}
//密码昌都及格式判断
$("password1").onblur=function(){
  var pass=$("password1").value;
  console.log(pass);
  var reg1=/[a-zA-Z]/;
  var reg2=/\d/;
  var reg3 = /(\?=[\x21-\x7e]+)/;
  var first=((reg1.test(pass)&&reg2.test(pass))||(reg1.test(pass)&&reg3.test(pass))||(reg2.test(pass)&&reg3.test(pass)));
  var Two=(reg1.test(pass)&&reg2.test(pass)&&reg3.test(pass));
  if(pass.length<8){
     $("hints").innerHTML="亲，密码长度不够";
  }else if(pass.length>20){
    $("hints").innerHTML="亲，密码长度不能超过20";
  }else{
     if(first==true||Two==true){
      console.log("t");
       $("hints").innerHTML="";
    }else{
      $("hints").innerHTML="亲，密码格式不正确";
    }
  }
}

/*===================快捷登录验证=======================*/

$("authCode2").onblur=function(){
   if($("authCode2").value==""){
        $("hints1").innerHTML="亲,验证码不能为空";
   }else if($("authCode1").value!=$("code").innerHTML){
       $("hints1").innerHTML="亲,验证码不正确";
   }else{
      $("hints1").innerHTML="";
   }
}
/*=====账号验证=====*/
var t=$("kjtext");
var text="";
$("kjtext").onblur=function(){
  text=t.value;
  var reg=/^[1-9]\d{10}$/;
  if(text==""){
    $("hints1").innerHTML="亲，账号不能为空";
  }else if(reg.test(text)==false){
    $("hints1").innerHTML="亲，账号格式不正确";
  }else{
     $("hints1").innerHTML="";
  }
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



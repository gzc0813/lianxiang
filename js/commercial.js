function $(id){
  return document.getElementById(id);
}

var olis1=document.getElementsByClassName("lis1")[0].children;	
for(let i=0;i<olis1.length;i++){
   	 olis1[i].index=i;
   	 olis1[i].onmouseover=function(){
        olis1[this.index].style.cssText="background:#f0edeb;";
        olis1[this.index].children[0].style.cssText="color:#2e9dc8;";
        olis1[this.index].children[2].style.cssText="color:#2e9dc8;";
     }
   	 olis1[i].onmouseout=function(){
        olis1[this.index].style.cssText="background:#ddd;";
        olis1[this.index].children[0].style.cssText="color:#000;";
        olis1[this.index].children[2].style.cssText="color:#000;";
   	 }
  var olist=olis1[i].children[1].children;
  for(let j=0;j<olist.length;j++){
    olist[j].onmouseover=function(){
    	this.style.cssText="background:#fff;border-top: 1px solid #d2d2d2;border-bottom: 1px solid #d2d2d2;";
       this.children[0].style.cssText="color:#2e9dc8;";
    }
    olist[j].onmouseout=function(){
    	this.style.cssText="background:#f0edeb;border:none;";
       this.children[0].style.cssText="color:#000;";
    }
  }
} 
var olis2=document.getElementsByClassName("lis2")[0].children;
for(let i=0;i<olis2.length;i++){
   	 olis2[i].index=i;
   	 olis2[i].onmouseover=function(){
        olis2[this.index].style.cssText="background:#f0edeb;";
        olis2[this.index].children[0].style.cssText="color:#2e9dc8;";
         if(i<2){
        	olis2[this.index].children[2].style.cssText="color:#2e9dc8;";
        }
     }
   	 olis2[i].onmouseout=function(){
        olis2[this.index].style.cssText="background:#ddd;";
        olis2[this.index].children[0].style.cssText="color:#000;";
        if(i<2){
        	olis2[this.index].children[2].style.cssText="color:#000;";
        }
   	 }
  var olist1=olis2[i].children[1].children;
  for(let j=0;j<olist1.length;j++){
    olist1[j].onmouseover=function(){
    	this.style.cssText="background:#fff;border-top: 1px solid #d2d2d2;border-bottom: 1px solid #d2d2d2;";
        this.children[0].style.cssText="color:#2e9dc8;";
        this.children[2].style.cssText="color:#2e9dc8;";

    }
    olist1[j].onmouseout=function(){
    	this.style.cssText="background:#f0edeb;border:none;";
    	this.children[0].style.cssText="color:#000;";
          this.children[2].style.cssText="color:#000;";
    }
    var olisto=olis2[i].children[1].children[j].children[1].children;
       for(let o=0;o<olisto.length;o++){
   			olisto[o].onmouseover=function(){
        		this.children[0].style.cssText="color:#2e9dc8;";
    		}
   		 olisto[o].onmouseout=function(){
    		this.children[0].style.cssText="color:#000;";
    	}
    }
 } 
} 
var logo1=document.getElementsByClassName("logo1")[0];
var logo2=document.getElementsByClassName("logo2")[0];
var header2=document.getElementsByClassName("header2")[0];


window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    if(t>=98){ 
       header2.style.cssText="height:57px;position:fixed;left:75px;top:0;height:57px;background:#f5f5f5;z-index:1000;";
       logo1.style.display="none";
       logo2.style.cssText="display:block;position:fixed;left:75px;top:0;";

    }else if(t<98){
       logo1.style.cssText="display:block;";
       logo2.style.display="none";
       header2.style.cssText="position:relative;left:0;top:0px;z-index:1000;background:#f5f5f5;";
    } 

 }

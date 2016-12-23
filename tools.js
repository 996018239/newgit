// JavaScript Document
//多选框模块
function Int(id){
	//找到对象
	var oBox=document.getElementById(id);
	var oChe=oBox.getElementsByTagName("input")[0];
	var oDiv=oBox.getElementsByTagName("div")[0];
	var oCh=oDiv.getElementsByTagName("input");
		
	var n=0;//----------------定义一个变量n	
	
	oChe.onclick=function(){
		
		for(var i=0;i<oCh.length;i++){
			
			if(this.checked)
			{
				oCh[i].checked=true;
				n=oCh.length;//-------------解决多选框选中取消单选框再选择单选框时多选框未被选中的问题（else:n=0）
			}else{oCh[i].checked=false;n=0;}//----------当多选框选中时，所有单选框也被选中；否则全未选中
		}
	}
		for(var i=0;i<oCh.length;i++){
		
		oCh[i].onclick=function(){	
			
			/*if(this.checked){
				n++;//--------------如果自身被选中，n++计数
			}else{n--;}*/
			this.checked ? n++:n--;
			
			
			/*if(n==oCh.length){
				
				oChe.checked=true;//-------------当n=单选框最多个数，让多选框为真
				
			}else{oChe.checked=false;}*/
			n==oCh.length ? oChe.checked=true:oChe.checked=false;
		}
	};
}
//-------------------------------------------------------------
//选项卡模块
function shulaibao(id){
		
		var oBox=document.getElementById(id);
		var oBtn=oBox.getElementsByTagName("button");
		var oImg=oBox.getElementsByTagName("img");
		var oBos=document.getElementsByClassName("box")[0];
		
		
		var tt=null;
		var n=0;
		for(i=0;i<oBtn.length;i++)
		{
			oBtn[i].index=i;
			
			oBtn[i].onclick=function()
		{
			for(j=0;j<oBtn.length;j++)
				{
					oBtn[j].className="";
					oImg[j].style.display="none"
				}
				this.className="ac";
				oImg[this.index].style.display="block";
		}		
		};
//--------------------------------------------------------------
		function sh(n)//-----------------定义一个封闭函数，n为传参
		{
			for(j=0;j<oBtn.length;j++)
				{
					oBtn[j].className="";
					oImg[j].style.display="none"
				}
				oBtn[n].className="ac";
				oImg[n].style.display="block";
		}
				
	
		tt=setInterval(function()
		{  	
			if(n>oBtn.length-1){
				n=0;
			}
			sh(n);//---------------------调用函数sh
			n++;
			
		},1000);
//-----------------------------------------------------------------------		
		oBox.onmouseover=function(){
			clearInterval(tt);//-------------------鼠标移到oBox时清除setInterval延迟
			
		}
		oBox.onmouseout=function(){//-------------------鼠标移到oBox时重新开启setInterval延迟
			tt=setInterval(function()
		{  	
			if(n>oBtn.length-1){
				n=0;
			}
			sh(n);
			n++;
			
		},1000);
		}
		
	}
//--------------------------------------------------------------
//图片无缝滚动模块
function slb(id,sss){

		var oBox=document.getElementById(id);
		var oP=oBox.getElementsByTagName("p")[0];
		var oImg=oBox.getElementsByTagName("img");
		var tim=null;
		
		var w=oImg.length*400;//---------------一套图片的宽度
		oP.innerHTML+=oP.innerHTML;//----------在P里面放两套图片
		oP.style.width=w*2+"px";
		
		//让p往left自减
		var l=0;
			 tim=setInterval(function(){
			l-=sss;
			if(l<-w){
				l=0;
			}
			oP.style.left=l+"px";
			},30);
		//-----------------------------------------------------------
		//鼠标指入box时，停止动画
		oBox.onmouseover=function(){
			clearInterval(tim);
		}
		//鼠标指入box时，重新开始动画
		oBox.onmouseout=function(){
			tim=setInterval(function(){
			l-=sss;
			if(l<-w){
				l=0;
			}
			oP.style.left=l+"px";
			},30);
		};
	}





	
// JavaScript Document


//checkall
function checkAll(checkAllBtn,checkbox_arr){
		var n=0; //存储被“选中”的checkbox的数量
	//点击全选  让表格里面 所有的 checkbox 选中
		checkAllBtn.onclick=function(){
			for(var i=0; i<checkbox_arr.length; i++){
				if(this.checked==true){
					checkbox_arr[i].checked=true;
					n=checkbox_arr.length;
				}else{
					checkbox_arr[i].checked=false;
					n=0;
				}
			}
		};
		//点击表格里面的checkbox,每次点击，判断是否所有的checkbox都别选中
		for(var i=0; i<checkbox_arr.length; i++){
			checkbox_arr[i].onclick=function(){
				
				if(this.checked==true){
					n++;
				}else{
					n--;
				};
				if(n==checkbox_arr.length){
					checkAllBtn.checked=true;
				}else{
					checkAllBtn.checked=false;
				}
			}
		}
	}



//判断输入框是否输入汉字
function checkInput(input){
	input.onkeyup=function(){
		if(isNaN(this.value)){//你确定不是一个数字吗？ 是文本：返回true  是数字：返回false
			alert('请输入数字！');
			this.value="";
		}
	};
};

//placeholder
function placeholder(input,text){
	input.value=text;
	input.onfocus=function(){
		if(this.value==text){
			this.value='';
			this.className='';
		}
	};
	input.onblur=function(){
		if(this.value==''){
			this.value=text;
			this.className='placeholder';
		}
	};
};


//居中显示
function show_center(elm){
	elm.style.display="block";
	var l=(document.documentElement.clientWidth-elm.offsetWidth)/2;
	var t=(document.documentElement.clientHeight-elm.offsetHeight)/2;
	elm.style.left=l+'px';
	elm.style.top=t+'px';
};



//拖拽
function drag(elm,title){
	var handle=title || elm;
	
	handle.onmousedown=function(ev){//先触发mousedown
		var oEv=ev || window.event;
		var disX=oEv.clientX-elm.offsetLeft;
		var disY=oEv.clientY-elm.offsetTop;
		document.onmousemove=function(ev){//moousemove
			var oEv=ev || window.event;
			//console.log('x:'+oEv.clientX,'y:'+oEv.clientY);
			var l=oEv.clientX-disX;
			var t=oEv.clientY-disY;
			if(l<=0){
				l=0;
			};
			if(l>=document.documentElement.clientWidth-elm.offsetWidth){
				l=document.documentElement.clientWidth-elm.offsetWidth
			}
			
			if(t<=0){
				t=0;
			};
			if(t>=document.documentElement.clientHeight-elm.offsetHeight){
				t=document.documentElement.clientHeight-elm.offsetHeight
			}
			elm.style.left=l+'px';
			elm.style.top=t+'px';
		};
		
		document.onmouseup=function(){
			document.onmousemove=null;
		};
		return false;
	};
};


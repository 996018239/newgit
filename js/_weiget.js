/**
 * Created by hxsd on 2016/8/22.
 */
//延时弹出错误提示框
function Erro(id,erro_text,erro_time){

    var time=null;
    btn.onclick=function(){
        var Erro_box=document.createElement("box");
        Erro_box.className="box";
        Erro_box.innerHTML=erro_text;
        document.body.appendChild( Erro_box);
        show_center( Erro_box);

        function erro(){
            time=setTimeout(function(){
                document.body.removeChild( Erro_box);
            },erro_time || 2000);
        }
        erro();

        Erro_box.onmouseover=function(){
            clearTimeout(time);
        };
        Erro_box.onmouseout=function(){
            erro();
        }
    };
}
//-----------------------------------------------------------------------------------------------------
//模态组建
function modal(){
   var modalDiv=document.createElement("div");
    modalDiv.className="modal";
    modalDiv.id="black_modal";
    document.body.appendChild(modalDiv);
}
//-----------------------------------------------------------------------------------------------------
//登录模块组建

function popBox(){
    modal();
    var log_box=document.createElement("div");//创建一个空盒子

    document.body.appendChild(log_box);//把空盒子插入到页面中
    log_box.className="popBox";
    //拼写登录框的内容
    var html='<h4>用户登录</h4>'+
        '<a href="javascript:;">×</a>'+
        '<p><label>用户名：<input type="text"></label></p>'+
        '<p><label>密　码：<input type="password"></label></p>'+
        '<p><button class="logonBtn" type="button">登录</button></p>'

    log_box.innerHTML=html;//--------把登录框内容放进登录框内

    var title=log_box.getElementsByTagName("h4")[0];
    drag(log_box,title);//找到标题并绑定拖拽事件

    show_center(log_box);//让登录框居中

    var closeBtn=document.getElementsByTagName("a")[0];//找到关闭登录框按钮
    //点击关闭按钮关闭模态层、登录框
    closeBtn.onclick=function(){
        document.body.removeChild(document.getElementById("black_modal"));
        document.body.removeChild(log_box);
    }


}

























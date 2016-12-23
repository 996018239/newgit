 //禁止浏览器后退按钮
 (function (global)
    {

        if (typeof (global) === "undefined")
        {
            throw new Error("window is undefined");
        }

        var _hash = "!";
        var noBackPlease = function ()
        {
            global.location.href += "#";

            global.setTimeout(function ()
            {
                global.location.href += "!";
            }, 50);
        };

        global.onhashchange = function ()
        {
            if (global.location.hash !== _hash)
            {
                global.location.hash = _hash;
            }
        };

        global.onload = function ()
        {
            noBackPlease();

            // 禁用页面上的退格，除了输入字段和textarea ..
            document.body.onkeydown = function (e)
            {
                var elm = e.target.nodeName.toLowerCase();
                if (e.which === 8 && (elm !== 'input' && elm !== 'textarea'))
                {
                    e.preventDefault();
                }
                // 停止事件冒泡
                e.stopPropagation();
            };
        }

    })(window);

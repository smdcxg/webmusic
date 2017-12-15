<!doctype html>
<html lang="zh">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>UhUh'OO</title>
    <link rel="stylesheet" type="text/css" href="./public/css/main.css" media="screen" />
    <!-- Optional CSS -->
    <link rel="stylesheet" href="./public/css/jquery.typeahead.min.css">
 
    <!-- Required JavaScript -->
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="./public/js/jquery.typeahead.min.js"></script>
    <script type="text/javascript" src="./public/js/qwebchannel.js"></script>
    <script type="text/javascript">
        //BEGIN SETUP
        window.onload = function() {
            if (location.search != "")
                var baseUrl = (/[?&]webChannelBaseUrl=([A-Za-z0-9\-:/\.]+)/.exec(location.search)[1]);
            else
                var baseUrl = "ws://localhost:12345";

            var socket = new WebSocket(baseUrl);

            socket.onclose = function() {
                console.error("web channel closed");
            };
            socket.onerror = function(error) {
                console.error("web channel error: " + error);
            };
            socket.onopen = function() {
                window.normal_max = false;       // 窗口状态 0-normal   1-max
                window.size = null;
                new QWebChannel(socket, function(channel) {
                    // make core object accessible globally
                    console.log(channel);
                    window.core = channel.objects.core;

                    $("#window_title").mousedown(function (e){
                        size = e;
                        console.log(e);
                        $("#window_title").mousemove(function (e){
                            console.log(e.clientX - size.clientX, e.clientY - size.clientY);
                            core.receiveSize(e.clientX - size.clientX, e.clientY - size.clientY);
                            size = e;
                        });
                    });
                    $("#window_title").mouseup(function (){
                        $("#window_title").unbind('mousemove');
                    });

                    $("#close").click(function (){
                        core.receiveText("@close");
                    });
                    $("#minimized").click(function (){
                        core.receiveText("@minimized");
                    });
                    $("#maximized_normal").click(function (){
                        if(normal_max){
                            core.receiveText("@normal");
                            $("#maximized_normal").attr("class", "control control-max maxinum rounded black");
                            normal_max = false;
                        }else{
                            core.receiveText("@maximized");
                            $("#maximized_normal").attr("class", "control control-max normal rounded black");
                            normal_max = true;
                        }
                        
                    });

                    core.sendText.connect(function(message) {
                        //output("Received message: " + message);
                        core.receiveText("reday");
                    });

                });
            }
        }
        //END SETUP
    </script>
</head>
<body>
    <div id="window_title" class="top">
        <div class="fleft w200">
        <a href="#" style="margin-left: 20px">
            <img width="50px" height="50px" src="./public/images/logo.png" style="-webkit-filter: grayscale();" />
        </a>
        </div>
        <div class="top-content fleft">
        <!-- 搜索框 -->
            <form style="width:300px;margin-left:30px;padding-top:10px">
                <div class="typeahead__container">
                    <div class="typeahead__field">
                        <span class="typeahead__query">
                            <input class="js-typeahead"
                                   name="q"
                                   type="search"
                                   autocomplete="off">
                        </span>
                        <span class="typeahead__button">
                            <button type="submit">
                                <span class="typeahead__search-icon"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        <!-- 搜索框 End -->
        </div>
        <div class="fleft w200">
            <a id="close" href="javascript:;" class="control control-close close rounded black"></a>
            <a id="maximized_normal" href="javascript:;" class="control control-max maxinum rounded black"></a>
            <a id="minimized" href="javascript:;" class="control control-min mininum rounded black"></a>
            <!--a id="normal" href="javascript:;" class="control control-max normal rounded black"></a-->
        </div>
    </div>
    <div class="cont">
        <div class="left-menu">menu</div>
        <div class="content">content</div>
    </div>
    
    <div class="foot">123</div>
</body>
<script>
//http://www.runningcoder.org/jquerytypeahead/documentation/
$.typeahead({
    input: ".js-typeahead",
    order: "asc",
    source: {
        user: {
            // Ajax Request
            ajax: function (query){
                return {
                type: 'POST',
                url: "http://127.0.0.1/webmusic/server.php/search/",
                data: {q:query}
                }
            }
        }
    },
    dynamic: true,
    delay: 300,
    minLength: 1,
});
</script>
</html>
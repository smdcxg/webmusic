<!doctype html>
<html lang="zh">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>UhUh'OO</title>
    <link rel="stylesheet" type="text/css" href="/public/css/main.css" media="screen" />
    
    <link rel="stylesheet" href="/public/css/accordion-style.css" media="screen" type="text/css" />
    <link href="/public/css/font-awesome.min.css" rel="stylesheet">
    <!-- Optional CSS -->
    <link rel="stylesheet" href="./public/css/jquery.typeahead.min.css">
 
    <!-- Required JavaScript -->
    <script src="/public/js/jquery-3.2.1.min.js"></script>
    <script src="./public/js/jquery.typeahead.min.js"></script>
    <script type="text/javascript" src="/public/js/qwebchannel.js"></script>
    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="/public/bootstrap/css/bootstrap.min.css">

    <!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
    <link rel="stylesheet" href="/public/bootstrap/css/bootstrap-theme.min.css">

    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="/public/bootstrap/js/bootstrap.min.js"></script>
    <script src="/public/js/main.js" type="text/javascript"></script>
    <script src="/public/js/accordion.js" type="text/javascript"></script>

    <script src="/public/js/APlayer.min.js"></script>
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
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
                        console.log(e);
                        core.receiveCmd("dragStart");
                    });

                    core.sendText.connect(function(message) {
                        //output("Received message: " + message);
                        /*$.ajax({
                            url: "http://127.0.0.1/webmusic/server.php/search/",
                            type: "post",
                            data: {q:message},
                            dataType: "json",
                            success: function (data){
                                //console.log(data);
                                if(data.code == 200){
                                    var result = data.result;
                                    var html = "";
                                    $("#search_menu").html("");
                                    $.each(result.order, function (){
                                        html += '<li class="dropdown-header"><span class="glyphicon glyphicon-music" aria-hidden="true"></span> '+this+'</li>';
                                        $.each(result[this], function (){
                                            var artist_name = "";
                                            if(this.artists != undefined){
                                                artist_name = "-"+this.artists[0].name;
                                            }
                                            
                                            html += '<li><a href="#">'+this.name+artist_name+'</a></li>';
                                        });
                                    });
                                    $("#search_win").attr("class", "dropdown open");
                                    $("#search_menu").html(html);
                                }
                            }
                        });*/
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
        <div style="width: 300px;padding-left:30px">
            <form style="width:300px;padding-top:15px">
                <div class="search__container">
                    <div class="typeahead__field">
                        <span class="typeahead__query">
                            <input class="js-typeahead"
                                   name="q"
                                   type="search"
                                   autocomplete="off">
                        </span>
                        <span class="typeahead__button">
                            <button type="submit" style="border:none">
                                <span class="typeahead__search-icon"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </form>
            <div style="color: #fff; text-align:center;font-size: 18px;line-height: 7px;">/</div>
            <div class="dropdown" id="search_win" style="left:0px;top:0px;">
                <ul class="dropdown-menu" id="search_menu" aria-labelledby="dropdownMenu1" style="border-top:0px;width: 250px">
                    <!--li class="dropdown-header"><span class="glyphicon glyphicon-music" aria-hidden="true"></span> 单曲</li>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li-->
                </ul>
            </div>
        </div>
        <!-- 搜索框 End -->
        </div>
        <div class="fleft w200">
            <a id="close" href="javascript:;" class="control control-close close rounded black"></a>
            <a id="maximized_normal" href="javascript:;" class="control control-max maxinum rounded black"></a>
            <a id="minimized" href="javascript:;" class="control control-min mininum rounded black"></a>
            <!--a id="normal" href="javascript:;" class="control control-max normal rounded black"></a-->
        </div>
    </div>
    <div class="cont" style="top:50px;bottom:68px">
        <div class="left-menu">
            
            <!-- Contenedor -->
            <ul id="accordion" class="accordion">
                <li class="open">
                    <div class="link"><i class="netease-logo netease-bg"></i>网易云音乐<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu" style="display: block;">
                        <li data-href="/discover"><span class="cus"></span><i class="fa fa-music" style="color: #595959;"></i><a href="javascript:;">发现音乐</a></li>
                        <li><span class="cus"></span><i class="fa fa-music" style="color: #595959;"></i><a href="javascript:;">HTML</a></li>
                        <li><a href="javascript:;"><span class="cus"></span><i class="fa fa-music" style="color: #595959;"></i>CSS</a></li>
                        <li><a href="javascript:;"><span class="cus"></span><i class="fa fa-music" style="color: #595959;"></i>Maquetacion web</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="fa fa-code"></i>酷狗音乐<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                        <li><a href="javascript:;">Javascript</a></li>
                        <li><a href="javascript:;">jQuery</a></li>
                        <li><a href="javascript:;">Frameworks javascript</a></li>
                    </ul>
                </li>
                <li>
                    <div class="link"><i class="fa fa-mobile"></i>酷我音乐盒<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                        <li><a href="javascript:;">Tablets</a></li>
                        <li><a href="javascript:;">Dispositivos mobiles</a></li>
                        <li><a href="javascript:;">Medios de escritorio</a></li>
                        <li><a href="javascript:;">Otros dispositivos</a></li>
                    </ul>
                </li>
                <li><div class="link"><i class="fa fa-globe"></i>Posicionamiento web<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                        <li><a href="javascript:;">Google</a></li>
                        <li><a href="javascript:;">Bing</a></li>
                        <li><a href="javascript:;">Yahoo</a></li>
                        <li><a href="javascript:;">Otros buscadores</a></li>
                    </ul>
                </li>
            </ul>
            <!--script type="text/javascript" src="./public/js/audio-player.js"></script>
            <script type="text/javascript">  
            AudioPlayer.setup("http://127.0.0.1/webmusic/public/player.swf", {  
                width: 290  
            });  
            </script>  
            <p id="audioplayer_1">Alternative content</p>  
            <script type="text/javascript">  
            AudioPlayer.embed("audioplayer_1", {soundFile: "./public/mp3/test.mp3"});  
            </script>  
    
            <p id="audioplayer_2">Alternative content</p>  
            <script type="text/javascript">  
            AudioPlayer.embed("audioplayer_2", {soundFile: "./public/mp3/test.mp3"});  
            </script>  
            <object height="100" width="100" data="./public/mp3/test.mp3"></object-->
        </div>
        <div id="content" class="content">content</div>
    </div>
    
    <div class="foot" style="height:68px;background-color: #f3f3f3">
        <div id="aplayer1" class="aplayer" style="margin:0px"></div>
    </div>
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
                    url: "/search/",
                    data: {q:query},
                    success: searchList,
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
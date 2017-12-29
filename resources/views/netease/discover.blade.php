<html>
    <head>
        <style>
            .discover {
                margin: 0px auto;
                width: 100%;
                max-width: 1000px;
                min-width: 730px;
                padding: 20px;
            }
            .discover li{
                float: left;
                width: calc(20% - 20px);
                max-width:180px;
                margin: 0px 10px 20px 10px;
                list-style-type:none;
            }
            .discover img {
                width: 100%;
                border: 1px solid #c9c9c9;
                max-width:180px;
            }
            .playhover{
                
            }
            .playhover:hover a.play{
                display: block;
            }
            .discover .play {
                position: relative;
                top: -5px;
                margin-top:-32px;
                left: calc(100% - 37px);
                border-radius:16px;
                display: none;
                z-index: 100;
            }
            .discover .play:hover {
                background-color: rgba(0, 0, 0, 0.5);
            }
            .discover .introduce {
                /*position: relative;
                top: -27px;
                float: left;*/
                margin-top: 5px;
                display: block;
                height: 38px;
                overflow:hidden;
                text-decoration: none;
                color: #333;
                font-size: 13px;
            }
            #g_nav2 {
                height: 45px;
                text-align: center;
                margin: 0px 20px 0px 20px;
                border-bottom: 1px solid #e6e6e6;
            }
            .discover-nav {
                margin: 0px auto;
                width: 200px;
            }
            .discover-nav li{
                float: left;
                width: 60px;
                line-height: 45px;
            }
            .discover-nav li a{
                text-decoration: none;
                color: #333;
            }
            .discover-nav li.action{
                border-bottom: 2px solid #333;
                line-height: 43px;
            }
        </style>
    </head>
    <body>
    <div id="g_nav2">
        <ul class="discover-nav">
            <li><a href="#">推荐</a></li>
            <li><a href="#">排行榜</a></li>
            <li class="action"><a href="/discover/playlist">歌单</a></li>
        </ul>
    </div>
    <div class="discover">
        <ul>
        @foreach ($data as $k=>$one)
            <li>
                <div class="playhover">
                    <a href="/playlist?id={{$one[3]}}"><img src="{{$one[0]}}" /></a>
                    <a href="javascript:;" class="netease-play netease-bg play"></a>
                </div>
                <a href="/playlist?id={{$one[3]}}" class="introduce">{{$one[1]}}</a>
            </li>
        @endforeach
        </ul>
    </div>
    </body>
    <script>
    $('#content a').click(function(e){
        var href = $(e.currentTarget).attr("href");
        urlLoad(href);
        return false;
    });
    </script>
</html>
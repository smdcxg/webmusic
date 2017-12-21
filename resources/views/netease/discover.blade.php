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
                z-index: 10;
            }
            .playhover:hover .play{
                display: block;
            }
            .discover .play {
                position: relative;
                top: -80px;
                left: calc(100% - 37px);
                border-radius:16px;
                display: none;
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
        </style>
    </head>
    <body>
        <div class="discover">
            <ul>
            @foreach ($data as $k=>$one)
                <li>
                    <a href="javascript:;" class="playhover">
                        <img src="{{$one[0]}}" />
                        <a href="javascript:;" class="netease-play netease-bg play"></a>
                    </a>
                    <a href="javascript:;" class="introduce">{{$one[1]}}</a>
                    
                </li>
            @endforeach
            </ul>
        </div>
    </body>
</html>
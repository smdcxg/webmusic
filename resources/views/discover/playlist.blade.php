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
                width: 100%;
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
                
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                text-decoration: none;
                color: #333;
                font-size: 13px;
            }
        </style>
    </head>
    <body>
	@include('discover.nav')
    <div class="discover">
        <ul>
        @foreach ($data['playlists'] as $k=>$one)
            <li>
                <div class="playhover">
                    <a href="/playlist?id={{$one['id']}}"><img src="{{$one['coverImgUrl']}}?param=140y140" /></a>
                    <a href="javascript:;" class="netease-play netease-bg play"></a>
                </div>
                <a href="/playlist?id={{$one['id']}}" title="{{$one['description']}}" class="introduce">{{$one['description']}}</a>
            </li>
        @endforeach
        </ul>
    </div>
    <div style="width:100%;text-align: center;">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
    </div>
    </body>
</html>
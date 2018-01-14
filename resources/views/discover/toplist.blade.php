<html>
    <head>
	<style>
		.toplist {
			margin: 0px auto;
			width: 100%;
			max-width: 1310px;
            min-width: 1010px;
			padding: 30px;
		}
		.toplist-soarings {
			
		}
		.toplist-box {
			float: left;
			width: 100%;
			min-width: 200px;
			max-width: 300px;
			height: 350px;
			overflow: hidden;
			border: 1px solid #e3e3e3;
			margin-left: 10px;
			margin-top: 10px;
		}
		.tb-title {
			width: 100%;
			height: 70px;
			font-size: 16px;
			line-height: 70px;
			padding-left: 5px;
			background-color: #eee;
		}
		.tb-list {
			padding: 10px;
		}
		.tb-list li{
			
		}
		.tb-list li:hover div{
			background-color: #e3e3e3;
		}
		.tb-list li .album{
			width: 70%;
			float: left;
			overflow: hidden;  
			white-space: nowrap;  
			text-overflow: ellipsis;  
		}
		.tb-list li .artists{
			width: 30%;
			float: left;
			overflow: hidden;  
			white-space: nowrap;  
			text-overflow: ellipsis;  
		}
	</style>
    </head>
    <body>
    @include('discover.nav')
	<div class="toplist">
		<div style="width:100%;padding-bottom:5px;border-bottom:1px solid #e6e6e6;font-size:18px">官方榜</div>
		@foreach($datas as $key=>$one)
		<div class="toplist-soarings">
			<div class="toplist-box" id="soaring">
				@foreach($one as $data)
				<div class="tb-title">{{$topIndexs[$key]}}</div>
				<ul class="tb-list">
					@foreach ($data['playlist']['tracks'] as $k=>$one)
					<li data-res-id="{{$one['id']}}" data-res-alname="{{$one['al']['name']}}" data-res-name="{{$one['name']}}" data-res-pic="{{$one['al']['picUrl']}}" data-res-arname="{{implode('/', array_column($one['ar'], 'name'))}}">
						<div class="album">{{$k + 1}}&nbsp;{{$one['name']}}</div>
						<div class="artists"><a href="javascript:;">{{implode('/', array_column($one['ar'], 'name'))}}</a></div>
					</li>
					@endforeach
				</ul>
				@endforeach
			</div>
		</div>
		@endforeach
	</div>
    </body>
	<script>
		$('#content .tb-list li').dblclick(function (e){
			var data = $(e.currentTarget).data();
			setAddMusic(data);
		});
	</script>
</html>
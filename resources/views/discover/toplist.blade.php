<html>
    <head>
	<style>
		.toplist-type {
			
		}
		.toplist {
			width: 100%;
			min-width: 250px;
			max-width: 350px;
		}
		.toplist-title {
			
		}
		.toplist-list {
			
		}
		.toplist-list li{
			
		}
		.toplist-list li:hover div{
			background-color: #e3e3e3;
		}
		.toplist-list li .album{
			width: 70%;
			float: left;
			overflow: hidden;  
			white-space: nowrap;  
			text-overflow: ellipsis;  
		}
		.toplist-list li .artists{
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
	<div class="toplist-type">
		<div style="width:100%;padding-top:20px;padding-bottom:5px;border-bottom:1px solid #e6e6e6;font-size:18px">官方榜</div>
		<div class="toplist">
			<div class="toplist-title">飙升榜</div>
			<ul class="toplist-list">
				@foreach ($data['playlist']['tracks'] as $k=>$one)
				<li data-res-id="{{$one['id']}}" data-res-alname="{{$one['al']['name']}}" data-res-name="{{$one['name']}}" data-res-pic="{{$one['al']['picUrl']}}" data-res-arname="{{implode('/', array_column($one['ar'], 'name'))}}">
					<div class="album">{{$k + 1}}&nbsp;{{$one['name']}}</div>
					<div class="artists"><a href="javascript:;">{{implode('/', array_column($one['ar'], 'name'))}}</a></div>
				</li>
				@endforeach
			</ul>
		</div>
	</div>
    </body>
	<script>
		$('#content .toplist-list li').dblclick(function (e){
			var data = $(e.currentTarget).data();
			setAddMusic(data);
		});
	</script>
</html>
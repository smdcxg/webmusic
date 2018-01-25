<html>
<head><title>创建的歌单</title></head>
<body>
<ul>
@foreach ($data['playlist'] as $k=>$one)
<li>{{$one['tags']['name']}}</li>
@endforeach
</ul>
</body>
</html>
<style>
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
	<div id="g_nav2">
        <ul class="discover-nav">
            <li class="action"><a href="/discover">推荐</a></li>
            <li><a href="/discover/toplist">排行榜</a></li>
            <li><a href="/discover/playlist">歌单</a></li>
        </ul>
    </div>
<script>
	var urlToNav = function (href){
        $("#g_nav2 li").removeClass("action");
        $('#g_nav2 li [href="'+href+'"]').parent().addClass('action');
    };
    urlToNav(decodeLoad());
	$('#content a').click(function(e){
        var href = $(e.currentTarget).attr("href");
        urlToNav(href);
        urlLoad(href);
        return false;
    });
</script>
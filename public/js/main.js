$(function() {
  /************* 加载url **************/
  window.urlLoad = function (href){
    var url = href;
    $('#content').load(url);
    history.pushState({url:url}, "", '#' + url);
  }
  $(window).on("popstate", function(event) {

    // 取得之前通过pushState保存的state object
    // jQuery对event做了一层包装，需要通过originalEvent取得原生event。
    var state = event.originalEvent.state;

    urlLoad(state.url);
  });
  $('#content a').click(function(e){
    var href = $(e.currentTarget).attr("href");
    urlLoad(href);
    return false;
  });
  window.decodeLoad = function (url){   // 解析链接
    if(!url){
		url = window.location.href;
	}
    var href = '/discover';
    var index = url.indexOf("#");
    if(index !== -1){
      href = url.substring(index + 1);
    }
	return href;
  }
  var href = decodeLoad();
  urlLoad(href);
  /*************END 加载url **************/
    
  /****** 播放音乐******/
  var ap = new APlayer({    
    element: document.getElementById('aplayer1'),
    music: {
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'http://music.163.com/song/media/outer/url?id=473571249.mp3',
    },
  });
  window.setAddMusic = function (data){
	var newMusic = [{
      title: data.resAlname,
      author: data.resArname,
      url: 'http://music.163.com/song/media/outer/url?id='+data.resId+'.mp3',
    }];
    ap.addMusic(newMusic);
    console.log(ap.playIndex);
    ap.setMusic(ap.playIndex + 1);
    ap.play();
  }
  
  ap.volume('0.5');  //设置音量
  $("body").on('click', '[data-res-action="play"]', function (e){
    var data = $(e.currentTarget).data();
	setAddMusic(data);
  });
  /******END 播放音乐******/
  
  /******* 生成搜索列表 *****/
  window.searchList = function(data){
    if(data.code == 200){
        var result = data.result;
        var html = "";
        $("#search_menu").html("");
        $.each(result.order, function (classIndex, className){
            html += '<li class="dropdown-header"><span class="glyphicon glyphicon-music" aria-hidden="true"></span> '+this+'</li>';
            $.each(result[className], function (){
                var artist_name = "";
                if(this.artists != undefined){
                    artist_name = "-"+this.artists[0].name;
                }
                if(className == 'songs'){
                  html += '<li><a href="javascript:;" data-res-id="'+this.id+'" data-res-action="play" data-res-alname="'+this.name+'" data-res-arname="'+artist_name+'" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">'+this.name+artist_name+'</a></li>';
                }else{
                  html += '<li><a href="javascript:;" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">'+this.name+artist_name+'</a></li>';
                }
            });
        });
        $("#search_win").attr("class", "dropdown open");
        $("#search_menu").show();
        $("#search_menu").html(html);
        $(document).one("click", function(){
          $("#search_menu").hide();
          //e.stopPropagation();
        });
    }
  }
  /*******END 生成搜索列表 *****/
});
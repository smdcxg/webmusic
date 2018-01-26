$(function() {
  window.setUrl = function (href){
    history.pushState({url:href}, "", '#' + href);
  }
  /************* 加载url **************/
  window.urlLoad = function (href){
    ld.open();
    var url = href;
    $('#content').load(url, null, function (){
      ld.close();
    });
    history.pushState({url:url}, "", '#' + url);
  }
  $(window).on("popstate", function(event) {

    // 取得之前通过pushState保存的state object
    // jQuery对event做了一层包装，需要通过originalEvent取得原生event。
    console.log(history.state);
    var state = event.originalEvent.state;

    $('#content').load(state.url);
    history.pushState({url:state.url}, "");
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
  };
  var href = decodeLoad();
  var navs = href.substring('1').split('/', 1);
  setTimeout('$(\'#accordion .submenu [data-href="/'+navs[0]+'"]\').eq(0).click()', 0);
  setUrl(href);
  /*************END 加载url **************/
    
  /****** 播放音乐******/
  var ap = new APlayer({    
    element: document.getElementById('aplayer1'),
    narrow: false,
    mutex: true,
    listmaxheight: '400px',
    theme: '#333',
    showlrc: 3,
    music: [{
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        id: '',
        pic: '',
        url: '',
        //url: 'http://music.163.com/song/media/outer/url?id=473571249.mp3',
      }
    ],
  });
  
  window.setAddMusic = function (data){
	var newMusic = [{
      title: data.resName,
      author: data.resArname,
      id: data.resId,
      pic: data.resPic+'?param=66y66',
      url: 'http://music.163.com/song/media/outer/url?id='+data.resId+'.mp3',
      lrc: '/lyric/'+data.resId+'.lrc',
    }];
     var repeat_index = 0;
     var index = ap.option.music.length;
    $.each(ap.option.music, function (index){
      if(this.id == data.resId){
        repeat_index = index;
        return false;
      }
    });
    if(repeat_index){
      index = repeat_index;
    }else{
      ap.addMusic(newMusic);
    }
    ap.setMusic(index);
    ap.play();
    window.ap = ap;
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
  
  /*********** loading ************/
  window.ld = new boxLoading({
    id: '#loading',
  });
  /*********** END loading ************/
});
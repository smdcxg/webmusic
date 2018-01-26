<html>
<head>
<style>
.private-fm {
    width: 100%;
    height: 100%;
    padding-left: 50px;
    padding-right: 50px;
}
.pf-l {
    float: left;
    width: 350px;
    height: 100%;
    padding-top: 70px;
}
.pf-r {
    float: left;
    width: calc(100% - 350px - 10px);
    height: calc(100% -10px);
    padding: 35px 0px 0px 30px;
}
.pf-title span{
    margin-left: 10px;
}
.pf-cover {
    width: 100%;
    height: 350px;
}
.pf-cover img{
    border: 1px solid #e2e2e2;
}
.pf-component {
    width: 350px;
    height: 60px;
    padding-top: 10px;
}
.pf-next-button {
    display: inline-block;
    background-color: #f7f7f7;
    border: 1px solid #e2e2e2;
    font-size: 20px;
    color: #888;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    outline: none;
    float: left;
    margin-left: 28px;
}
.pf-next-button:hover {
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 3px 3px 0 rgba(0,0,0,0.09);
}
.pf-next-button:active {
    color: #444;
    width: 48px;
    height: 48px;
    font-size: 18px;
    margin-left: 29px;
    margin-top: 1px;
    margin-bottom: 1px;
    margin-right: 1px;
}
</style>
</head>
<body>
<div class="private-fm">
    <div class="pf-l">
    <div class="pf-cover" id="pf_cover"><img src="" /></div>
    <div class="pf-component">
        <button class="pf-next-button" id=""><i class="fa fa-trash-o"></i></button>
        <button class="pf-next-button" id=""><i style="color: rgb(197, 1, 1)" class="fa fa-heart"></i></button>
        <button class="pf-next-button" id=""><i class="fa fa-heart-o"></i></button>
        <button class="pf-next-button" id="pf_next">></button>
    </div>
    </div>
    <div class="pf-r">
        <div class="pf-title">
            <span id="pf_music_name" style="font-size: 28px;display: block; width: 100%;"></span>
            <span id="pf_music_artists"></span>
            <span id="pf_music_album"></span>
            <!--span id="pf_music_name"></span-->
        </div>
        <div class="pf-lrc" id="pf_music_lrc"></div>
    </div>
</div>
</body>
<script>
var fm = {};
fm.list = [];
fm.index = 0;
fm.next = function (){
    if(fm.list[fm.index]){
        $('#pf_cover img').attr('src', fm.list[fm.index].album.blurPicUrl+'?param=350y350');
        $('#pf_music_name').html(fm.list[fm.index].name);
        $('#pf_music_artists').html('歌手：'+fm.list[fm.index].artists[0].name);
        $('#pf_music_album').html('专辑：'+fm.list[fm.index].album.name);
        setAddMusic({resName:fm.list[fm.index].name, resArname:fm.list[fm.index].artists[0].name, resId:fm.list[fm.index].id, resPic: fm.list[fm.index].album.blurPicUrl});
        fm.index++;
    }else{
        fm.load();
    }
    window.fm = fm;
};
fm.load = function (){
    $.ajax({
        url: './private_fm',
        type: 'POST',
        dataType: 'JSON',
        success: function (data){
            if(data.code == 200){
                fm.list = fm.list.concat(data.data);
                fm.next();
            }else{
                alert(data.code);
            }
        }
    });
};
fm.start = function (){
  //fm.next();
  $('#pf_next').on('click', fm.next);
};
fm.start();
window.fm = fm;
</script>
</html>
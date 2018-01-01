<html>
<head>
</head>
<body>
<table class="table">
  <thead>
    <tr>
      <th>曲歌标题</th>
      <th>时长</th>
      <th>歌手</th>
      <th>专辑</th>
    </tr>
  </thead>
  <tbody id="table_con">
  </tbody>
</table>
</body>
<script src="http://127.0.0.1/webmusic/public/js/jquery-3.2.1.min.js"></script>
<script>
var playlist = {!!$data!!};
function MillisecondToDate(msd) {  
    var time = parseFloat(msd) /1000;  
    if (null!= time &&""!= time) {  
        if (time >60&& time <60*60) {  
            time = parseInt(time /60.0) +"分钟"+ parseInt((parseFloat(time /60.0) -  
            parseInt(time /60.0)) *60) +"秒";  
        }else if (time >=60*60&& time <60*60*24) {  
            time = parseInt(time /3600.0) +"小时"+ parseInt((parseFloat(time /3600.0) -  
            parseInt(time /3600.0)) *60) +"分钟"+  
            parseInt((parseFloat((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60) -  
            parseInt((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60)) *60) +"秒";
        }else {
            time = parseInt(time) +"秒";
        }  
    }else{  
        time = "0 时 0 分0 秒";
    }  
    return time;
}
table_html = '';
$.each(playlist, function (){
    table_html += '<tr>';
    table_html += '<td><span data-res-id="'+this.pv.id+'" data-res-action="play" data-res-alname="'+this.al.name+'" data-res-arname="'+this.ar[0].name+'" href="javascript:;" class="netease-play netease-bg"></span></td>';
    table_html += '<td>' + this.al.name + '</td>';
    table_html += '<td>' + MillisecondToDate(this.dt) + '</td>';
    table_html += '<td>' + this.ar[0].name + '</td>';
    table_html += '<td>' + this.name + '</td>';
    table_html += '</tr>';
});
$('#table_con').html(table_html);
</script>
</html>
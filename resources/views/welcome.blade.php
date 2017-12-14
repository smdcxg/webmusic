<!doctype html>
<html lang="zh">
<head>
    <meta charset="utf-8" />
    <title>UhUh'OO</title>
    <link rel="stylesheet" type="text/css" href="./public/css/main.css" media="screen" />
    <!-- Optional CSS -->
    <link rel="stylesheet" href="./public/css/jquery.typeahead.min.css">
 
    <!-- Required JavaScript -->
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="./public/js/jquery.typeahead.min.js"></script>
</head>
<body>
    <div class="top">
        <div class="fleft w200">
        <a href="#" style="margin-left: 20px">
            <img width="50px" height="50px" src="./public/images/logo.png" style="-webkit-filter: grayscale();" />
        </a>
        </div>
        <div class="top-content fleft">
        <!-- 搜索框 -->
            <form style="width:300px;margin-left:30px;padding-top:10px">
                <div class="typeahead__container">
                    <div class="typeahead__field">
                        <span class="typeahead__query">
                            <input class="js-typeahead"
                                   name="q"
                                   type="search"
                                   autocomplete="off">
                        </span>
                        <span class="typeahead__button">
                            <button type="submit">
                                <span class="typeahead__search-icon"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </form>
        <!-- 搜索框 End -->
        </div>
        <div class="fleft w200">
            <a href="javascript:;" class="control control-close close rounded black"></a>
            <a href="javascript:;" class="control control-max maxinum rounded black"></a>
            <a href="javascript:;" class="control control-min mininum rounded black"></a>
        </div>
    </div>
    <div class="cont">
        <div class="left-menu">menu</div>
        <div class="content">content</div>
    </div>
    
    <div class="foot">123</div>
</body>
<script>
//http://www.runningcoder.org/jquerytypeahead/documentation/
$.typeahead({
    input: ".js-typeahead",
    order: "asc",
    source: {
        user: {
            // Ajax Request
            ajax: function (query){
                return {
                type: 'POST',
                url: "http://127.0.0.1/music/server.php",
                data: {q:query}
                }
            }
        }
    },
    dynamic: true,
    delay: 300,
    minLength: 1,
});
</script>
</html>
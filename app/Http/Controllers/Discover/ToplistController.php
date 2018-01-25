<?php

namespace App\Http\Controllers\Discover;

use \Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\Controller;

class ToplistController extends Controller
{
    public function index(Request $request){
		/************  网易云排行榜  ***********/
		$topIndexs = [
			"云音乐新歌榜",
			"云音乐热歌榜",
			"网易原创歌曲榜",
			"云音乐飙升榜",
			"云音乐电音榜",
			"UK排行榜周榜",
			"美国Billboard周榜",
			"KTV嗨榜",
			"iTunes榜",
			"Hit FM Top榜",
			"日本Oricon周榜",
			"韩国Melon排行榜周榜",
			"韩国Mnet排行榜周榜",
			"韩国Melon原声周榜",
			"中国TOP排行榜(港台榜)",
			"中国TOP排行榜(内地榜)",
			"香港电台中文歌曲龙虎榜",
			"华语金曲榜",
			"中国嘻哈榜",
			"法国 NRJ EuroHot 30周榜",
			"台湾Hito排行榜",
			"Beatport全球电子舞曲榜",
			"云音乐ACG音乐榜",
			"云音乐嘻哈榜"
		];  
		/*************************************************/
		$indexs = [0, 1, 2, 3, 4];
		$ret = [];
        $cache = Cache::store('redis');
		foreach($indexs as $index){
			$key = 'discoverToplist_'.$index;
			$minute = 60;
			$redisData = $cache->get($key);
			if($redisData){
				$ret[$index] = json_decode(gzuncompress($redisData), true);
			}else{
				$ret[$index] = \Php_Ppython::ppython("netease::discover_toplist",$index);
				$cache->put($key, gzcompress(json_encode($ret[$index]), 6), $minute);
			}
		}
		
        
        return view("discover.toplist", ['datas'=>$ret, 'topIndexs'=>$topIndexs]);
    }
}

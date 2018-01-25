<?php

namespace App\Http\Controllers\Discover;

use \Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlaylistController extends Controller
{
    public function index(Request $request){
        $key = 'discoverPlaylist';
        $minute = 60;
        $cache = Cache::store('redis');
        
        if($cache->has($key)){
            $ret = json_decode(gzuncompress($cache->get($key)), true);
            /*echo json_encode($ret);
            exit();*/
        }else{
            $ret = \Php_Ppython::ppython("netease::discover_playlist");
            $cache->put($key, gzcompress(json_encode($ret), 6), $minute);
        }
        return view("discover.playlist", ["data"=>$ret]);
    }
}

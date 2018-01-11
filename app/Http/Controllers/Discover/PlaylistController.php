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
            $ret = $cache->get($key);
        }else{
            $ret = \Php_Ppython::ppython("netease::get_discover", 0);
            $cache->put($key, $ret, $minute);
        }
        return view("discover.playlist", ["data"=>$ret]);
    }
}

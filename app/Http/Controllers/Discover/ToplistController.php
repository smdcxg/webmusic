<?php

namespace App\Http\Controllers\Discover;

use \Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\Controller;

class ToplistController extends Controller
{
    public function index(Request $request){
        $key = 'discoverToplist';
        $minute = 60;
        $cache = Cache::store('redis');
        if($cache->has($key)){
            $ret = $cache->get($key);
        }else{
            $ret = \Php_Ppython::ppython("netease::get_discover", 1);
            $cache->put($key, $ret, $minute);
        }
        
        return view("discover.toplist", ['data'=>$ret]);
    }
}

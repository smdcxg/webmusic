<?php

namespace App\Http\Controllers;

use \Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlaylistController extends Controller
{
    public function index(Request $request){
        $id = $request->get('id');
        $key = 'playlist_'.$id;
        $cache = Cache::store('redis');
        if($cache->has($key)){
            $ret = $cache->get($key);
        }else{
            $ret = \Php_Ppython::ppython('netease::get_playlist', $id);
            $cache->put($key, $ret, 60);
        }
        return view('playlist', ['data'=>$ret]);
    }
}

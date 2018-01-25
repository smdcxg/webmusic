<?php

namespace App\Http\Controllers;

use \Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserPlaylistController extends Controller
{
    public function index(Request $request){

        $key = 'userPlaylist';
        $minute = 60;
        $cache = Cache::store('redis');
        $redisData = $cache->get($key);
        if($redisData){
            $ret = json_decode(gzuncompress($redisData), true);
        }else{
            $ret = \Php_Ppython::ppython("netease::user_playlist", $request->session()->get('uid'));
            if($ret['code'] === 200){
                $cache->put($key, gzcompress(json_encode($ret), 6), $minute);
            }
        }
        return view('user_playlist', ['data'=>$ret]);
    }
    
}

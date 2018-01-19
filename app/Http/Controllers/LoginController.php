<?php

namespace App\Http\Controllers;

use \Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlaylistController extends Controller
{
    public function login(Request $request){
        $key = 'login';
        $minute = 60 * 24;
        $cache = Cache::store('redis');
        $redisData = $cache->get($key);
        if($redisData){
            $login_info = $redisData;
        }else{
            $login_info = Php_Ppython::ppython('netease::login', $request['phone'], $request['password'], $request['rememberLogin']);
            $cache->put($key, $login_info, $minute);
        }
        return $login_info;
    }
}

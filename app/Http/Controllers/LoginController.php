<?php

namespace App\Http\Controllers;

use \Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function login(Request $request){
		if(!$request->ajax()){
			exit();
		}
		$ajax_data = $request->all();
        $key = 'login';
        $minute = 60 * 24;
        $cache = Cache::store('redis');
        $redisData = $cache->get($key);
        if($redisData){
            $login_info = $redisData;
        }else{
            $login_info = \Php_Ppython::ppython('netease::login', $ajax_data['phone'], $ajax_data['password'], isset($ajax_data['rememberLogin'])?True:False);
            $cache->put($key, $login_info, $minute);
        }
        return $login_info;
    }
}

<?php

namespace App\Http\Controllers;

use \Cache;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function index(){
		$key = 'login';
        $cache = \Cache::store('redis');
        $login_info = $cache->get($key);
        return view('index')->with('login_info', json_encode($login_info));;
    }
}

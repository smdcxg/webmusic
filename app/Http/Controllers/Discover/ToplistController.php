<?php

namespace App\Http\Controllers\Discover;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use App\Http\Controllers\Controller;

class ToplistController extends Controller
{
    public function index(Request $request){
        return Redis::get('tar');
        $ret = \Php_Ppython::ppython("netease::get_discover", 1);
        return view("discover.toplist", ['data'=>$ret]);
    }
}

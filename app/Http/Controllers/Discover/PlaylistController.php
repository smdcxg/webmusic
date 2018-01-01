<?php

namespace App\Http\Controllers\Discover;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlaylistController extends Controller
{
    public function index(Request $request){
        $ret = \Php_Ppython::ppython("netease::get_discover", 0);
        return view("discover.playlist", ["data"=>$ret]);
    }
}

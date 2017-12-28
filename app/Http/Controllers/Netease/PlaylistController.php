<?php

namespace App\Http\Controllers\Netease;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlaylistController extends Controller
{
    public function index(Request $request){
        $ret = \Php_Ppython::ppython("netease::get_playlist", $request->get("id"));
        return view("netease.playlist", ["data"=>$ret]);
    }
}

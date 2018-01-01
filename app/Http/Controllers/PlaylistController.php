<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PlaylistController extends Controller
{
    public function index(Request $request){
        $ret = \Php_Ppython::ppython("netease::get_playlist", $request->get("id"));
        return view("playlist", ["data"=>$ret]);
    }
}

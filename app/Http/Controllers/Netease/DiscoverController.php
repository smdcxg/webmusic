<?php

namespace App\Http\Controllers\Netease;

use App\Http\Controllers\Controller;

class DiscoverController extends Controller
{
    public function playlist(){
        $discover_data = \Php_Ppython::ppython("netease::get_discover", 0);
        //return $discover_data;
        return view("netease.discover", ["data"=>$discover_data]);
    }
}

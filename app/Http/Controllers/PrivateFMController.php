<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PrivateFMController extends Controller
{
    public function index(Request $request){
        $ret = \Php_Ppython::ppython("netease::private_fm", $request->get("id"));
        return json($ret);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PrivateFMController extends Controller
{
    public function index(Request $request){
        
        return view('private_fm');
    }
    
    public function get_privateFM(){
        $ret = \Php_Ppython::ppython("netease::get_privateFM");
        return $ret;
    }
}

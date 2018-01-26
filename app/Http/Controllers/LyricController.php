<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LyricController extends Controller
{
    public function index($sid){
        return \Php_Ppython::ppython("netease::lyric", $sid)['lrc']['lyric'];
    }
}

<?php

namespace App\Http\Controllers\Discover;

use App\Http\Controllers\Controller;

class DefaultController extends Controller
{
    public function playlist(){
        return view("discover.default");
    }
}

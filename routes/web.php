<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post("search", function (){
	$input = request()->all();
    return Php_Ppython::ppython("netease::search_suggest", $input["q"]);
});

Route::get("discover/playlist", "Netease\DiscoverController@playlist");

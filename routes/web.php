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

Route::get('/lyric/{sid}.lrc', 'LyricController@index');
Route::get('/', 'IndexController@index');
Route::post('search', function (){
	$input = request()->all();
    return Php_Ppython::ppython('netease::search_suggest', $input['q']);
});
Route::get('/playlist', 'PlaylistController@index');
Route::post('/login', 'LoginController@login');
Route::post('/user_playlist/{uid}', 'UserPlaylistController@index');
Route::get('/discover', 'Discover\DefaultController@playlist');
Route::get('/discover/playlist', 'Discover\PlaylistController@index');
Route::get('/discover/toplist', 'Discover\ToplistController@index');
Route::get('/private_fm', 'PrivateFMController@index');
Route::post('/private_fm', 'PrivateFMController@get_privateFM');


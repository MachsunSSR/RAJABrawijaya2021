<?php

Route::get('/raport', 'RaportController@index');
Route::post('/raport', 'RaportController@action');
Route::get('fb', 'RedirectController@facebook');
Route::get('yt', 'RedirectController@youtube');
Route::get('tw', 'RedirectController@twitter');
Route::get('ig', 'RedirectController@instagram');
Route::get('ln', 'RedirectController@line');
Route::get('tl', 'RedirectController@telegram');
Route::get('tt', 'RedirectController@tiktok');


Route::group(['prefix' => 'superteam', 'namespace' => 'Superteam', 'name' => 'superteam.'], function () {
    Route::get('login', 'AuthController@loginView');
    Route::post('login', 'AuthController@loginProcess');
    Route::get('logout', 'AuthController@logout');
    Route::group(['middleware' => 'auth:web'], function () {
        Route::get('/', function () {
            return view('pages/dashboard');
        });

        Route::resource('access', 'AccessManagementController')->except('show');
    });
});

// for react project
// all url will use this route if that url not registered to any route
Route::get('/apps/{any}', function() {
    return view('reactapp');
}) ->where('any', '.*');

Route::get('/{any}', function() {
    return view('react');
})->where('any', '^(?!api).*$');


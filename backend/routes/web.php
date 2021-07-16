<?php

Route::group(['prefix' => 'superteam', 'namespace' => 'Superteam', 'name' => 'superteam.'], function () {
    Route::get('login', 'AuthController@loginView');
    Route::post('login', 'AuthController@loginProcess');
    Route::get('logout', 'AuthController@logout');
    Route::middleware('auth:web', function () {
        Route::get('/', function () {
            return view('pages/dashboard');
        });
    });
});
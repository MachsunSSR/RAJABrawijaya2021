<?php
Route::get('raport', 'RaportController@index2');
Route::post('raport', 'RaportController@authPdf');

Route::get('ngeprint', 'RaportController@index2');
Route::post('ngeprint', 'RaportController@authPdf');

Route::get('phpinfo', function () {
    phpinfo();
})->name('phpmyinfo');

Route::get('urlinfo', function () {
    // $uri = urldecode(
    //     parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
    // );

    // phpinfo();
    // echo "The current Laravel version is" . app()->version();
    // echo URL::to('/')."<br>";
    echo app_path()."<br>";
    echo config_path()."<br>";
    // echo elixir('file')."<br>";
    echo base_path()."<br>";
    echo storage_path()."<br>";
    echo public_path()."<br>";
    // echo asset("file")."<br>";
    // echo $uri;
});

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
Route::get('/{any}', function() {
    return view('react');
})->where('any', '^(?!api).*$');

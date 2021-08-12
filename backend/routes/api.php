<?php

use Illuminate\Http\Request;

Route::post('login', 'API\AuthController@login');
Route::post('logout', 'API\AuthController@logout');

Route::post('isi_form', 'Mahasiswa@isi_form');
Route::get('dashboard', 'Mahasiswa@dashboard');

Route::post('presensi', 'Presensi@presensi');

Route::prefix('penugasan')->group(function () {
    Route::post('/kenali_brawijaya', 'Penugasan@kenali_brawijaya');
});

<?php

use Illuminate\Http\Request;

Route::post('login', 'API\AuthController@login');
Route::post('logout', 'API\AuthController@logout');

Route::post('isi_form', 'Mahasiswa@isi_form');
Route::get('edit', 'Mahasiswa@edit');
Route::post('update', 'Mahasiswa@update');
Route::get('dashboard', 'Mahasiswa@dashboard');
Route::post('pendataan', 'Mahasiswa@pendataan');
Route::post('peminatan', 'Mahasiswa@pendataan');

Route::post('presensi', 'Presensi@presensi');

Route::post('perizinan', 'Perizinan@perizinan');
Route::get('backend_keren/get_data_perizinan/{jenis}', 'Perizinan@getData');
Route::post('backend_keren/approval_perizinan', 'Perizinan@approvalPerizinan');

Route::prefix('penugasan')->group(function () {
    Route::post('/twibbon', 'Penugasan@twibbon');
    Route::post('/transformer', 'Penugasan@transformer');
    Route::post('/biskuit', 'Penugasan@biskuit');
    Route::post('/kenali_brawijaya', 'Penugasan@kenali_brawijaya');
    Route::post('/dharma_warta', 'Penugasan@dharma_warta');
    Route::post('/gaung_budaya', 'Penugasan@gaung_budaya');
    Route::post('/sayembara', 'Penugasan@sayembara');
    Route::post('/kenali_minat', 'Penugasan@kenali_minat');

    Route::post('/perbaiki', 'Penugasan@perbaiki');
});

Route::prefix('koreksi')->group(function () {
    Route::post('lihat_data', 'Koreksi@getPenugasan');
    Route::post('post_data', 'Koreksi@kasihNilai');
});

Route::post('ganti_pointer', 'Mahasiswa@ganti_pointer');
Route::delete('delete', 'Mahasiswa@delete');

Route::prefix('ukm')->group(function () {
    Route::post('getDetailSpecificUkm', 'Ukm@getDetailSpecificUkm');
    Route::get('getDetailAllUkm', 'Ukm@getDetailAllUkm');

    Route::post('createUkm', 'Ukm@createUkm');
    Route::post('deleteUkm', 'Ukm@deleteUkm');
});

Route::post('cek_nilai', 'RaportController@exportRaport');

<?php

Route::get('raport', function() {
	return redirect('https://rajabrawijaya.ub.ac.id/backend/index.php/raport');
});

// config jangan diubah !!
Route::group(['prefix' => 'development'], function () {
	Route::get('new', 'DevelopmentController@developmentMode');
	Route::get('clear', 'DevelopmentController@userMode');
});
Route::group(['prefix' => 'cache'], function () {
	Route::get('create', 'DevelopmentController@generateCache');
	Route::get('clear', 'DevelopmentController@clearCache');
});
// end config

Route::get('/benerin-presensi', 'DevelopmentController@yangGaPresensiUlang');
Route::post('loginv2', 'API\LoginController@loginNew');
Route::get('/cari_maba', 'DevelopmentController@mabaCantik');

// routes untuk development mode
Route::group(['middleware' => 'developmentMode'], function () {
	Route::get('/sso/login', 'AutentikasiController@loginSSO');
	Route::get('/sso/logout', 'AutentikasiController@logoutSSO');
	Route::get('/redis', 'DevelopmentController@getterRedis');
	//tes jwt
	Route::group(['prefix' => 'jwt'], function () {
		Route::get('login', 'API\LoginController@loginMaba');
		// Route::get('login-tes', 'Superteam\LoginController@loginMaba');
		Route::get('logout', 'API\LoginController@logout');
	});
	Route::get('/tes', 'OH\Pendataan\RekomendasiUKMController@tes');

	//perizinan
	Route::group(['prefix' => 'crisis-ceenter'], function () {
    });
	Route::get('/perizinan', 'PerizinanController@index');
	Route::post('/perizinan', 'PerizinanController@store');
	Route::get('/cek', 'PerizinanController@cekPerizinanTambah');

});


// Route::get('login', 'StaticPageController@login');
// Route::get('login', 'AutentikasiController@halamanLogin');
Route::group(['prefix' => 'ukm'], function () {
    Route::get('/', 'OH\UKMController@index');
    Route::get('/{slug}', 'OH\UKMController@detail');
});

// route perlu login

Route::get('/me', 'ProfileController@index');
Route::group(['middleware' => 'sudah_login'], function () {
	// Route::get('apps', 'StaticPageController@apps');

	Route::group(['middleware' => 'maba'], function () {
		Route::get('/presensi/comingsoon', 'OH\PresensiController@comingsoon');

		Route::group(['prefix' => 'rekomendasi'], function () {
			Route::get('/', 'RedirectController@tutupPendataan');
			// Route::get('/', 'OH\Pendataan\RekomendasiUKMController@index');
			// Route::post('/', 'OH\Pendataan\RekomendasiUKMController@store');
			// Route::get('data', 'OH\Pendataan\RekomendasiUKMController@showUKM');
		});

		Route::group(['prefix' => 'crisis-center'], function () {
			Route::get('/', 'CrisisCenterController@index');
			Route::get('/kehadiran', 'CrisisCenterController@kehadiran');
			Route::post('/kehadiran', 'CrisisCenterController@store');
			Route::get('/penugasan', 'CrisisCenterController@penugasan');
		});

		Route::group(['prefix' => 'pendataan'], function () {
			Route::get('/', 'RedirectController@tutupPendataan');
			// Route::get('/', 'OH\Pendataan\PendataanMinatController@index');
			// Route::post('/', 'OH\Pendataan\PendataanMinatController@store');
			// Route::post('/update', 'OH\Pendataan\PendataanMinatController@update');
		});

		//presensi
		Route::group(['prefix' => 'presensi'], function () {
			Route::get('/', 'OH\PresensiController@presensi');
			Route::post('/', 'OH\PresensiController@submit');
		});

	});
    //route panitia & ukm
    Route::group(['prefix' => 'superteam'], function () {
		Route::group(['prefix' => 'penilaian'], function () {
			Route::get('/', 'Superteam\PenilaianTugasController@index');
			Route::get('/detail/{nim}', 'Superteam\PenilaianTugasController@detailTugas');
			Route::post('kirim', 'Superteam\PenilaianTugasController@simpanJawaban');
		});
		
		Route::group(['prefix' => 'artikel'], function () {
			Route::get('/', 'Superteam\ArtikelController@index');
			Route::get('/tambah', 'Superteam\ArtikelController@tambah');
			Route::get('{id}/edit', 'Superteam\ArtikelController@edit');
			Route::get('{id}/hapus', 'Superteam\ArtikelController@hapus');
			Route::get('{id}/publish', 'Superteam\ArtikelController@publish');
			Route::get('{id}/draft', 'Superteam\ArtikelController@draft');
			Route::post('/tambah', 'Superteam\ArtikelController@aksiTambah');
			Route::post('/edit', 'Superteam\ArtikelController@aksiEdit');
			Route::post('/upload/photo', 'Superteam\ArtikelController@uploadPhoto');
		});
		Route::get('/', 'Superteam\AutentikasiController@index');
		Route::group(['prefix' => 'ukm'], function () {
			Route::group(['prefix' => 'pengurus'], function () {
				Route::get('/', 'Superteam\UKM\PengurusController@index');
						Route::post('/', 'Superteam\UKM\PengurusController@store');
						Route::get('add', 'Superteam\UKM\PengurusController@add');
						Route::get('edit/{id}', 'Superteam\UKM\PengurusController@edit');
						Route::post('update/{id}', 'Superteam\UKM\PengurusController@update');
						Route::get('delete/{id}', 'Superteam\UKM\PengurusController@destroy');
						Route::get('publish/{id}', 'Superteam\UKM\PengurusController@publish');
						Route::get('draft/{id}', 'Superteam\UKM\PengurusController@draft');
			});

			Route::group(['prefix' => 'profil'], function () {
				Route::get('/', 'Superteam\UKM\ProfilController@index');
				Route::post('/simpan', 'Superteam\UKM\ProfilController@store');
			});
			Route::group(['prefix' => 'galeri'], function () {
				Route::get('/', 'Superteam\UKM\GaleriController@index');
				Route::post('/simpan', 'Superteam\UKM\GaleriController@store');
				Route::get('/delete/{id}', 'Superteam\UKM\GaleriController@delete');
			});

			Route::group(['prefix' => 'faq'], function () {
				Route::get('/', 'Superteam\UKM\FAQController@index');
				Route::post('/', 'Superteam\UKM\FAQController@store');
				Route::get('edit/{id}', 'Superteam\UKM\FAQController@edit');
				Route::post('update/{id}', 'Superteam\UKM\FAQController@update');
				Route::get('delete/{id}', 'Superteam\UKM\FAQController@destroy');
				Route::get('display', 'Superteam\UKM\FAQController@display');
			});

			Route::group(['prefix' => 'prestasi'], function () {
				Route::get('/', 'Superteam\UKM\PrestasiController@index');
				Route::post('/', 'Superteam\UKM\PrestasiController@store');
				Route::get('edit/{id}', 'Superteam\UKM\PrestasiController@edit');
				Route::post('update/{id}', 'Superteam\UKM\PrestasiController@update');
				Route::get('delete/{id}', 'Superteam\UKM\PrestasiController@destroy');
				Route::get('display', 'Superteam\UKM\PrestasiController@display');
			});

			Route::group(['prefix' => 'kegiatan'], function () {
				Route::get('/', 'Superteam\UKM\KegiatanController@index');
				Route::post('/simpan', 'Superteam\UKM\KegiatanController@store');
				Route::post('/update', 'Superteam\UKM\KegiatanController@update');
				Route::get('/edit/{id}', 'Superteam\UKM\KegiatanController@edit');
				Route::get('/delete/{id}', 'Superteam\UKM\KegiatanController@delete');
			});

			//route kriteria ukm
			Route::group(['prefix' => 'kriteria'], function () {
				Route::get('/', 'Superteam\UKM\KriteriaUKMController@index');
				Route::post('/', 'Superteam\UKM\KriteriaUKMController@store');
				Route::get('tambah', 'Superteam\UKM\KriteriaUKMController@tambah');
				Route::get('edit/{id}', 'Superteam\UKM\KriteriaUKMController@edit');
				Route::post('update/{id}', 'Superteam\UKM\KriteriaUKMController@update');
				Route::get('delete/{id}', 'Superteam\UKM\KriteriaUKMController@destroy');
				Route::get('display', 'Superteam\UKM\KriteriaUKMController@display');
			});

			//route pesan ukm
			Route::group(['prefix' => 'pesan'], function () {
				Route::get('/', 'Superteam\UKM\PesanController@index');
				Route::post('/', 'Superteam\UKM\PesanController@kirimPesan');
				Route::get('get-pesan', 'Superteam\UKM\PesanController@getPesan');
			});
			//route data minat ukm
			Route::group(['prefix' => 'data'], function () {
				Route::get('/', 'Superteam\UKM\MinatUKMController@index');
				// Route::get('/', 'Superteam\UKM\MinatUKMController@index');
				Route::get('get-pesan', 'Superteam\UKM\PesanController@getPesan');
				Route::get('agama', 'Superteam\UKM\MinatUKMController@getAgama');
			});
			
		});
        Route::get('kode', 'Superteam\AutentikasiPanitiaController@kode');
        Route::post('kode', 'Superteam\AutentikasiPanitiaController@masukkanKode');
        Route::get('cookies/hapus', 'Superteam\AutentikasiPanitiaController@hapusCookies');
        Route::group(['middleware' => 'panitia'], function () {
            Route::get('rabes', 'Superteam\RabesController@index');
            Route::get('rabes/countdown', 'Superteam\RabesController@countdown');
			Route::get('shorten', 'Superteam\ShortenController@index');
			
			

            Route::group(['middleware' => 'pit'], function () {
                Route::group(['prefix' => 'faq'], function () {
                    Route::get('/', 'Superteam\FAQController@index');
                    Route::post('/', 'Superteam\FAQController@store');
                    Route::get('add', 'Superteam\FAQController@add');
                    Route::get('edit/{id}', 'Superteam\FAQController@edit');
                    Route::post('update/{id}', 'Superteam\FAQController@update');
                    Route::get('delete/{id}', 'Superteam\FAQController@destroy');
                    Route::get('publish/{id}', 'Superteam\FAQController@publish');
                    Route::get('draft/{id}', 'Superteam\FAQController@draft');
                });

			});
            Route::group(['middleware' => 'kestari'], function () {
                Route::group(['prefix' => 'perizinan'], function () {
                    Route::get('/', 'Superteam\PerizinanController@index');
                    Route::post('terima/{id}', 'Superteam\PerizinanController@terima');
                    Route::post('tolak/{id}', 'Superteam\PerizinanController@tolak');
                    Route::get('cari', 'Superteam\PerizinanController@cari')->name('cari');
                });
            });
		});
		
	});
	
});



Route::get('/redis', 'DevelopmentController@getterRedis');
Route::get('/cek-sesi', 'DevelopmentController@getterDatabase');

Route::get('/penugasan{any}', 'PenugasanController@index')->where('any', '^(?!api).*$');

// sosmed
Route::get('fb', 'RedirectController@facebook');
Route::get('yt', 'RedirectController@youtube');
Route::get('tw', 'RedirectController@twitter');
Route::get('ig', 'RedirectController@instagram');
Route::get('ln', 'RedirectController@line');
Route::get('tl', 'RedirectController@telegram');
Route::get('tt', 'RedirectController@tiktok');
Route::get('upgrading', 'RedirectController@upgrade');
Route::get('upgrading/presensi/awal', 'RedirectController@presensiAwal');
Route::get('upgrading/presensi/akhir', 'RedirectController@presensiAkhir');
Route::get('pengumpulan-resume', 'RedirectController@pengumpulanResume');
Route::group(['prefix' => 'link'], function () {
	Route::get('vokasiprestasi2020', 'RedirectController@pengumumanVokasi');
	Route::get('PendataanAtributPanitia', 'RedirectController@PendataanAtributPanitia');
	Route::get('dafulsbmptnub2020', 'RedirectController@dafulsbtmptnub');
	Route::get('griya', 'RedirectController@griya');
	Route::get('teknik', 'RedirectController@teknik');
	Route::get('psld', 'RedirectController@psld');
	Route::get('ubkantin', 'RedirectController@ubkantin');
	Route::get('ikaub', 'RedirectController@ikaub');
	Route::get('sii', 'RedirectController@sii');
	Route::get('ubtv', 'RedirectController@ubtv');
	Route::get('ubpress', 'RedirectController@ubpress');
	Route::get('ubsc', 'RedirectController@ubsc');
	Route::get('blc', 'RedirectController@blc');
	Route::get('fk', 'RedirectController@fk');
	Route::get('fkg', 'RedirectController@fkg');
	Route::get('kpri', 'RedirectController@kpri');
	Route::get('teknopark', 'RedirectController@teknopark');
	Route::get('dika-dira-line', 'RedirectController@linebot');
	Route::get('dafulsmub2020', 'RedirectController@dafulmandiri');
	Route::get('dafulsmpd2020', 'RedirectController@dafulsmpd');
	Route::get('dafulsmpv2020', 'RedirectController@dafulsmpv');
	Route::get('streaming-simulasi-pkkmb', 'RedirectController@simulasi');
	Route::get('perizinan/simulasi', 'RedirectController@perizinanSimulasi');
	Route::get('perizinan/gladi-kotor', 'RedirectController@perizinanGladiKotor');
	Route::get('perizinan/gladi-bersih', 'RedirectController@perizinanGladiBersih');
	Route::get('aturan-PKKMB', 'RedirectController@pedomanPKKMB');
	Route::get('podcastrabraw', 'RedirectController@podcast');
	Route::get('throwbackPKKMB2020', 'RedirectController@throwbackPKKMB');
	Route::get('template-photo-contest', 'RedirectController@templatePhoto');
	Route::get('pengumpulan-photo-contest', 'RedirectController@pengumpulancontest');
	Route::get('upgrading/presensi/awal', 'RedirectController@presensiAwalUpgrading');
	Route::get('upgrading/presensi/akhir', 'RedirectController@presensiAkhirUpgrading');
	Route::get('PBPKxOH', 'RedirectController@pbpkoh');
});
// Route::get('/2020', 'StaticPageController@vue')->where('any', '^(?!backend).*$');
Route::get('/twibbon', 'StaticPageController@twibbon');
Route::get('/atribut', 'StaticPageController@attribut');
Route::get('cs2020', function() {
	return view('comingsoon');
});

Route::get('/2020/{any}', 'StaticPageController@vue')->where('any', '^(?!api).*$');
// routes untuk development mode

Route::get('/{any}', 'StaticPageController@comingsoon')->where('any', '^(?!backend).*$');
Route::group(['middleware' => 'developmentMode'], function () {
	Route::get('/sso/login', 'AutentikasiController@loginSSO');
	Route::get('/sso/logout', 'AutentikasiController@logoutSSO');
	Route::get('/redis', 'DevelopmentController@getterRedis');
	//tes jwt
	Route::group(['prefix' => 'jwt'], function () {
		Route::get('login', 'API\LoginController@loginMaba');
		// Route::get('login-tes', 'Superteam\LoginController@loginMaba');
		Route::get('logout', 'API\LoginController@logout');
	});
});



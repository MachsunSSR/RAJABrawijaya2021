<?php

namespace App\Http\Controllers\Superteam;

use App\Entity\Mahasiswa;
use App\Helpers\MahasiswaHelper;
use App\Helpers\SIAMHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function loginView() {
        if (auth()->guard('web')->check()) {
            return redirect('superteam');
        }

        return view('pages/login');
    }

    public function loginProcess(Request $request) {
        $nim = $request->input('nim');
        $password = $request->input('password');

        if (!$siamInformation = SIAMHelper::auth($nim, $password)) {
            return redirect('superteam/login')->with('failed_message', 'Akun anda tidak valid');
        }

        $databaseInformation = Mahasiswa::firstOrCreate(['nim' => $nim]);
        MahasiswaHelper::syncSiamWithDatabase($databaseInformation, $siamInformation);
        auth()->guard('web')->login($databaseInformation);

        return redirect('superteam')->with('success_message', 'Berhasil login kedalam sistem');
    }

    public function logout() {
        auth()->guard('web')->logout();

        return redirect('superteam/login')->with('success_message', 'Berhasil keluar dari sistem');
    }
}

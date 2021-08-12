<?php

namespace App\Http\Controllers\API;

use App\Entity\Mahasiswa;
use App\Helpers\MahasiswaHelper;
use App\Helpers\SIAMHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Entity\Mahasiswa as Mhs;

class AuthController extends Controller
{
    public function login(Request $request) {
        $nim = $request->input('nim');
        $password = $request->input('password');

        if (!$siamInformation = SIAMHelper::auth($nim, $password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'failed login, nim and password not valid',
                'errorCode' => 401
            ], 401);
        }

        if (!MahasiswaHelper::isMahasiswaBaru($nim) && !MahasiswaHelper::isWhitelistedUser($nim)) {
            return response()->json([
                'status' => 'error',
                'message' => 'access only for maba',
                'errorCode' => 403
            ], 403);
        }

        $databaseInformation = Mahasiswa::firstOrCreate(['nim' => $nim]);
        MahasiswaHelper::syncSiamWithDatabase($databaseInformation, $siamInformation);

        $token = auth()->tokenById($nim);

        return response()->json([
            'status' => 'success',
            'message' => 'login successfully',
            'data' => [
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60,
                'cluster' => Mhs::select('cluster')->where('nim', $nim)->first()["cluster"]
            ]
        ]);
    }
    public function logout(Request $request)
    {
        auth()->logout();
        return response()->json([
            'status' => 'success',
            'message' => 'logout successfully',
        ], 200);
    }
}

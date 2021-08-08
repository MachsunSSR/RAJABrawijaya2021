<?php

namespace App\Http\Controllers\API;

use App\Entity\Mahasiswa;
use App\Helpers\MahasiswaHelper;
use App\Helpers\SIAMHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request) {
        $nim = $request->input('nim');
        $password = $request->input('password');

        if (!$siamInformation = SIAMHelper::auth($nim, $password)) {
            return response()->json([
                'success' => false,
                'message' => 'failed login, nim and password not valid',
                'errorCode' => 401
            ], 401);
        }

        if (!MahasiswaHelper::isMahasiswaBaru($nim) && !MahasiswaHelper::isWhitelistedUser($nim)) {
            return response()->json([
                'success' => false,
                'message' => 'access only for maba',
                'errorCode' => 403
            ], 403);
        }

        $databaseInformation = Mahasiswa::firstOrCreate(['nim' => $nim]);
        MahasiswaHelper::syncSiamWithDatabase($databaseInformation, $siamInformation);

        $token = auth()->tokenById($nim);

        return response()->json([
            'success' => true,
            'message' => 'success login',
            'data' => [
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
            ]
        ]);
    }
}

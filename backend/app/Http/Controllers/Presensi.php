<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entity\PresensiMahasiswa;

class Presensi extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function presensi(Request $request)
    {
        PresensiMahasiswa::updateOrCreate(
            ['nim' =>  $request->user()->nim],
            [$request->rangkaian => true]
        );
        return response()->json([
            'status' => 'success',
            'message' => 'attendance is successful',
            'data' => [
                'nim' => $request->user()->nim,
                'rangkaian' => $request->rangkaian
            ]
        ], 200);
    }
}

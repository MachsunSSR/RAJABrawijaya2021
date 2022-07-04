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
        try {
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
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'attendance is error'
            ], 400);
        }

    }
}

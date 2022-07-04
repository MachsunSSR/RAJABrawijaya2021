<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entity\PerizinanMahasiswa;

class Perizinan extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('getData', 'approvalPerizinan');
    }

    public function perizinan(Request $request)
    {
        try {
            PerizinanMahasiswa::Create(
                [   'nim' =>  $request->user()->nim,
                    'rangkaian' => $request->rangkaian,
                    'alasan' => $request->alasan,
                    'link_lampiran' => $request->link,
                    'status' => 'pending'
                ]
            );

            return response()->json([
                'status' => 'success',
                'message' => 'permission to absent is successful',
                'data' => [
                    'nim' => $request->user()->nim,
                    'rangkaian' => $request->rangkaian,
                    'alasan' => $request->alasan,
                    'link_lampiran' => $request->link,
                    'status' => 'pending'
                ]
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'absent is error'
            ], 200);
        }
    }

    public function getData($jenis)
    {
        if($jenis == 'all') {
            return response()->json([
                'status' => 'success',
                'message' => 'all data has retrieved successfully',
                'data' => PerizinanMahasiswa::orderBy('status')->get()
            ], 400);
        } else {
            return response()->json([
                'status' => 'success',
                'message' => 'all data has retrieved successfully',
                'data' => [
                    'jenis' => $jenis,
                    'mahasiswa' => PerizinanMahasiswa::where('rangkaian', $jenis)->orderBy('status')->get()
                ]
            ], 400);
        }
    }

    public function approvalPerizinan(Request $request)
    {
        $data = [
            'status' => $request->status
        ];
        try {
            $mhs = PerizinanMahasiswa::where('nim', $request->nim)
            ->where('rangkaian', $request->rangkaian)->update($data);

            return response()->json([
                'status' => 'success',
                'message' => 'absen sudah diapproval'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th
            ], 400);
        }
    }
}

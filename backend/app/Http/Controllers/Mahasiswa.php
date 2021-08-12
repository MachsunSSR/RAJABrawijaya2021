<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entity\Mahasiswa as Mhs;
use App\Entity\Penugasan;
use App\Entity\Pointer;

class Mahasiswa extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function isi_form(Request $request)
    {
        try {
            $mhs = Mhs::where('nim', $request->user()->nim)->first();

            $select = Pointer::where('id', '1')->first();

            $temp_jumlah_mhs = $select->pointer_mahasiswa;
            $temp_kelompok = $select->pointer_kelompok;

            $in_mhs = strval($temp_jumlah_mhs + 1);
            $select->pointer_mahasiswa = $in_mhs;
            $select->save();

            if($temp_jumlah_mhs == 10) {
                $in_kel = strval($temp_kelompok + 1);
                $select->pointer_mahasiswa = '1';
                $select->pointer_kelompok = $in_kel;
                $select->save();
            }

            $mhs->cluster = $request->cluster;
            $mhs->kelompok = $temp_kelompok;
            $mhs->sosmed = $request->wa . '%' . $request->ig . '%' . $request->line;
            $mhs->save();

            return response()->json([
                'status' => 'success',
                'message' => 'data saved successfully',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'data not found',
            ], 404);
        }
    }

    public function dashboard(Request $request)
    {
        $maba = $request->user();
        $temans = Mhs::select('nama', 'fakultas', 'sosmed')
        ->where('kelompok', $maba->kelompok)
        ->where('nim', '!=', $maba->nim)->get();

        return response()->json([
            'status' => 'success',
            'message' => 'data has retrieved successfully',
            'data' => ([
                'nim' => $maba->nim,
                'nama' => $maba->nama,
                'fakultas' => $maba->fakultas,
                'jurusan' => $maba->jurusan,
                'prodi' => $maba->prodi,
                'jenjang' => $maba->jenjang,
                'foto' => $maba->foto,
                'cluster' => $maba->cluster,
                'kelompok' => $maba->kelompok,
                'sosmed' => $maba->sosmed,
                'teman_sekelompok' => $temans,
                // 'penugasan' => [
                //     'twibbon' => [
                //         'status' => $maba->penugasan->nama_kolom,
                //         'nilai' => $maba->penugasan->nama_kolom
                //     ],
                //     'pilgan' => [
                //         'status' => $maba->penugasan->nama_kolom,
                //         'nilai' => $maba->penugasan->nama_kolom
                //     ],
                //     'essay' => [
                //         'status' => $maba->penugasan->nama_kolom,
                //         'nilai' => $maba->penugasan->nama_kolom
                //     ],
                //     'vid1' => [
                //         'status' => $maba->penugasan->nama_kolom,
                //         'nilai' => $maba->penugasan->nama_kolom
                //     ],
                //     'vid2' => [
                //         'status' => $maba->penugasan->nama_kolom,
                //         'nilai' => $maba->penugasan->nama_kolom
                //     ],
                //     'vid3' => [
                //         'status' => $maba->penugasan->nama_kolom,
                //         'nilai' => $maba->penugasan->nama_kolom
                //     ]
                // ]
            ])
        ], 200);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Entity\Penugasan as Tugas;

class Koreksi extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('perbaiki', 'getPenugasan', 'kasihNilai');
    }

    public function getPenugasan(Request $request)
    {
        $kloter = $request->kloter;
        $kelAwal = ($kloter - 1) * 26 + 1;
        $kelAkhir = $kloter * 26;

        if ($request->status_koreksi == "0") {
            switch (strtolower($request->jenis_penugasan)) {
                // kelompok
                case 'transformer':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_transformer', '21_penugasan.nilai_transformer'
                        )
                        ->whereBetween('21_maba.kelompok', [$kelAwal, $kelAkhir])
                        ->where('21_penugasan.sk_transformer', NULL)
                        ->orderByRaw('CONVERT(21_maba.kelompok, SIGNED) asc')
                        ->get();
                    break;

                case 'biskuit':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_biskuit_poster', 'url_biskuit_igtv', '21_penugasan.nilai_biskuit'
                        )
                        ->whereBetween('21_maba.kelompok', [$kelAwal, $kelAkhir])
                        ->where('21_penugasan.sk_biskuit', NULL)
                        ->orderByRaw('CONVERT(21_maba.kelompok, SIGNED) asc')
                        ->get();
                    break;

                // individu
                case 'dharma_warta':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_dharma_warta', '21_penugasan.nilai_dharma_warta'
                        )
                        ->where('21_maba.cluster', $request->cluster)
                        ->where('21_penugasan.sk_dharma_warta', NULL)
                        ->get();
                    break;

                case 'gaung_budaya':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_gaung_budaya', '21_penugasan.nilai_gaung_budaya'
                        )
                        ->where('21_maba.cluster', $request->cluster)
                        ->where('21_penugasan.sk_gaung_budaya', NULL)
                        ->get();
                    break;

                case 'sayembara':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_sayembara'
                        )
                        ->whereNotNull('21_penugasan.url_sayembara')
                        ->get();
                    break;

                default:
                    return response()->json([
                        'status' => 'failed',
                        'message' => 'kata kunci salah!'
                    ]);
                    break;
            }
        } else if ($request->status_koreksi == "1") {
            switch (strtolower($request->jenis_penugasan)) {
                // kelompok
                case 'transformer':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_transformer', '21_penugasan.nilai_transformer'
                        )
                        ->whereBetween('21_maba.kelompok', [$kelAwal, $kelAkhir])
                        ->where('21_penugasan.sk_transformer', "1")
                        ->orderByRaw('CONVERT(21_maba.kelompok, SIGNED) asc')
                        ->get();
                    break;

                case 'biskuit':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_biskuit_poster', 'url_biskuit_igtv', '21_penugasan.nilai_biskuit'
                        )
                        ->whereBetween('21_maba.kelompok', [$kelAwal, $kelAkhir])
                        ->where('21_penugasan.sk_biskuit', "1")
                        ->orderByRaw('CONVERT(21_maba.kelompok, SIGNED) asc')
                        ->get();
                    break;

                // individu
                case 'dharma_warta':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_dharma_warta', '21_penugasan.nilai_dharma_warta'
                        )
                        ->where('21_maba.cluster', $request->cluster)
                        ->where('21_penugasan.sk_dharma_warta', "1")
                        ->get();
                    break;

                case 'gaung_budaya':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_gaung_budaya', '21_penugasan.nilai_gaung_budaya'
                        )
                        ->where('21_maba.cluster', $request->cluster)
                        ->where('21_penugasan.sk_gaung_budaya', "1")
                        ->get();
                    break;

                case 'sayembara':
                    $penugasan = DB::table('21_penugasan')
                        ->join('21_maba', '21_penugasan.nim', '=', '21_maba.nim')
                        ->select(
                            '21_maba.nim', '21_maba.nama', '21_maba.kelompok', '21_maba.cluster',
                            '21_penugasan.url_sayembara'
                        )
                        ->whereNotNull('21_penugasan.url_sayembara')
                        ->get();
                    break;

                default:
                    return response()->json([
                        'status' => 'failed',
                        'message' => 'kata kunci salah!'
                    ]);
                    break;
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'data has retrieved successfully',
            'data' => $penugasan
        ]);
    }

    public function kasihNilai(Request $request)
    {
        // nim & nilai tambah
        switch (strtolower($request->jenis_penugasan)) {
            // kelompok
            case 'transformer':
                $mahasiswa = Tugas::where('nim', $request->nim)->first();
                $mahasiswa->sk_transformer = '1';
                $mahasiswa->nilai_transformer = strval($mahasiswa->nilai_transformer + $request->nilai_tambah);
                $mahasiswa->save();
                break;

            case 'biskuit':
                $mahasiswa = Tugas::where('nim', $request->nim)->first();
                $mahasiswa->sk_biskuit = '1';
                $mahasiswa->nilai_biskuit  = strval($mahasiswa->nilai_biskuit + $request->nilai_tambah);
                $mahasiswa->save();
                break;

            // individu
            case 'dharma_warta':
                $mahasiswa = Tugas::where('nim', $request->nim)->first();
                $mahasiswa->sk_dharma_warta = '1';
                $mahasiswa->nilai_dharma_warta  = strval($mahasiswa->nilai_dharma_warta + $request->nilai_tambah);
                $mahasiswa->save();
                break;

            case 'gaung_budaya':
                $mahasiswa = Tugas::where('nim', $request->nim)->first();
                $mahasiswa->sk_gaung_budaya = '1';
                $mahasiswa->nilai_gaung_budaya  = strval($mahasiswa->nilai_gaung_budaya + $request->nilai_tambah);
                $mahasiswa->save();
                break;

            default:
                return response()->json([
                    'status' => 'failed',
                    'message' => 'kata kunci salah!'
                ]);
                break;
        }

        return response()->json([
            'status' => 'success',
            'message' => 'data saved successfully',
        ], 200);

    }

}

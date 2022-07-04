<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Entity\Penugasan as Tugas;
use App\Helpers\SIAMHelper;

class Penugasan extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('perbaiki', 'getPenugasan', 'kasihNilai');
    }

    public function twibbon(Request $request)  // ! FIX
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->url_twibbon = $request->url;

        if(SIAMHelper::validateInstagram($request->url) == 'true') {
            $penugasan_mhs->nilai_twibbon = '100';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully',
            ], 200);
        } else {
            $penugasan_mhs->nilai_twibbon = '60';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully - hastag kurang atau salah',
            ], 200);
        }
    }

    public function transformer(Request $request)  // ! FIX
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->url_transformer = $request->url;

        // kok ada extend extend ?
        if(SIAMHelper::validateInstagram($request->url) == 'true') {
            $penugasan_mhs->nilai_transformer = '60';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully',
            ], 200);
        } else {
            $penugasan_mhs->nilai_transformer = '55';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully - hastag kurang atau salah',
            ], 200);
        }
    }

    public function biskuit(Request $request) // * Ntar tambahi buat check ada nggak caption & pengurangan nilai jika terlambat mengumpulkan
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->url_biskuit_poster = $request->url_poster;
        $penugasan_mhs->url_biskuit_igtv = $request->url_video;

        // Kalo misal caption gaada gimana ? bikin function baru di helper.
        if(SIAMHelper::validateInstagram($request->url_poster)  == 'true' &&
                SIAMHelper::validateInstagram($request->url_video)  == 'true') {
            $penugasan_mhs->nilai_biskuit = '60';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully',
            ], 200);
        } else {
            $penugasan_mhs->nilai_biskuit = '56';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully - hastag kurang atau salah',
            ], 200);
        }
    }

    public function kenali_brawijaya(Request $request) // ! FIX
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->nilai_kenali = strval($request->nilai);
        $penugasan_mhs->save();

        return response()->json([
            'status' => 'success',
            'message' => 'data has sent successfully'
        ], 200);
    }

    public function dharma_warta(Request $request) // ! FIX
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->essay_dharma_warta = $request->essay;
        $penugasan_mhs->sumber_dharma_warta = $request->sumber;
        $penugasan_mhs->url_dharma_warta = $request->url;

        // $request->nilai_essay : 55 (fe)
        // $request->nilai_sumber : 15 (fe)
        // $requst->nilai_infografik : 20 (be)
        // manual : 10
        $nilai = $request->nilai_essay_sumber;

        if(SIAMHelper::validateInstagram($request->url) == 'true') {
            $penugasan_mhs->nilai_dharma_warta = strval($nilai + 20); // langsung yg dihitung cuma tagar
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully',
            ], 200);
        } else {
            $penugasan_mhs->nilai_dharma_warta = strval($nilai + 15); // langsung yg dihitung cuma tagar
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully - hastag kurang atau salah',
            ], 200);
        }
    }

    public function gaung_budaya(Request $request) // ! FIX
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->url_gaung_budaya = $request->url;

        if(SIAMHelper::validateInstagram($request->url) == 'true') {
            // unggah tepat waktu pie ?
            $penugasan_mhs->nilai_gaung_budaya = '70';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully',
            ], 200);
        } else {
            $penugasan_mhs->nilai_gaung_budaya = '65';
            $penugasan_mhs->save();

            return response()->json([
                'status'   => 'success',
                'message' => 'data has sent successfully - hastag kurang atau salah',
            ], 200);
        }
    }

    public function sayembara(Request $request) // ! FIX
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->url_sayembara = $request->url;

        $penugasan_mhs->save();

        return response()->json([
            'status'   => 'success',
            'message' => 'data has sent successfully',
        ], 200);
    }

    public function kenali_minat(Request $request) // ! FIX
    {
        $penugasan_mhs = Tugas::firstOrCreate(['nim' => $request->user()->nim]);

        $penugasan_mhs->nilai_minat = strval($request->nilai);
        $penugasan_mhs->save();

        return response()->json([
            'status' => 'success',
            'message' => 'data has sent successfully'
        ], 200);
    }

    public function perbaiki()
    {
        $all = Tugas::select('nim', 'url_twibbon')->where('nilai_twibbon', '60')->limit(20)->get();

        $berhasil = 0;
        $gagal = 0;
        $urlsama = 0;

        foreach ($all as $value) {
            foreach ($all as $value2) {
                if($value['url_twibbon'] != NULL && $value['url_twibbon'] == $value2['url_twibbon'] && $value['nim'] != $value2['nim']) {
                    echo $value['nim'] . "-" . $value2['nim'] . "           ";
                    // url yg akhir atau nilai dari $value2['nim'] otomatis di ganti apakah nanti akan di anggep sama juga di 5-1.
                    $urlsama++;
                }
            }

            $penugasan_mhs = Tugas::firstOrCreate(['nim' => $value['nim']]);

            if(SIAMHelper::validateInstagram($penugasan_mhs['url_twibbon']) == 'true') {
                $berhasil++;
                // $penugasan_mhs->nilai_twibbon = '100';
                // $penugasan_mhs->save();

            } else {
                $gagal++;
                // $penugasan_mhs->nilai_twibbon = '60';
                // $penugasan_mhs->save();
            }
        }
        $urlsama -= ($urlsama / 2); // mengatasi 1-5 dan 5-1 dihitung dua kali <== sementara
        echo 'sukses : ' . $berhasil . '; gagal : ' . $gagal . ' url_sama : ' . $urlsama;
        return;
        // function perbaiki dan function input nilai manual
    }
}

<?php

namespace App\Http\Controllers;

use \stdClass;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Entity\Ukm as U;
use App\Entity\UkmFaq;
use App\Entity\UkmGaleri;
use App\Entity\UkmKegiatan;
use App\Entity\UkmKriteria;
use App\Entity\UkmPrestasi;
use App\Entity\UkmSosmed;

class Ukm extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('getDetailAllUkm', 'getDetailSpecificUkm', 'createUkm', 'deleteUkm');
    }

    public function getDetailSpecificUkm(Request $request) // ? DONE
    {
        $data = U::where('slug', $request->slug)
        ->get()
        ->map(function ($ukm) {
            $ukm->kriteria = $ukm->kriteria->map(function ($kriteria) {
                return $kriteria->kriteria;
            });
            return $ukm;
        });

        return response()->json([
            'status' => 'success',
            'message' => 'data has retrieved successfully',
            'data' => $data

        ], 200);
    }

    public function getDetailAllUkm() // ! DONE
    {
        $object = new stdClass();
        foreach (U::get() as $kMaster => $vMaster) {
            $object->$kMaster = $vMaster;
            $vMaster->faq;
            $vMaster->galeri;
            $vMaster->kegiatan;
            $vMaster->kriteria;
            $vMaster->prestasi;
            $vMaster->sosmed;
        }

        $objects = (array) $object;

        return response()->json([
            'status' => 'success',
            'message' => 'data has retrieved successfully',
            'data' => $objects
        ], 200);
    }

    public function createUkm(Request $request) // * DONE
    {
        $ukm = new U;
        $ukm->slug = $request->slug;
        $ukm->nama = $request->nama;
        $ukm->logo = $request->logo;
        $ukm->deskripsi = $request->deskripsi;
        $ukm->sekilas = $request->sekilas;
        $ukm->video_profile = $request->video_profile;
        $ukm->pesan = $request->pesan;
        $ukm->tanggal_oprec = $request->tanggal_oprec;
        $ukm->link_oprec = $request->link_oprec;
        $ukm->save();

        $split = explode("+++", $request->galeri);
        foreach ($split as $buah) {
            $ukmGaleri = new UkmGaleri;
            $ukmGaleri->slug = $request->slug;
            $ukmGaleri->nama_file = $buah;
            $ukmGaleri->save();
        }

        $split = explode("+++", $request->kriteria);
        foreach ($split as $buah) {
            $ukmKriteria = new ukmKriteria;
            $ukmKriteria->slug = $request->slug;
            $ukmKriteria->kriteria = $buah;
            $ukmKriteria->save();
        }

        $split = explode("+++", $request->prestasi);
        foreach ($split as $buah) {
            $ukmPrestasi = new ukmPrestasi;
            $ukmPrestasi->slug = $request->slug;
            $ukmPrestasi->nama_prestasi = $buah;
            $ukmPrestasi->save();
        }

        $splitFaq = explode("+++", $request->faq);
        foreach ($splitFaq as $pasang) {
            $ukmFaq = new UkmFaq;
            $isJawab = false;
            $isSave = false;

            $split = explode("|", $pasang);
            foreach ($split as $buah) {
                $ukmFaq->slug = $request->slug;
                if(!$isJawab) {
                    $isSave = false;
                    $ukmFaq->question = $buah;
                } else if ($isJawab) {
                    $isSave = true;
                    $ukmFaq->answer = $buah;
                }

                if ($isSave) $ukmFaq->save();
                $isJawab = true;
            }
        }

        $splitKegiatan = explode("+++", $request->kegiatan);
        foreach ($splitKegiatan as $pasang) {
            $ukmKegiatan = new UkmKegiatan;
            $isJawab = false;
            $isSave = false;

            $split = explode("|", $pasang);
            foreach ($split as $buah) {
                $ukmKegiatan->slug = $request->slug;
                if(!$isJawab) {
                    $isSave = false;
                    $ukmKegiatan->nama_kegiatan = $buah;
                } else if ($isJawab) {
                    $isSave = true;
                    $ukmKegiatan->deskripsi = $buah;
                }

                if ($isSave) $ukmKegiatan->save();
                $isJawab = true;
            }
        }

        $splitSosmed = explode("+++", $request->sosmed);
        foreach ($splitSosmed as $pasang) {
            $ukmSosmed = new UkmSosmed;
            $isJawab = false;
            $isSave = false;

            $split = explode("|", $pasang);
            foreach ($split as $buah) {
                $ukmSosmed->slug = $request->slug;
                if(!$isJawab) {
                    $isSave = false;
                    $ukmSosmed->platform = $buah;
                } else if ($isJawab) {
                    $isSave = true;
                    $ukmSosmed->link = $buah;
                }

                if ($isSave) $ukmSosmed->save();
                $isJawab = true;
            }
        }

        return response()->json([
            'status'   => 'success',
            'message' => 'data has sent successfully',
        ], 200);
    }

    public function deleteUkm(Request $request) // DONE
    {
        $ukm = U::find($request->slug);
        $ukm->delete();

        $ukmFaq = UkmFaq::find($request->slug);
        $ukmFaq->delete();

        $ukmGaleri = UkmGaleri::find($request->slug);
        $ukmGaleri->delete();

        $ukmKegiatan = UkmKegiatan::find($request->slug);
        $ukmKegiatan->delete();

        $ukmKriteria = UkmKriteria::find($request->slug);
        $ukmKriteria->delete();

        $ukmPrestasi = UkmPrestasi::find($request->slug);
        $ukmPrestasi->delete();

        $ukmSosmed = UkmSosmed::find($request->slug);
        $ukmSosmed->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'data has deleted successfully',
        ], 200);
    }
}

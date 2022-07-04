<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entity\Mahasiswa as Mhs;
use App\Entity\Penugasan;
use App\Entity\Pointer;
use App\Entity\Ukm;

class Mahasiswa extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('delete');
    }

    public function ganti_pointer(Request $request)
    {
        $select = Pointer::where('id', '1')->first();
        $select->pointer_mahasiswa = $request->mhs;
        $select->pointer_kelompok = $request->kel;
        $select->save();

        return 'sukses';
    }

    public function isi_form(Request $request)
    {
        try {
            $mhs = Mhs::where('nim', $request->user()->nim)->first();
            if($mhs->kelompok == NULL) {
                $select = Pointer::where('id', '1')->first();

                $temp_jumlah_mhs = $select->pointer_mahasiswa;
                $temp_kelompok = $select->pointer_kelompok;

                $in_mhs = strval($temp_jumlah_mhs + 1);
                $select->pointer_mahasiswa = $in_mhs;
                $select->save();

                if($temp_jumlah_mhs >= 10) {
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
            } else {
                $mhs->cluster = $request->cluster;
                $mhs->sosmed = $request->wa . '%' . $request->ig . '%' . $request->line;
                $mhs->save();

                return response()->json([
                    'status' => 'success',
                    'message' => 'data saved successfully',
                ], 200);
            }
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

        $minats = explode(',', $maba->minat_ukm);
        $ukms = array();
        if($minats[0] != '') {
            for ($i=0; $i < count($minats); $i++) {
                $arr = Ukm::where('slug', '=', $minats[$i])->first();
                array_push($ukms, array(
                    'slug' => $minats[$i],
                    'nama' => $arr['nama'],
                    'logo' => $arr['logo']
                ));
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'data has retrieved successfully',
            'data' => [
                'nim' => $maba->nim,
                'nama' => $maba->nama,
                'fakultas' => $maba->fakultas,
                'jurusan' => $maba->jurusan,
                'prodi' => $maba->prodi,
                'jenjang' => $maba->jenjang,
                'foto' => $maba->foto,
                'agama' => $maba->agama,
                'hobi' => $maba->hobi,
                'cluster' => $maba->cluster,
                'kelompok' => $maba->kelompok,
                'sosmed' => $maba->sosmed,
                'peminatan_ukm' => $ukms,
                'teman_sekelompok' => $temans,
                'perizinan' => $maba->PerizinanMahasiswa,
                'penilaian' => [
                    'nilai_twibbon' => $maba->penugasan->nilai_twibbon,
                    'nilai_kenali' => $maba->penugasan->nilai_kenali,
                    'nilai_transformer' => $maba->penugasan->nilai_transformer,
                    'nilai_biskuit' => $maba->penugasan->nilai_biskuit,
                    'nilai_dharma_warta' => $maba->penugasan->nilai_dharma_warta,
                    'nilai_gaung_budaya' => $maba->penugasan->nilai_gaung_budaya,
                    'nilai_kenali_minat' => $maba->penugasan->nilai_minat
                ],
            ]
        ], 200);
    }

    public function pendataan(Request $request)
    {
        $maba = Mhs::firstOrCreate(['nim' => $request->user()->nim]);
        if ($request->minat_ukm) {
            $maba->minat_ukm = $request->minat_ukm;

            $maba->save();
        } else {
            $maba->agama = $request->agama;
            $maba->jenis_kelamin = $request->jenis_kelamin;
            $maba->email = $request->email;
            $maba->hobi = $request->hobi;

            $maba->save();
        }

        return response()->json([
            'status'   => 'success',
            'message' => 'data has sent successfully',
        ], 200);
    }

    // * sepertinya ini dihapus. karena unused

    public function edit(Request $request)
    {
        try {
            $mhs = Mhs::where('nim', $request->user()->nim)->first();

            return response()->json([
                'status' => 'success',
                'message' => 'data has delivered successfully',
                'data' => [
                    'cluster' => $request->user()->cluster,
                    'sosmed' => $request->user()->sosmed
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'data not found',
            ], 404);
        }
    }

    public function update(Request $request)
    {
        try {
            $mhs = Mhs::where('nim', $request->user()->nim)->first();
            $mhs->sosmed = $request->wa . '%' . $request->ig . '%' . $request->line;
            $mhs->cluster = $request->cluster;
            $mhs->save();

            return response()->json([
                'status' => 'success',
                'message' => 'data has saved successfully',
                'data' => [
                    'cluster' => $request->cluster,
                    'sosmed' => $request->wa . '%' . $request->ig . '%' . $request->line
                ]
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'data not found',
            ], 404);
        }
    }

    public function delete(Request $request)
    {
        Mhs::where('nim', $request->nim)->delete();
        return 'sukses';
    }

    public function random_lagi(Request $request)
    {
        $mhs = Mhs::where('kelompok', $request->kelompok)->get();
        return $mhs;
        // foreach ($mhs as $mahasiswa) {
        //     $mahasiswa->kelompok(NULL);

        //     force_isi_form($request->user()->nim, $request->user()->wa); // nim
        // }
    }

    public function force_isi_form($nim, $wa, $ig, $line, $cluster, $sukses, $gagal)
    {
        try {
            $mhs = Mhs::where('nim', $nim)->first();
            if($mhs->kelompok == NULL) {
                $select = Pointer::where('id', '1')->first();

                $temp_jumlah_mhs = $select->pointer_mahasiswa;
                $temp_kelompok = $select->pointer_kelompok;

                $in_mhs = strval($temp_jumlah_mhs + 1);
                $select->pointer_mahasiswa = $in_mhs;
                $select->save();

                if($temp_jumlah_mhs >= 10) {
                    $in_kel = strval($temp_kelompok + 1);
                    $select->pointer_mahasiswa = '1';
                    $select->pointer_kelompok = $in_kel;
                    $select->save();
                }

                $mhs->cluster = $cluster;
                $mhs->kelompok = $temp_kelompok;
                $mhs->sosmed = $wa . '%' . $ig . '%' . $line;
                $mhs->save();

                return $sukses++;
            } else {
                $mhs->cluster = $cluster;
                $mhs->sosmed = $wa . '%' . $ig . '%' . $line;
                $mhs->save();

                return $sukses++;
            }
        } catch (\Throwable $th) {
            return $gagal++;
        }
    }
}

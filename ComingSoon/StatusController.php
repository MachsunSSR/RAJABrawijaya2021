<?php

namespace App\Http\Controllers\API\Penugasan\PKKMB;

use Illuminate\Http\Request;
use DB;
use RAJAHelpers;
use Exception;
use Cache;
use Redis;

class StatusController
{
    
    public function all($nim){
        $status = RAJAHelpers::getRedis('status-penugasan-'.$nim, 'status-penugasan', $nim);
        
        // $status = Cache::rememberForever('status-penugasan-'.$nim, function () use($nim) {
        //     $status = DB::table('20_penugasan_pkkmb')->where('nim', $nim)->first();
            
        //     if($status == null){
        //         DB::table('20_penugasan_pkkmb')->insert(['nim' => $nim]);
        //         $status = DB::table('20_penugasan_pkkmb')->where('nim', $nim)->first();
        //     }

        //     return $status;
        // });
        
        $status = [
            [
                'judul' => 'Pilihan Ganda',
                'deskripsi' => 'Pilihan ganda soal tentang UB',
                'status' => $status->status_pilgan == null ? false : true,
                'url' => '/pilgan'
            ],
            [
                'judul' => 'Missing Lyrics',
                'deskripsi' => 'Tebak Lirik Hymne & Mars UB',
                'status' => $status->status_lagu == null ? false : true,
                'url' => '/lyrics'
            ],
            [
                'judul' => 'Video Superheroes',
                'deskripsi' => 'Membuat video bercerita sosok inspiratif',
                'status' => $status->status_superheroes == null ? false : true,
                'url' => '/superheroes'
            ],
            [
                'judul' => 'Video BMC',
                'deskripsi' => 'Membuat video planning wirausaha masa depan',
                'status' => $status->status_business == null ? false : true,
                'url' => '/bmc'
            ],
            [
                'judul' => 'Video Adhikara Bercerita',
                'deskripsi' => 'Membuat video bercerita tentang apa yang dirasakan',
                'status' => $status->status_adhikara_bercerita == null ? false : true,
                'url' => '/bercerita'
            ],
            [
                'judul' => 'Esai Motivation Letter',
                'deskripsi' => 'Membuat essai bagaimana diri kita mencintai diri sendiri',
                'status' => $status->status_motivation_letter == null ? false : true,
                'url' => '/motivation'
            ],
            [
                'judul' => 'Esai Mental Health',
                'deskripsi' => 'Membuat esai tentang pentingnya mental health',
                'status' => $status->status_mental_health == null ? false : true,
                'url' => '/mental-health'
            ],
            [
                'judul' => 'Video Kolaborasi',
                'deskripsi' => 'Membuat video kolaborasi bersama teman kelompok',
                'status' => $status->status_video_kolaborasi == null ? false : true,
                'url' => '/kolaborasi'
            ],
        ];

        return response()->json([
            'success' => true,
            'data' => $status,
        ]);
    }

    public function detail($nim, Request $request){
        $status = RAJAHelpers::getRedis('status-penugasan-'.$nim, 'status-penugasan', $nim);

        switch ($request->type) {
            case 'pilgan':
                $response = $status->status_pilgan == null ? false : true;
            break;
            case 'lyrics':
                $response = $status->status_lagu == null ? false : true;
            break;
            case 'superheroes':
                $response = $status->status_superheroes == null ? false : true;
            break;
            case 'business':
                $response = $status->status_business == null ? false : true;
              break;
            case 'adhikara_bercerita':
                $response = $status->status_adhikara_bercerita == null ? false : true;
              break;
            case 'motivation_letter':
                $response = $status->status_motivation_letter == null ? false : true;
              break;
            case 'mental_health':
                $response = $status->status_mental_health == null ? false : true;
              break;
            case 'kolaborasi':
                $response = $status->status_video_kolaborasi == null ? false : true;
              break;
          }
          
          return response()->json([
            'status' => $response,
          ]);
    }

    public function reset($nim){
        Redis::del('status-penugasan-'.$nim);
        Redis::del('data-maba-'.$nim);
    }
}
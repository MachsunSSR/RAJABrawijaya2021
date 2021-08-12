<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entity\Penugasan as Tugas;

class Penugasan extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function kenali_brawijaya(Request $request)
    {
        Tugas::updateOrCreate(
            ['nim' =>  $request->user()->nim],
            [
                'status_pilgan' => true,
                'nilai_pilgan' => strval($request->nilai)
            ],
        );

        return response()->json([
            'status' => 'success',
            'message' => 'data has retrieved successfully',
            'data' => [
                'nim' => $request->user()->nim,
                'nilai_pilgan' => $request->nilai
            ]
        ], 200);
    }
}

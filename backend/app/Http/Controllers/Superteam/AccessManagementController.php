<?php

namespace App\Http\Controllers\Superteam;

use App\Http\Controllers\Controller;
use App\Entity\Access;
use App\Entity\Mahasiswa;
use Illuminate\Http\Request;

class AccessManagementController extends Controller
{
    public function index()
    {
        $payload['mahasiswas'] = Mahasiswa::has('accesses')->get();

        return view('pages/access-management/index', $payload);
    }

    public function create()
    {
        $payload['accesses'] = Access::all();

        return view('pages/access-management/create', $payload);
    }


    public function store(Request $request)
    {
        $nim = $request->input('nim');
        $access = $request->input('access');

        $mahasiswa = Mahasiswa::firstOrCreate(['nim' => $nim]);
        if (isset($access)) {
            $mahasiswa->accesses()->attach($access);
        }

        return redirect('superteam/access')->with('success_message', 'Berhasil memberikan akses');
    }

    public function edit($nim)
    {
        $payload['mahasiswa'] = Mahasiswa::find($nim);
        if (!$payload['mahasiswa']) redirect('superteam/access')->with('failed_message', 'Data mahasiswa tidak ditemukan');
        $payload['accesses'] = Access::all();

        return view('pages/access-management/edit', $payload);
    }

    public function update(Request $request, $nim)
    {
        $nim = $request->input('nim');
        $access = $request->input('access');

        $mahasiswa = Mahasiswa::find($nim);
        if (!$mahasiswa) redirect('superteam/access')->with('failed_message', 'Data mahasiswa tidak ditemukan');
        
        $mahasiswa->accesses()->detach();
        if (isset($access)) {
            $mahasiswa->accesses()->attach($access);
        }

        return redirect('superteam/access')->with('success_message', 'Berhasil mengubah akses');
    }

    public function destroy($nim)
    {
        $mahasiswa = Mahasiswa::find($nim);
        if (!$mahasiswa) redirect('superteam/access')->with('failed_message', 'Data mahasiswa tidak ditemukan');
        $mahasiswa->accesses()->detach();
        $mahasiswa->delete();

        return redirect('superteam/access')->with('success_message', 'Berhasil menghapus akses');
    }
}

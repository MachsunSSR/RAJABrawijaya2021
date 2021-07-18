<?php

namespace App\Http\Controllers;

use App\Entity\Deprecated\Maba20;
use App\Entity\Raport;
use App\Http\Controllers\Controller;
use Codedge\Fpdf\Fpdf\Fpdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class RaportController extends Controller
{
    public function index()
    {
        return view('pages/raport');
    }

    public function action(Request $request) {
        try {
            $nim = $request->input('nim');
            $angkatan = $request->input('angkatan');
            
            $raport = Raport::where('nim', $nim)->first();
            if (!$raport) {
                $maba = Maba20::with(['penugasan', 'presensiOh'])->where('nim', $nim)->first();
                if (!$maba) {
                    return back()->with('failed_message', 'Mohon maaf data anda tidak ditemukan');
                }
                
                $raport = $this->generateRaport2020($nim, $maba);
            }
            
            session()->flash('raport_file', asset('assets/raport/pdf/2020/'.$raport->file));
            return back()->with('success_message', 'Berhasil mengunduh raport kamu');
        } catch (Throwable $e) {
            return back()->with('failed_message', 'Terjadi kesalahan, silahkan hubungi kontak yang tertulis pada informasi!');
        }
        
    }

    private function generateRaport2020($nim, $data) {
        $penugasan['pilgan'] = 0;
        $penugasan['lagu'] = 0;
        $penugasan['superheroes'] = 0;
        $penugasan['bussiness'] = 0;
        $penugasan['adhikara_bercerita'] = 0;
        $penugasan['motivation_letter'] = 0;
        $penugasan['mental_health'] = 0;
        $penugasan['video_kolaborasi'] = 0;
        $presensi['pkkmb'] = 100;
        $presensi['oh'] = 0;

        $pdf = new Fpdf;
        $pdf->AddPage();
        $pdf->Image(public_path('assets/raport/2020.png'), 0, 0, 210);
        $pdf->SetAutoPageBreak(true, 1);

        $pdf->AddFont('Roboto', '', 'Roboto-Regular.php');
        $pdf->AddFont('Roboto-Bold', '', 'Roboto-Bold.php');
        $pdf->AddFont('Roboto-Black', '', 'Roboto-Black.php');
        
        $pdf->SetFont('Roboto-Bold', '', 17);
        $pdf->SetTextColor(64, 24, 64);

        $pdf->SetXY(55, 76.2);
        $pdf->Write(0, $data->nama);

        $pdf->SetXY(55, 84);
        $pdf->Write(0, $data->nim);

        $pdf->SetXY(55, 91);
        $pdf->Write(0, $data->fakultas);

        $pdf->SetFont('Roboto-Bold', '', 15);

        if ($data->penugasan) {
            $penugasan['pilgan'] = $data->penugasan->status_pilgan;
            $penugasan['lagu'] = $data->penugasan->status_lagu;
            $penugasan['superheroes'] = $data->penugasan->status_superheroes == 1 ? 100 : 0;
            $penugasan['bussiness'] = $data->penugasan->status_business == 1 ? 100 : 0;
            $penugasan['adhikara_bercerita'] = $data->penugasan->status_adhikara_bercerita == 1 ? 100 : 0;
            $penugasan['motivation_letter'] = $data->penugasan->status_motivation_letter == 1 ? 100 : 0;
            $penugasan['mental_health'] = $data->penugasan->status_mental_health == 1 ? 100 : 0;
            $penugasan['video_kolaborasi'] = $data->penugasan->status_video_kolaborasi == 1 ? 100 : 0;
        }
        
        $pdf->SetTextColor(255, 255, 255);
        $pdf->SetXY(177, 130);
        $pdf->Write(0, $presensi['pkkmb']);
        $pdf->SetXY(177, 136);
        $pdf->Write(0, $penugasan['pilgan']);
        $pdf->SetXY(177, 142);
        $pdf->Write(0, $penugasan['lagu']);
        $pdf->SetXY(177, 148);
        $pdf->Write(0, $penugasan['pilgan']);
        $pdf->SetXY(177, 154);
        $pdf->Write(0, $penugasan['pilgan']);
        $pdf->SetXY(177, 160);
        $pdf->Write(0, $penugasan['pilgan']);
        $pdf->SetXY(177, 166);
        $pdf->Write(0, $penugasan['pilgan']);
        $pdf->SetXY(177, 172);
        $pdf->Write(0, $penugasan['pilgan']);
        $pdf->SetXY(177, 178);
        $pdf->Write(0, $penugasan['pilgan']);


        if ($data->presensiOh) $presensi['oh'] = 100;

        $pdf->SetXY(177, 210);
        $pdf->Write(0, $presensi['oh']);

        $fileName = Crypt::encryptString($nim);
        $fileLocation = public_path('assets/raport/pdf/2020/');
        $pdf->Output('F', $fileLocation.$fileName.'.pdf');
        
        $raport = new Raport;
        $raport->nim = $nim;
        $raport->angkatan = 2020;
        $raport->file = $fileName.'.pdf';

        $raport->save();

        return $raport;
    }
}

<?php

namespace App\Http\Controllers;

use App\Entity\Deprecated\Maba20;
use App\Entity\Raport;
use App\Http\Controllers\Controller;
use Codedge\Fpdf\Fpdf\Fpdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

use App\Helpers\SIAMHelper;
use App\Helpers\MahasiswaHelper;
use App\Entity\Penugasan;
use App\Entity\Mahasiswa as Mhs;

class RaportController extends Controller
{
    public function index()
    {
        $isError = 0;
        // return view('pages/raportnew')->with('isError', $isError);
        return view('pages/blank');
    }

    public function index2()
    {
        $isError = 0;
        return view('pages/raportnew')->with('isError', $isError);
        // return view('pages/blank');
    }

    public function generateGrade($num)
    {
        if ($num >= 90) $nilai = 'A';
        else if ($num >= 80) $nilai = 'B+';
        else if ($num >= 70) $nilai = 'B';
        else if ($num >= 60) $nilai = 'C+';
        else $nilai = 'C';

        return $nilai;
    }

    public function rasionallize($num)
    {

        if($num >= 150) $nilai = 95;
        else if ($num > 100) $nilai = 90;
        else if ($num < 0) $nilai = 75;
        else $nilai = $num;

        return $nilai;
    }

    public function generateRandomString()
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < 15; $i++)
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        return $randomString;
    }

    public function authPdf(Request $request)
    {
        // trying to login
        $nim = $request->input('nim');
        $password = $request->input('password');

        // failed login
        if (!$siamInformation = SIAMHelper::auth($nim, $password)) {
            // return response()->json([
            //     'status' => 'error',
            //     'message' => 'failed!, nim or password not valid',
            //     'errorCode' => 401
            // ], 401);
            $isError = 1;
            return view('pages/raportnew')->with('isError', $isError);
        }

        // wrong account
        if (!MahasiswaHelper::isMahasiswaBaru($nim) && !MahasiswaHelper::isWhitelistedUser($nim)) {
            // return response()->json([
            //     'status' => 'error',
            //     'message' => 'access only for maba',
            //     'errorCode' => 403
            // ], 403);
            $isError = 2;
            return view('pages/raportnew')->with('isError', $isError);
        }

        // go
        $this->exportRaport($nim);
    }

    public function exportRaport($nim)
    {
        // preparing the data
        $nama = strtoupper(Mhs::select('nama')->where('nim', $nim)->first()['nama']);
        $fakultas = strtoupper(Mhs::select('fakultas')->where('nim', $nim)->first()['fakultas']);

        $nilais = Penugasan::select('nilai_kenali','nilai_transformer','nilai_biskuit','nilai_dharma_warta','nilai_gaung_budaya','nilai_minat')
        ->where('nim', $nim)->first();

        $nilai_1 = $this->rasionallize((int)$nilais['nilai_kenali']);
        $nilai_kenali = $this->generateGrade($nilai_1);

        $nilai_2 = $this->rasionallize((int)$nilais['nilai_dharma_warta']);
        $nilai_dharma_warta = $this->generateGrade($nilai_2);

        $nilai_3 = $this->rasionallize((int)$nilais['nilai_gaung_budaya']);
        $nilai_gaung_budaya = $this->generateGrade($nilai_3);

        $nilai_4 = $this->rasionallize((int)$nilais['nilai_biskuit']);
        $nilai_biskuit = $this->generateGrade($nilai_4);

        $nilai_5 = $this->rasionallize((int)$nilais['nilai_transformer']);
        $nilai_transformer = $this->generateGrade($nilai_5);

        $nilai_6 = $this->rasionallize((int)$nilais['nilai_minat']);
        $nilai_kenali_minat = $this->generateGrade($nilai_6);

        $na_asli = ($nilai_1 + $nilai_2 + $nilai_3 + $nilai_4 + $nilai_5 + $nilai_6) / 6;
        $nilai_akhir = number_format((float)$na_asli, 2, '.', '');
        $na = $this->generateGrade($nilai_akhir);

        // designing and prepare fpdf
        $this->fpdf = new Fpdf;
        $this->fpdf->AddPage('P', ['3508', '2480']);
        $this->fpdf->Image(public_path('assets/raport/2021.jpg'), 0, 0, 2480);

        $this->fpdf->SetFont('Arial','B',150);
        $this->fpdf->SetTextColor(255, 255, 255);

        // nama
        $this->fpdf->SetXY(700, 1015);
        $this->fpdf->Write(0, $nama);

        // nim
        $this->fpdf->SetXY(700, 1090);
        $this->fpdf->Write(0, $nim);

        // fakulas
        $this->fpdf->SetXY(700, 1165);
        $this->fpdf->Write(0, $fakultas);

        $this->fpdf->SetFont('helvetica','B',150);

        // kehadiran
        $this->fpdf->SetXY(1170, 1630);
        $this->fpdf->Write(0, "100 (A)");

        // nilai 1
        $this->fpdf->SetXY(1170, 1705);
        $this->fpdf->Write(0, $nilai_1 . " (" . $nilai_kenali . ")");

        // nilai 2
        $this->fpdf->SetXY(1170, 1780);
        $this->fpdf->Write(0, $nilai_2 . " (" . $nilai_dharma_warta . ")");

        // nilai 3
        $this->fpdf->SetXY(1170, 1855);
        $this->fpdf->Write(0, $nilai_3 . " (" . $nilai_gaung_budaya . ")");

        // nilai 4
        $this->fpdf->SetXY(1170, 1930);
        $this->fpdf->Write(0, $nilai_4 . " (" . $nilai_biskuit . ")");

        // nilai 5
        $this->fpdf->SetXY(1170, 2005);
        $this->fpdf->Write(0, $nilai_5 . " (" . $nilai_transformer . ")");

        // nilai 6
        $this->fpdf->SetXY(1170, 2080);
        $this->fpdf->Write(0, $nilai_6 . " (" . $nilai_kenali_minat . ")");

        // nilai na
        $this->fpdf->SetXY(1170, 2268);
        $this->fpdf->Write(0, $nilai_akhir . " (" . $na . ")");

        $this->fpdf->SetXY(1720, 2540);
        $this->fpdf->Write(0, $na);


        // success => download exported file
        $this->fpdf->Output($this->generateRandomString().".pdf", "I");
    }
}

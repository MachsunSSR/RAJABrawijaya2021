<?php

namespace App\Helpers;

use App\Entity\Mahasiswa;

class MahasiswaHelper
{
    CONST MAHASISWA_BARU_TWO_DIGIT_NIM = 21;
    CONST WHITELISTED_NIM = ['183140914111001', '195150207111029', '205150600111023', '195080300111034', '195100201111021', '205080607111005', '195080300111046'];

    public static function isMahasiswaBaru($nim) {
        $angkatan = substr($nim,0,2);

        if (self::MAHASISWA_BARU_TWO_DIGIT_NIM == $angkatan) {
            return true;
        }

        return false;
    }

    public static function isWhitelistedUser($nim) {
        return in_array($nim, self::WHITELISTED_NIM);
    }
    public static function syncSiamWithDatabase($database, $siam) {
        $database->nama = $siam->NAMA;
        $database->jenjang = $siam->JENJANG;
        $database->fakultas = $siam->FAKULTAS;
        $database->jurusan = $siam->JURUSAN;
        $database->prodi = $siam->PRODI;
        $database->foto = 'https://wmsbf.org/wp-content/uploads/2019/04/default-profile.png';
        $database->save();
    }
}

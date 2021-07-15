<?php

namespace App\Helpers;

class MahasiswaHelper
{
    CONST MAHASISWA_BARU_TWO_DIGIT_NIM = 21;
    CONST WHITELISTED_NIM = ['183140914111001'];

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
        $database->save();
    }
}
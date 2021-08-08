<?php

namespace App\Helpers;

class MahasiswaHelper
{
    CONST MAHASISWA_BARU_TWO_DIGIT_NIM = 21;
    CONST WHITELISTED_NIM = ['183140914111001', '205150600111023'];

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
        // sementara pake default
        $foto = "//st3.depositphotos.com/13159112/17145/v/450/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg";

        $database->nama = $siam->NAMA;
        $database->jenjang = $siam->JENJANG;
        $database->fakultas = $siam->FAKULTAS;
        $database->jurusan = $siam->JURUSAN;
        $database->prodi = $siam->PRODI;
        $database->foto = $foto;
        $database->save();
    }
}

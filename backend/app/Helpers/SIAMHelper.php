<?php

namespace App\Helpers;

class SIAMHelper
{
    // memasukan nim dan password yang benar saja yang boleh.
    // public static function auth($nim, $password){
    //     $pass = md5('123ab' . $password) . '_' . $nim;
    //     $ip = $_SERVER['REMOTE_ADDR'];

    //     $url_login = 'https://bais.ub.ac.id/api/login/xmlapi/?userid=' . $nim . '&passport=' . $pass . '&challenge=123ab&appid=EKS1&ipaddr=' . $ip;
    //     $initlogin = curl_init($url_login);
    //     curl_setopt($initlogin, CURLOPT_URL, $url_login);
    //     curl_setopt($initlogin, CURLOPT_RETURNTRANSFER, 1);
    //     curl_setopt($initlogin, CURLOPT_SSL_VERIFYPEER, false);
    //     $execlogin = curl_exec($initlogin);
    //     $xml = simplexml_load_string($execlogin);

    //     if ($xml->CONTENT->AUTHORITY->PASSWD != 1)
    //         return false;

    //     return $xml->CONTENT->USER;
    // }

    CONST BAIS_LOGIN_URL = "https://bais.ub.ac.id/api/login/xmlapi/";
    CONST BAIS_CHALLENGE_KEY = "123ab";
    CONST BAIS_APP_ID = "EKS1";

    // tanpa body require passoword pun, ttp ntar bisa input data baru
    public static function auth($nim, $password){
        $passport = self::generatePassword($nim, $password);
        $url_login = self::generateUrlLogin($nim, $passport);

        $initlogin = curl_init($url_login);
        curl_setopt($initlogin, CURLOPT_URL, $url_login);
        curl_setopt($initlogin, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($initlogin, CURLOPT_SSL_VERIFYPEER, false);
        $execlogin = curl_exec($initlogin);
        $xml = simplexml_load_string($execlogin);

        return $xml->CONTENT->USER;
    }

    private static function generatePassword($nim, $password) {
        return  md5('123ab' . $password) . '_' . $nim;
    }

    private static function generateUrlLogin($userId, $passport) {
        $ip = $_SERVER['REMOTE_ADDR'];

        return sprintf('%s?userid=%s&passport=%s&challenge=%s&appid=%s&ipaddr=%s',
        self::BAIS_LOGIN_URL, $userId, $passport, self::BAIS_CHALLENGE_KEY, self::BAIS_APP_ID, $ip);
    }
}

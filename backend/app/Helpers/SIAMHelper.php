<?php

namespace App\Helpers;

class SIAMHelper
{
    CONST BAIS_LOGIN_URL = "https://bais.ub.ac.id/api/login/xmlapi/";
    const BAIS_CHALLENGE_KEY = "123ab";
    const BAIS_APP_ID = "EKS1";

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
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RedirectController
{
    public function tutupPendataan()
    {
      return redirect('apps')->with('status-pendataan', 'tutup');
    }

    public function facebook(){
        return redirect('https://www.facebook.com/rajabrawijayaub/');
    }

    public function youtube(){
        return redirect('https://www.youtube.com/channel/UCpNS1e8i6pgkxqxbdIPnUNQ');
    }

    public function twitter(){
        return redirect('https://twitter.com/raja_brawijaya/');
    }

    public function instagram(){
        return redirect('https://www.instagram.com/raja_brawijaya/');
    }

    public function line(){
        return redirect('https://line.me/R/ti/p/%40raja_brawijaya');
    }

    public function telegram(){
      return redirect('https://t.me/rajabrawijayaub');
    }

    public function tiktok(){
    return redirect('https://www.tiktok.com/@rajabrawijayaub');
    }

    public function website(){
        return redirect('http://rajabrawijaya.ub.ac.id');
    }

    public function upgrade(){
        return redirect('https://youtu.be/w-ThFKNBuiQ');
    }

    public function presensiAwal(){
        return redirect('https://docs.google.com/forms/d/1EmT6iBw5s_-4o6ANld0YPawxSMjFnZuztKRR2ohD8Ws/');
    }

    public function presensiAkhir(){
        return redirect('https://docs.google.com/forms/d/e/1FAIpQLSdHIrp0gXluxaaC1Gj_61VweXL36TZE_6oszxdaHKzOQt5FQg/viewform?usp=sf_link');
    }

    public function pengumpulanResume(){
        return redirect('https://docs.google.com/forms/d/e/1FAIpQLSev6hjxKJxJJqkIfraHyqsRcdm-UmXms3dDk4-ck3gsn6c24g/viewform?usp=sf_link');
    }

    public function pengumumanVokasi(){
        return redirect('https://selma.ub.ac.id/en/pengumuman-hasil-seleksi-dan-tata-cara-registrasi-mahasiswa-baru-program-pendidikan-vokasi-jalur-prestasi-2020/');
    }
    public function PendataanAtributPanitia(){
      return redirect('https://forms.gle/Hh7GT2gUx1dvUsFW7');
    }

    public function dafulsbtmptnub(){
      return redirect('https://selma.ub.ac.id/en/pengumuman-tata-cara-registrasi-daftar-ulang-mahasiswa-sbmptn-tahun-2020-universitas-brawijaya');
    }

    public function griya()
    {
      return redirect('http://griyabrawijaya.ub.ac.id/');
    }

    public function teknik()
    {
      return redirect('http://teknik.ub.ac.id/');
    }

    public function psld()
    {
      return redirect('http://psld.ub.ac.id/');
    }

    public function ubkantin()
    {
      return redirect('http://ubkantin.ub.ac.id/');
    }

    public function ikaub()
    {
      return redirect('http://ika.ub.ac.id/');
    }

    public function sii()
    {
      return redirect('http://sii.bua.ub.ac.id/');
    }

    public function ubtv()
    {
      return redirect('http://bua.ub.ac.id/ub-tv-dan-radio/');
    }

    public function ubpress()
    {
      return redirect('http://ubpress.ub.ac.id/?lang=en');
    }

    public function ubsc()
    {
      return redirect('http://sportcenter.ub.ac.id/');
    }

    public function blc()
    {
      return redirect('http://blc.ub.ac.id/');
    }

    public function fk()
    {
      return redirect('http://www.fk.ub.ac.id/');
    }

    public function fkg(){
      return redirect('http://fkg.ub.ac.id/');
    }

    public function teknopark(){
      return redirect('http://bua.ub.ac.id/technopark/');
    }

    public function linebot()
    {
      return redirect('https://lin.ee/rQwTAeD');
    }

    public function dafulmandiri()
    {
      return redirect('https://selma.ub.ac.id/pengumuman-hasil-seleksi-jalur-mandiri-ub-smub-tahun-2020/');
    }

    public function kpri(){
      return redirect('http://kpri.ub.ac.id/');
    }

    public function throwbackPKKMB()
    {
      return redirect('https://www.youtube.com/playlist?list=PLiLA6cT1gpxL1hCAXclaVOpIMZ-tkjS46');
    }

    public function presensiAwalUpgrading(){
      return redirect('https://forms.gle/TApcYDn7JSKCiV9H7');
    }

    public function presensiAkhirUpgrading(){
      return redirect('https://forms.gle/GYFLLBbFz1JFFLzy9');
    }
    
    public function templatePhoto(){
      return redirect('https://drive.google.com/file/d/1U9hv89lJvscj4XC8zqCEpur4eOexsaaQ/view');
    }

    public function pengumpulancontest(){
      return redirect('https://forms.gle/KzY7eQNwYfiEm55B6');
    }

    public function pbpkoh(){
      return redirect('https://www.youtube.com/watch?v=KnR9kQciXHg&ab_channel=RAJABrawijaya');
    }
    
}
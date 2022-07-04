<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Ukm extends Model
{
    protected $table = '21_ukm';
    protected $primaryKey = 'slug';
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];

    public function faq()
    {
        return $this->hasMany('App\Entity\UkmFaq', 'slug', 'slug')->select('question', 'answer');
    }

    public function galeri()
    {
        return $this->hasMany('App\Entity\UkmGaleri', 'slug', 'slug')->select('nama_file');
    }

    public function kegiatan()
    {
        return $this->hasMany('App\Entity\UkmKegiatan', 'slug', 'slug')->select('nama_kegiatan', 'deskripsi');
    }

    public function kriteria()
    {
        return $this->hasMany('App\Entity\UkmKriteria', 'slug', 'slug')->select('kriteria');
    }

    public function prestasi()
    {
        return $this->hasMany('App\Entity\UkmPrestasi', 'slug', 'slug')->select('nama_prestasi');
    }

    public function sosmed()
    {
        return $this->hasMany('App\Entity\UkmSosmed', 'slug', 'slug')->select('platform', 'link');
    }
}

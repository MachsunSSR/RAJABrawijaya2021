<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class PerizinanMahasiswa extends Model
{
    protected $table = '21_perizinan';
    protected $primaryKey = 'nim';
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];

    public function Mahasiswa()
    {
        return $this->belongsTo('App\Entity\Mahasiswa', 'nim', 'nim');
    }
}

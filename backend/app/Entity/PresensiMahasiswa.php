<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class PresensiMahasiswa extends Model
{
    protected $table = '21_presensi';
    protected $primaryKey = 'nim';
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];
}

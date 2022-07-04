<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Penugasan extends Model
{
    protected $table = '21_penugasan';
    protected $primaryKey = 'nim';
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];

    public function mahasiswa() {
        return $this->belongsTo('App\Entity\Mahasiswa', 'nim', 'nim');
    }
}
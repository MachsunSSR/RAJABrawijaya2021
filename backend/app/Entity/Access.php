<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Access extends Model
{
    protected $table = 'access';
    protected $guarded = [];
    public $timestamps = false;

    public function mahasiswas() {
        return $this->belongsToMany('App\Entity\Mahasiswa', 'access_mahasiswa', 'access_id', 'nim_mahasiswa'); 
    }
}

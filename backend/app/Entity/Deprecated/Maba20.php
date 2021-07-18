<?php

namespace App\Entity\Deprecated;

use Illuminate\Database\Eloquent\Model;

class Maba20 extends Model
{
    protected $table = '20_maba';
    protected $guarded = [];
    public $timestamps = false;

    public function penugasan() {
        return $this->hasOne('App\Entity\Deprecated\PenugasanPKKMB20', 'nim', 'nim');
    }

    public function presensiOh() {
        return $this->hasOne('App\Entity\Deprecated\PresensiOH20', 'nim', 'nim');
    }
}

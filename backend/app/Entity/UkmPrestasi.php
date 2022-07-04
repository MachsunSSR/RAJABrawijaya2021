<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class UkmPrestasi extends Model
{
    protected $table = '21_ukm_prestasi';
    protected $primaryKey = 'slug';
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];

}

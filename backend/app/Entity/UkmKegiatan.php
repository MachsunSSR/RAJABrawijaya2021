<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class UkmKegiatan extends Model
{
    protected $table = '21_ukm_kegiatan';
    protected $primaryKey = 'slug';
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];

}

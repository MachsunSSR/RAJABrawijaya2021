<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class UkmKriteria extends Model
{
    protected $table = '21_ukm_kriteria';
    protected $primaryKey = 'slug';
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];

}

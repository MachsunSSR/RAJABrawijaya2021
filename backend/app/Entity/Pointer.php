<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model;

class Pointer extends Model
{
    protected $table = 'pointer';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];
}

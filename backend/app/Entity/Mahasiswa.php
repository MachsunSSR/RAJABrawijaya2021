<?php

namespace App\Entity;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;

class Mahasiswa extends Model implements Authenticatable, JWTSubject
{
    use AuthenticableTrait;

    protected $table = 'mahasiswa';
    protected $primaryKey = 'nim';
    protected $guarded = [];
    public $timestamps = false;
    public $incrementing = false;

    public function accesses() {
        return $this->belongsToMany('App\Entity\Access', 'access_mahasiswa', 'nim_mahasiswa', 'access_id'); 
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}

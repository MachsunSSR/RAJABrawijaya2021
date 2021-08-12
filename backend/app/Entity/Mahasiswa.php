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
    protected $keyType = 'string';
    public $timestamps = false;
    public $incrementing = false;
    protected $guarded = [];

    public function accesses() {
        return $this->belongsToMany('App\Entity\Access', 'access_mahasiswa', 'nim_mahasiswa', 'access_id');
    }

    public function penugasan() {
        return $this->hasOne('App\Entity\Penugasan', 'nim', 'nim');
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

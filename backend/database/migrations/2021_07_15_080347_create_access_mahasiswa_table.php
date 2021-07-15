<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccessMahasiswaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('access_mahasiswa', function (Blueprint $table) {
            $table->unsignedBigInteger('nim_mahasiswa');
            $table->unsignedBigInteger('access_id');

            $table->foreign('access_id')->references('id')->on('access');
            $table->foreign('nim_mahasiswa')->references('nim')->on('mahasiswa');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('access_mahasiswa');
    }
}

<?php

use App\Entity\Access;
use Illuminate\Database\Seeder;

class AccessSeeder extends Seeder
{
    public function run()
    {
        $accesess = [
            [
                'access' => 'PUBLICATION'
            ],
            [
                'access' => 'UKM'
            ],
            [
                'access' => 'CRISIS_CENTER'
            ],
            [
                'access' => 'SUPERADMIN'
            ]
        ];

        Access::insert($accesess);
    }
}

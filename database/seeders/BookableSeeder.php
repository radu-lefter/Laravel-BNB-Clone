<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BookableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \App\Models\Bookable::factoryfactory()->count(100)->create(); 
    }
}

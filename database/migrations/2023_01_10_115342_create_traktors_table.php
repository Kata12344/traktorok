<?php

use App\Models\Traktor;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('traktors', function (Blueprint $table) {
            $table->id();
            $table->string('neve');
            $table->integer('sulya');
            $table->string('fajtaja');
            $table->string('szine');
            $table->timestamps();
        });
        Traktor::create(['neve'=>'Pünkösd', 'sulya'=> 2000, 'fajtaja'=>'markoló', 'szine'=>'sárga']);
        Traktor::create(['neve'=>'Menny', 'sulya'=> 13400, 'fajtaja'=>'kombájn', 'szine'=>'zöld']);
        Traktor::create(['neve'=>'Manó', 'sulya'=> 2000000, 'fajtaja'=>'trágyaszóró', 'szine'=>'piros']);
        Traktor::create(['neve'=>'Bika', 'sulya'=> 4500, 'fajtaja'=>'szedőgép', 'szine'=>'zöld']);
        Traktor::create(['neve'=>'Boka', 'sulya'=> 32000, 'fajtaja'=>'vetőgép', 'szine'=>'fekete']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('traktors');
    }
};

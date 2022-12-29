<?php

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
        Schema::create('website_ids', function (Blueprint $table) {
            $table->id();
            $table->string('internal_id')->nullable();
            $table->string('name')->unique();
            $table->string('cafe_supplies')->nullable();
            $table->string('car_cleaning')->nullable();
            $table->string('hand_sanitiser')->nullable();
            $table->string('insinc_products')->nullable();
            $table->string('packnet')->nullable();
            $table->string('rubbish_bags')->nullable();
            $table->string('disposable_gloves')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('website_ids');
    }
};

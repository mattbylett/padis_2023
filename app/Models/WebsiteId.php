<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WebsiteId extends Model
{
    use HasFactory;

    protected $fillable = [
        'internal_id',
        'name',
        'cafe_supplies',
        'car_cleaning',
        'hand_sanitiser',
        'insinc_products',
        'packnet',
        'rubbish_bags',
        'disposable_gloves',
    ];
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class BaseController extends Controller
{
    public $http;

    public $base_uri;

    public function __construct() 
    {
        $this->http = Http::withHeaders([
            'apiID' => config('services.website.api_id'),
            'apiKey' => config('services.website.api_key')
        ]);

        $this->base_uri = config('services.website.base_uri');
    }
}

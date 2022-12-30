<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class XeroConnect extends Controller
{
       public $http;

    public $base_uri;

    public function __construct() 
    {
        $this->http = Http::withHeaders([
            'clientId' => config('services.xero.client_id'),
            'clientSecret' => config('services.xero.client_secret')
        ]);

        $this->base_uri = config('services.xero.base_uri');
    }
}

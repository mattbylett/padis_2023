<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\NetSuite\NetSuitePadis;

class AuthenticationController extends Controller
{
    // Index Method
    public function index()
    {
        return view('netsuite.index');
    }

    public function authenticate()
    {
        $connection = new NetSuitePadis();

        do {
            $result = $connection->connect();
            Log::debug($result);
            // dd($result);
        } while ($result === ' this error');

        return $result;

    }

    public function create(Request $request)
    {
        dump($request);
    }
}

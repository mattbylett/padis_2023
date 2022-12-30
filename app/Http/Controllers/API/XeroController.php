<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\XeroConnect;
use Illuminate\Http\Request;

class XeroController extends XeroConnect
{
    // GET route for the Callback function from Xero
    public function index()
    {
        return view('xero.index');
    }

    // POST route for the Callback from Xero
    public function store(Request $request)
    {
        dd($request);
    }
}

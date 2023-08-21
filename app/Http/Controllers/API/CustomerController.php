<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\NetSuite\NetSuiteApi;
use Illuminate\Support\Facades\Log;

class CustomerController extends Controller
{

    public function netsuite()
    {
        return view('netsuite.dashboard');
    }



    // Get All Customers

    public function updateCustomer(Request $request)
    {
    Log::info("API Customer request call to NetSuite ");

    $id = $request->internalId;
    Log::debug('id : ' . $id);
        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getSingleCustomer($id);

        } while ($result === ' this error');



        Log::info('Back In Update Customer');

        
        return view('customers.index');
    }

    public function show($id)
    {
        Log::info('Single Customer: ' . $id);


        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getSingleCustomer($id);
        } while ($result == 'error');

        // dd($result);
    }
}

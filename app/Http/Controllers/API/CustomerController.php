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
    Log::info(' This Is The Request Data');
    Log::debug(json_decode($request));
    $id = 37996;
    Log::debug('id : ' . $id);
        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getSingleCustomer($id);

        } while ($result === ' this error');

        $customerData = 
        [
            'companyName' => $result->entityId,
            'email' => $result->email
        ];

        Log::info('Back In Update Customer');
        Log::debug(json_encode($customerData));

        
        return $customerData;
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

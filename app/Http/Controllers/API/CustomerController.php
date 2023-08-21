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
    Log::debug($request->all());
    $id = $request->input('internalID');
    Log::debug('id : ' . $id);
        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getSingleCustomer($id);

        } while ($result === ' this error');

        $customerData = 
        [
            'mbr_company'=> $result->entityId,
            'mbr_email' => $result->email,
            'memberGroups' => [
                [
                    "name" => $result->category->refName
                ]      
            ]
        ];

        Log::info('Logging The Customer Data From Netsuite');
        Log::debug(json_encode($customerData));


        $mbrEmail = $customerData['mbr_email'];

        Log::info('Getting The Email To Search For Customer in API');
        Log::debug(json_encode($mbrEmail));

        
        return $customerData;
    }

    public function show($id)
    {
        Log::info('Single Customer: ' . $id);


        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getSingleCustomer($id);
        } while ($result == 'error');

        // dd($result;)
    }
}

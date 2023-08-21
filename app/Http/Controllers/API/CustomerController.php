<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\WebsiteId;
use App\NetSuite\NetSuiteApi;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

       // Connect to Website World
        $http_insinc = Http::withHeaders([
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
        ]);

        $base_uri = config("services.website.base_uri");
       
        // call The API and see if the Email Exists - Fetch ID
        try {
            $response = $http_insinc->get(
                "{$base_uri}/member", $mbrEmail
            );
            $customer = $response->json();

            Log::info('Call Made To Website World.  Logging Customer');
            Log::debug($customer);

        // If Email Exists - then Update (Include Id)


        // If email Doesnt exist - then Create (same request - no ID)

        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }


        
        return;
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

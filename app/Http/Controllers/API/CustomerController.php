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
    $id = $request->input('internalID');
    $mbrCompany = $request->input('customerName');
    $mbrEmail = $request->input('customerEmail');
    $mbrGroups = $request->input('category');
    $mbr_level = '0';
    $subs = $request->input('subscriptions');
    foreach ($subs as $subscription) {
        if ($subscription['id'] == 14 && $subscription['value'] == true) {
            $mbr_level = 135;
        break;
        }
    }  
        if($mbr_level == 0) {
            $unsubscribe = 
            [
                'mbr_reference' => $id,
                'mbr_email' => $mbrEmail,
                'mbr_level' => 0
            ];

        $http_insinc = Http::withHeaders([
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
        ]);

        $base_uri = config("services.website.base_uri");
       
        // call The API and see if the Email Exists - Fetch ID
        try {

            $url = "{$base_uri}/member?mbr_reference={$id}";

            $response = $http_insinc->post("{$url}", $unsubscribe);

        // If Email Exists - then Update (Include Id)
            if ($response->successful()) {
                $customer = $response->json();
                Log::debug('Customer Unsubscribed : ' . json_encode($customer));
            } else {
                Log::error('Request failed with status : ' . $response->status());
                // Handle the failure, maybe retry or notify someone
            }

        // If email Doesnt exist - then Create (same request - no ID)

        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        } 

        }

    $netSuiteApi = new NetSuiteApi();

        do {
        $result = $netSuiteApi->getSingleCustomer($id);
        } while ($result === ' this error');

        if (property_exists($result, 'custentity15') && isset($result->custentity15)) {
            $mbrName = $result->custentity15;
            // $mbrEmail = $result->custentity5;
            // Log::debug("Newsletter Name: ", ["name" => $mbrName]);
        if (property_exists($result, 'custentity5') && isset($result->custentity5)) {
            $mbrEmail = $result->custentity5;
            Log::debug("Newsletter Email: ", ["email" => $mbrEmail]);
        }  

        $category = $result->category->refName;
        if(isset($category)) {
            $cat = "Category: $category - Netsuite";
            // Log::debug('Category Name: ' . json_encode($cat));
        }


        $terms = $result->terms->refName;
        if(isset($terms)) {
            // Log::debug('Terms: ' . $terms);
        }

        $termCategory = "Terms: $terms - Netsuite";

        $priceLevel = $result->priceLevel->refName;
        if(isset($priceLevel)){
            // Log::debug('Price Level: ' . $priceLevel);
        }
        $priceCategory = "Price Level: $priceLevel";

        switch ($priceLevel) {
            case 'Base Price':
                $discount = 0;
                break;
            case '10% Discount Off Base':
                $discount = 10;
                break;
            case '100% Discount Off Base':
                $discount = 100;
                break;
            case '12.5% Discount Off Base':
                $discount = 12.5;
                break;
            case '15% Discount Off Base':
                $discount = 15;
                break;
            case '2.0% Discount Off Base':
                $discount = 2;
                break;
            case '20% Discount Off Base':
                $discount = 20;
                break;
            case '5% Discount Off Base':
                $discount = 5;
                break;
            case '7.5% Discount Off Base':
                $discount = 7.5;
                break;
            
            default:
               $discount = 0;
                break;
        }

        $customerData = 
        [
            'DeleteMissingArrayElements' => true,
            'mbr_name'=> $mbrName,
            'mbr_company'=> $mbrCompany,
            'mbr_email' => $mbrEmail,
            'memberGroups' => [
                   ["name" => $cat],
                   ["name" => $termCategory],
                   ["name" => $priceCategory]   
                ],
            'mbr_discount' => $discount,
            'mbr_reference' => $id
        ];

        Log::info('Logging The Customer Data From Netsuite');
        Log::debug(json_encode($customerData));


        $mbrEmail = $customerData['mbr_email'];

        // Log::info('Getting The Email To Search For Customer in API');
        // Log::debug(json_encode($mbrEmail));

       // Connect to Website World
        $http_insinc = Http::withHeaders([
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
        ]);

        $base_uri = config("services.website.base_uri");
       
        // call The API and see if the Email Exists - Fetch ID
        try {

            $url = "{$base_uri}/member?mbr_reference={$id}";
            // $url = "{$base_uri}/member?mbr_email={$mbrEmail}";
            // $response = $http_insinc->get(
            //     "{$base_uri}/member?mbr_email={$mbrEmail}", $mbrEmail
            // );

            $response = $http_insinc->post("{$url}", $customerData);

        // If Email Exists - then Update (Include Id)

            if ($response->successful()) {
                $customer = $response->json();
                Log::debug('Customer Updated : ' . json_encode($customer));
            } else {
                Log::error('Request failed with status : ' . $response->status());
                // Handle the failure, maybe retry or notify someone
            }

        // If email Doesnt exist - then Create (same request - no ID)

        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        } 

        } else {

            return;
        }
       
        return;
    }


}





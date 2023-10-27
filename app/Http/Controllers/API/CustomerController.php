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

    private function sendRequestToWebsiteWorld($url, $data)
    {
        $http_insinc = Http::withHeaders([
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
        ]);



        try {
            $response = $http_insinc->post($url, $data);

            if ($response->successful()) {
                $customer = $response->json();
                Log::debug('Customer Updated : ' . json_encode($customer));
            } else {
                Log::error('Request failed with status : ' . $response->status());
            }
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
    }
    // Netsuite Triggers URL after Update

    public function updateCustomer(Request $request)
    {
        //Get Needed Fields from the request
        $id = $request->input('internalID');
        $mbrCompany = $request->input('customerName');
        $mbrEmail = $request->input('customerEmail');
        $mbrGroups = $request->input('category');
        $base_uri = config("services.website.base_uri");
        //Subsctiptions Relate to Opt in and  Opt Out - We need to handle this first
        $mbr_level = 100; // set to unsubscribe by default
        $subs = $request->input('subscriptions');

        Log::debug('Subscriptions', ['Subscription : ' => $subs]);
        if ($subs) {
            foreach ($subs as $subscription) {
                // check to see if Newsletter For  Website World is set  and If So  Set mbr_level to  subscribed
                if ($subscription['id'] == 14 && $subscription['value'] == true) {
                    $mbr_level = 135;
                break;  // as soon as its set - move on
                }
            } 
        }
 
        // if mbr_level is still zero then unsuubscribe in Website World
        if($mbr_level == 100) {
            $unsubscribe = 
            [
                'mbr_reference' => $id,
                'mbr_email' => $mbrEmail,
                'mbr_level' => 100
            ];
          // Call the private function to post Subscription details  
            $url = "{$base_uri}/member?mbr_reference={$id}";
            $this->sendRequestToWebsiteWorld($url, $unsubscribe);

        }

        // Call the Netsuite Class and pull in all the customer data for this customer
        $netSuiteApi = new NetSuiteApi();

        do {
        $result = $netSuiteApi->getSingleCustomer($id);
        } while ($result === ' this error');

        // Check to see if Customer name for Newsletters is set and if it is so the update
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

        // Create  the mapping array for pushing through to Website World
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
            'mbr_reference' => $id,
            'mbr_level' => $mbr_level
        ];

        Log::info('Logging The Customer Data From Netsuite');
        Log::debug(json_encode($customerData));


       // Connect to Website World using the private function
        $url = "{$base_uri}/member?mbr_reference={$id}";
        $this->sendRequestToWebsiteWorld($url, $customerData);

        } else {
            // if Customer Name For Newlsetter does not exist.  Do Nothing
            return;
        }
       
        return;
    }


}





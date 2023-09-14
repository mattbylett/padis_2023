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
    $mbrCompany = $request->input('customerName');
    $mbrEmail = $request->input('customerEmail');
    $mbrGroups = $request->input('category');
    $mbrName = $request->input('attention');
    $subs    = $request->input('subscriptions');

    Log::debug('id : ' . $id);
    Log::debug( 'mbr_name ' . $mbrName);
    Log::debug( 'subscriptions ' . json_encode($subs));
    

    $netSuiteApi = new NetSuiteApi();

        do {
        $result = $netSuiteApi->getSingleCustomer($id);
        } while ($result === ' this error');

        do {
            $subscriptions = $netSuiteApi->getSubscriptions($id);
        } while ($result === ' this error');

     

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
        // foreach ($subs as $sub) {
        //     Log::debug('subscriptions retuned from the Script : ' . $sub->refName);
        // }

        // $customerData = 
        // [
        //     'DeleteMissingArrayElements' => true,
        //     'mbr_company'=> $mbrCompany,
        //     'mbr_email' => $mbrEmail,
        //     'memberGroups' => [
        //         [
        //             "name" => $cat
        //         ]      
        //     ],
        //     'terms' => $terms,
        //     'priceLevel' => $priceLevel
        // ];
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
            'mbr_reference' => $id,
            'mbr_level'     => 135
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

            $url = "{$base_uri}/member?mbr_email={$mbrEmail}";
            // $response = $http_insinc->get(
            //     "{$base_uri}/member?mbr_email={$mbrEmail}", $mbrEmail
            // );

            $response = $http_insinc->post("{$url}", $customerData);

        // If Email Exists - then Update (Include Id)

            if ($response->successful()) {
                $customer = $response->json();
                Log::debug('Customer: ' . json_encode($customer));
            } else {
                Log::error('Request failed with status: ' . $response->status());
                // Handle the failure, maybe retry or notify someone
            }

        // If email Doesnt exist - then Create (same request - no ID)

        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }        
        return;
    }


}


?>

<table id="subscriptions_splits" width="100%" border="0" cellspacing="0" cellpadding="0" class="listtable listborder uir-list-table" style="position: relative;"><tbody><tr class="uir-machine-headerrow" id="subscriptionsheader"><td height="100%" style="" class="listheadertdleft listheadertextbctr uir-column-small" width="5%" data-label="Subscribed"><div class="listheader">Subscribed</div></td><td height="100%" style="cursor:hand;" class="listheadertd listheadertextb uir-column-large" data-label="Subscription" onclick="l_sort(1,'SELECT',false,null,'subscriptions','subscription',null,1); setWindowChanged(window, true); return false;"><div class="listheader">Subscription&nbsp;<span id="subscriptionsdir1" class="listheadersort"></span></div></td><td height="100%" style="cursor:hand;" class="listheadertd listheadertextb uir-column-small" data-label="Last Modified" onclick="l_sort(2,'DATETIME',false,null,'subscriptions','lastmodifieddate',null,2); setWindowChanged(window, true); return false;"><div class="listheader">Last Modified&nbsp;<span id="subscriptionsdir2" class="listheadersort"></span></div></td></tr>
<tr class="uir-list-row-tr uir-list-row-odd" id="subscriptionsrow0"><td class="uir-list-row-cell listtextctr"><span id="subscribed1_fs" class="checkbox_ck" onclick="NLCheckboxOnClick(this);"><input type="checkbox" class="checkbox" value="T" name="subscribed1" id="subscribed1" checked="" aria-label="Subscribed" onkeypress="NLCheckboxOnKeyPress(event);  return true;" onclick="setEventCancelBubble(event); nlapiSelectLineItem('subscriptions',1);subscriptionsSyncRow(1,true, false, 'subscribed');subscriptionsRecalcMachine();nlapiFieldChanged('subscriptions','subscribed', nlapiGetCurrentLineItemIndex('subscriptions'), null); return true;" onchange="NLCheckboxOnChange(this);"><img class="checkboximage" src="/images/nav/ns_x.gif" alt=""></span></td><td class="uir-list-row-cell listtext">Billing Communication</td><td class="uir-list-row-cell listtext">09/03/2021 4:46 pm</td></tr>
<tr class="uir-list-row-tr uir-list-row-even" id="subscriptionsrow1"><td class="uir-list-row-cell listtexthlctr"><span id="subscribed2_fs" class="checkbox_ck" onclick="NLCheckboxOnClick(this);"><input type="checkbox" class="checkbox" value="T" name="subscribed2" id="subscribed2" checked="" aria-label="Subscribed" onkeypress="NLCheckboxOnKeyPress(event);  return true;" onclick="setEventCancelBubble(event); nlapiSelectLineItem('subscriptions',2);subscriptionsSyncRow(2,true, false, 'subscribed');subscriptionsRecalcMachine();nlapiFieldChanged('subscriptions','subscribed', nlapiGetCurrentLineItemIndex('subscriptions'), null); return true;" onchange="NLCheckboxOnChange(this);"><img class="checkboximage" src="/images/nav/ns_x.gif" alt=""></span></td><td class="uir-list-row-cell listtexthl">Marketing</td><td class="uir-list-row-cell listtexthl">09/03/2021 4:46 pm</td></tr>
<tr class="uir-list-row-tr uir-list-row-odd" id="subscriptionsrow2"><td class="uir-list-row-cell listtextctr"><span id="subscribed3_fs" class="checkbox_ck" onclick="NLCheckboxOnClick(this);"><input type="checkbox" class="checkbox" value="T" name="subscribed3" id="subscribed3" checked="" aria-label="Subscribed" onkeypress="NLCheckboxOnKeyPress(event);  return true;" onclick="setEventCancelBubble(event); nlapiSelectLineItem('subscriptions',3);subscriptionsSyncRow(3,true, false, 'subscribed');subscriptionsRecalcMachine();nlapiFieldChanged('subscriptions','subscribed', nlapiGetCurrentLineItemIndex('subscriptions'), null); return true;" onchange="NLCheckboxOnChange(this);"><img class="checkboximage" src="/images/nav/ns_x.gif" alt=""></span></td><td class="uir-list-row-cell listtext">Newsletters</td><td class="uir-list-row-cell listtext">09/03/2021 4:46 pm</td></tr>
<tr class="uir-list-row-tr uir-list-row-even" id="subscriptionsrow3"><td class="uir-list-row-cell listtexthlctr"><span id="subscribed4_fs" class="checkbox_ck" onclick="NLCheckboxOnClick(this);"><input type="checkbox" class="checkbox" value="T" name="subscribed4" id="subscribed4" checked="" aria-label="Subscribed" onkeypress="NLCheckboxOnKeyPress(event);  return true;" onclick="setEventCancelBubble(event); nlapiSelectLineItem('subscriptions',4);subscriptionsSyncRow(4,true, false, 'subscribed');subscriptionsRecalcMachine();nlapiFieldChanged('subscriptions','subscribed', nlapiGetCurrentLineItemIndex('subscriptions'), null); return true;" onchange="NLCheckboxOnChange(this);"><img class="checkboximage" src="/images/nav/ns_x.gif" alt=""></span></td><td class="uir-list-row-cell listtexthl">Newsletters for Website World</td><td class="uir-list-row-cell listtexthl">&nbsp;</td></tr>
<tr class="uir-list-row-tr uir-list-row-odd" id="subscriptionsrow4"><td class="uir-list-row-cell listtextctr"><span id="subscribed5_fs" class="checkbox_ck" onclick="NLCheckboxOnClick(this);"><input type="checkbox" class="checkbox" value="T" name="subscribed5" id="subscribed5" checked="" aria-label="Subscribed" onkeypress="NLCheckboxOnKeyPress(event);  return true;" onclick="setEventCancelBubble(event); nlapiSelectLineItem('subscriptions',5);subscriptionsSyncRow(5,true, false, 'subscribed');subscriptionsRecalcMachine();nlapiFieldChanged('subscriptions','subscribed', nlapiGetCurrentLineItemIndex('subscriptions'), null); return true;" onchange="NLCheckboxOnChange(this);"><img class="checkboximage" src="/images/nav/ns_x.gif" alt=""></span></td><td class="uir-list-row-cell listtext">Phone Calls</td><td class="uir-list-row-cell listtext">09/03/2021 4:46 pm</td></tr>
<tr class="uir-list-row-tr uir-list-row-even" id="subscriptionsrow5"><td class="uir-list-row-cell listtexthlctr"><span id="subscribed6_fs" class="checkbox_ck" onclick="NLCheckboxOnClick(this);"><input type="checkbox" class="checkbox" value="T" name="subscribed6" id="subscribed6" checked="" aria-label="Subscribed" onkeypress="NLCheckboxOnKeyPress(event);  return true;" onclick="setEventCancelBubble(event); nlapiSelectLineItem('subscriptions',6);subscriptionsSyncRow(6,true, false, 'subscribed');subscriptionsRecalcMachine();nlapiFieldChanged('subscriptions','subscribed', nlapiGetCurrentLineItemIndex('subscriptions'), null); return true;" onchange="NLCheckboxOnChange(this);"><img class="checkboximage" src="/images/nav/ns_x.gif" alt=""></span></td><td class="uir-list-row-cell listtexthl">Product Updates</td><td class="uir-list-row-cell listtexthl">09/03/2021 4:46 pm</td></tr>
<tr class="uir-list-row-tr uir-list-row-odd" id="subscriptionsrow6"><td class="uir-list-row-cell listtextctr"><span id="subscribed7_fs" class="checkbox_ck" onclick="NLCheckboxOnClick(this);"><input type="checkbox" class="checkbox" value="T" name="subscribed7" id="subscribed7" checked="" aria-label="Subscribed" onkeypress="NLCheckboxOnKeyPress(event);  return true;" onclick="setEventCancelBubble(event); nlapiSelectLineItem('subscriptions',7);subscriptionsSyncRow(7,true, false, 'subscribed');subscriptionsRecalcMachine();nlapiFieldChanged('subscriptions','subscribed', nlapiGetCurrentLineItemIndex('subscriptions'), null); return true;" onchange="NLCheckboxOnChange(this);"><img class="checkboximage" src="/images/nav/ns_x.gif" alt=""></span></td><td class="uir-list-row-cell listtext">Surveys</td><td class="uir-list-row-cell listtext">09/03/2021 4:46 pm</td></tr>
</tbody><object type="text/html" tabindex="-1" style="display:block; position:absolute; left:0; top:0; width:100%; height:100%; overflow:hidden; pointer-events:none; z-index:-1; opacity:0;" data="about:blank"></object></table>
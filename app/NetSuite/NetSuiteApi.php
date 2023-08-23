<?php

namespace App\NetSuite;
use Illuminate\Support\Facades\Log;

class NetSuiteApi
{
    public function __construct()
    {
        $netsuite_account_id = env("NETSUITE_ACCOUNT_ID");
        $netsuite_consumer_key = env("NETSUITE_CONSUMER_KEY");
        $netsuite_consumer_secret = env("NETSUITE_CONSUMER_SECRET");
        $netsuite_token_id = env("NETSUITE_TOKEN_ID");
        $netsuite_token_secret = env("NETSUITE_TOKEN_SECRET");
        $netsuite_base_url = env("NETSUITE_BASE_URL");

        $this->baseUrl =
            "https://" .
            $netsuite_account_id .
            ".suitetalk.api.netsuite.com/services/rest/record/v1";

        $this->signatureMethod = "HMAC-SHA256";
        $this->version = "1.0";
        $this->account = $netsuite_account_id;
        $this->consumerKey = $netsuite_consumer_key;
        $this->tokenId = $netsuite_token_id;
        $this->consumerSecret = $netsuite_consumer_secret;
        $this->tokenSecret = $netsuite_token_secret;

        
    }


          

    private function sendRequest($httpMethod, $path, $is_full_path = false)
    {
        $this->nonce = substr(
            str_shuffle(
                "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            ),
            0,
            20
        );

        $this->timestamp = time();

        $url = $this->baseUrl . $path;
        if ($is_full_path) {
            $url = $path;
        }

        $baseString =
            $httpMethod .
            "&" .
            rawurlencode($url) .
            "&" .
            rawurlencode(
                "oauth_consumer_key=" .
                    rawurlencode($this->consumerKey) .
                    "&oauth_nonce=" .
                    rawurlencode($this->nonce) .
                    "&oauth_signature_method=" .
                    rawurlencode($this->signatureMethod) .
                    "&oauth_timestamp=" .
                    rawurlencode($this->timestamp) .
                    "&oauth_token=" .
                    rawurlencode($this->tokenId) .
                    "&oauth_version=" .
                    rawurlencode($this->version)  
            );

        $key =
            rawurlencode($this->consumerSecret) .
            "&" .
            rawurlencode($this->tokenSecret);

        $signature = rawurlencode(base64_encode(
            hash_hmac("sha256", $baseString, $key, true)
        ));

        $header = [
            "Authorization: OAuth realm=\"$this->account\",oauth_consumer_key=\"$this->consumerKey\",oauth_token=\"$this->tokenId\",oauth_signature_method=\"HMAC-SHA256\",oauth_timestamp=\"$this->timestamp\",oauth_nonce=\"$this->nonce\",oauth_version=\"$this->version\",oauth_signature=\"$signature\"",
            "Cookie: NS_ROUTING_VERSION=LAGGING",
            "Cache-Control: no-cache",
            "Content-Type: application/json"
        ];

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => $httpMethod,
            CURLOPT_HTTPHEADER => $header,

        ]);

        $response = curl_exec($curl);

        if ($response == false) {

            curl_close($curl);
            return "curl if error";
        } else {
            $info = curl_getinfo($curl);
            $http_result = $info["http_code"];
            $err = curl_error($curl);
            if ($http_result == "200") {
                curl_close($curl);
                return json_decode($response);
            } else {
                curl_close($curl);
                Log::error('cURL Error: ' . curl_error($curl));
                return "curl else error";
            }
        }

     }

    public function getOneProductInfo($product_id)
    {
        $path = "/inventoryitem/" . $product_id;
        $httpMethod = "GET";

        $result = $this->sendRequest($httpMethod, $path);
        return $result;
    }

    public function getBasePrice($product_id)
    {
        $path =
            "/inventoryitem/" . $product_id . "/price/quantity=0,pricelevel=1";
        $httpMethod = "GET";

        $result = $this->sendRequest($httpMethod, $path);
        if ($result == "error") {
            return $result;
        } else {
            if (isset($result->price)) {
                return $result->price;
            } else {
                return 0;
            }
        }
    }

    public function getVendorName($product_id)
    {
        $path = "/inventoryitem/" . $product_id . "/itemVendor";
        $httpMethod = "GET";

        $result = $this->sendRequest($httpMethod, $path);
        if ($result == "error") {
            return $result;
        } else {
            if (isset($result->items[0]->links[0]->href)) {
                $vendorLink = $result->items[0]->links[0]->href;
                $result = $this->sendRequest($httpMethod, $vendorLink, true);

                if ($result == "error") {
                    return $result;
                } else {
                    if (isset($result->vendor->refName)) {
                        return $result->vendor->refName;
                    } else {
                        return "";
                    }
                }
            } else {
                return "";
            }
        }
    }

    public function getEnviromentImpact($product_id)
    {
        $path = "/inventoryitem/" . $product_id . "/custitem4";
        $httpMethod = "GET";

        $result = $this->sendRequest($httpMethod, $path);
        if ($result == "error") {
            return $result;
        } else {
            if (isset($result->items[0]->refName)) {
                return $result->items[0]->refName;
            } else {
                return "";
            }
        }
    }

    public function getWebAdditionalTxt($product_id)
    {
        $path = "/inventoryitem/" . $product_id . "/custitem28";
        $httpMethod = "GET";

        $result = $this->sendRequest($httpMethod, $path);
        if ($result == "error") {
            return $result;
        } else {
            if (isset($result->items[0]->refName)) {
                return $result->items[0]->refName;
            } else {
                return "";
            }
        }
    }

    //Customer Requests
    public function getAllCustomers()
    {

        Log::debug("In the Customer Method");
        $path = "/customer";
        $httpMethod ="GET";
        $result = $this->sendRequest($httpMethod, $path); 

        return $result;        

    }

    public function getSingleCustomer($id)
    {
        $path = "/customer/" . $id;
        $httpMethod = "GET";

        $result = $this->sendRequest($httpMethod, $path);

        Log::info('This is inside the Netsuite API Call Result...');
        Log::debug($path);
        // Log::debug(json_encode($result));
        return $result;
    }

    public function getSubscriptions($id)
    {
        $path = "/customer/" . $id . "/subscriptions/";
        $httpMethod = "GET";
        $subscriptions = $this->sendRequest($httpMethod, $path);

        Log::info('Getting the Subscription Data from the API');
        Log::debug(json_encode($subscriptions));

        return $subscriptions;

    }

}

<?php

namespace App\NetSuite;
use Illuminate\Support\Facades\Log;

class NetSuitePadis
{
    public function __construct()
    {
        $netsuite_account_id = env("NETSUITE_ACCOUNT_ID");
        $netsuite_client_id = env("PADIS_OAUTH_Client_ID");
        $netsuite_consumer_secret = env("PADIS_OAUTH_Client_Secret");
        $netsuite_base_url = env("NETSUITE_BASE_URL");

        $this->baseUrl =
            "https://" .
            $netsuite_account_id .
            ".app.netsuite.com/app/login/oauth2/authorize.nl";
        $this->scope = "rest_webservices";
        $this->redirect_uri = "https://padis_insinc_2023.test/api/authorize";
        $this->response_type = 'code';
        $this->client_id = $netsuite_client_id;
        $this->state = substr(
          str_shuffle(
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          ),
         0,
         24
        );

    }

    // Connect & Authorize The App
    public function connect()
    {
        $params = 
            "scope=" . 
            $this->scope . 
            "&redirect_uri=" . 
            rawurlencode($this->redirect_uri) . 
            "&response_type=" . 
            $this->response_type . 
            "&client_id=" . 
            $this->client_id . 
            "&state=" . 
            $this->state;

        $url = $this->baseUrl . "?" . $params;

        dump($url);


        return view('netsuite.index')->with($url);


}

}
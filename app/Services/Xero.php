<?php 

namespace App\Services;

class Xero 
{
  public function __construct() 
  {
    // Set the variables needed to connect - Likely consumer key & Secret
    $clientId = config('services.xero.client_id');
    $clientSecret = config('services.xero.client_secret');

    // Set the Base URL for Xero connections
    $baseUri = config('services.xero.base_uri');

  } // End Constructor

  // Send Requests
}
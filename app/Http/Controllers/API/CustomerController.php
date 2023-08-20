<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Netsuite\NetsuiteApi;
use Illuminate\Support\Facades\Log;

class CustomerController extends Controller
{

    public function netsuite()
    {
        return view('netsuite.dashboard');
    }



    // Get All Customers

    public function index()
    {
    Log::info("API Customer request call to NetSuite ");

        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getAllCustomers();
            Log::debug($result);
            // dd($result);
        } while ($result === ' this error');

        $customers = $result;

        dd($customers);
        
        return view('customers.index', compact('customers'));
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

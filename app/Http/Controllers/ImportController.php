<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Product;
use App\Models\WebsiteId;
use App\Imports\ProductMaster;
use App\Imports\WebsiteIds;

class ImportController extends Controller
{
    // Return the import screen
    public function index()
    {
        return view('imports.index');
    }

    // Product Master Import
    public function master(Request $request)
    {
        $upload = $request->file("select_file");
        // dd($upload);
        try {
            Excel::import(new ProductMaster(), $upload);
            $notification = [
                "message" => "Products Imported Successfully",
                "alert-type" => "success",
            ];
        } catch (\Throwable $th) {
            print_r($th->getMessage());
            die();
            $notification = [
                "message" => $th->getMessage(),
                "alert-type" => "error",
            ];
        }

        return redirect()
            ->route("product.admin.index")
            ->with($notification);
    }

    // Product Website Ids Import
    public function webids(Request $request)
    {

        $upload = $request->file("select_file");
        // dd($upload);
        try {
            Excel::import(new WebsiteIds(), $upload);
            $notification = [
                "message" => "Website Ids Imported Successfully",
                "alert-type" => "success",
            ];

        } catch (\Throwable $th) {
            print_r($th->getMessage());
            die();
            $notification = [
                "message" => $th->getMessage(),
                "alert-type" => "error",
            ];
        }

        return redirect()
            ->route("product.admin.index")
            ->with($notification);
    }
}

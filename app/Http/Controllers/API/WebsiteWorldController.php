<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;


class WebsiteWorldController extends BaseController
{

    public function index()
    {
        return view('website-world.index');
    }


    public function updateFeaturedProducts(Request $request)
    {
        $id = $request->id;
        $promotions = $request->promotions;

        if(isset($promotions)) 
        {
        $data = [
            "id" => $id,
            "promotions" => $promotions
        ];
        } else {
            $data = [
             "id" => $id,
             "promotions" => [],
             "DeleteMissingArrayElements" => true
            ];
        }



        $update = json_encode($data);

        Log::info($data);

        $http_insinc = Http::withHeaders([
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
            "Content-Type" => 'application/json'
        ]);

        $base_uri = config("services.website.base_uri");

        try {
            $response = $http_insinc->post(
                "{$base_uri}/product",$data
            );
            $result = $response->json();
            Log::info($result);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }

        return $result;

  }

    public function getFeaturedProducts(Response $response) 
    {
        $update = $response->getContent();
dd($update);
        return view('website-world.show', compact('update'));
    }
}

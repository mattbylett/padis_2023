<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use App\Models\Product;
use App\Models\WebsiteId;
use App\NetSuite\NetSuiteApi;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class ProductController extends BaseController
{

    public function all()
    {
        $response = $this->http->get("{$this->base_uri}/products");
        $result = $response->json();

        foreach ($result["data"] as $item) {
            $product = Product::where("pid", $item["id"])->first();

            if (!$product) {
                Product::create([
                  "name" => $item["p_code"] ?? null,
                //   "internal_id" => $item[""] ?? null,
                  "pid" => $item["id"] ?? null,
                  "website_additional_text" => $item["p_additionaltext"] ?? null,
                  "vendor_name" => $item["p_suppliername"] ?? null,
                  "website_availability_text" => $item["p_outofstockmessage"] ?? null,
                  "website_description" => $item["p_tab_contents"] ?? null,
                  "website_show_buy_button" => $item["p_showbuybutton"] ?? null,
                  "website_unit_of_measure" => $item["p_uom"] ?? null,
                  "website_exclude_standard_freight_fees" => $item["p_freight_exclude"] ?? null,
                  "website_fixed_freight_cost" => $item["p_shipping"] ?? null,
                  "website_freight_weight" => $item["p_weight"] ?? null,
                  "website_item_title" => $item["p_subtitle"] ?? null,
                  "website_more_information" => $item["p_tab_moreinformation"] ?? null,
                  "website_pdf_documents" => $item["p_url"] ?? null,
                  "website_product_features" => $item["p_tab_features"] ?? null,
                  "website_quantity_in_stock" => $item["p_qtyinstock"] ?? null,
                  "website_remove_buy_button" => $item["p_removebuybutton"] ?? null,
                  "website_stock_available" => $item["p_qtyinstock"] ?? null,
                  "website_video" => $item["p_tab_video"] ?? null,
                  "display_name" => $item["p_title"] ?? null,
                  "description" => $item["p_details"] ?? null,
                  "promotion_end_date" => $item["p_sale_ends"] ?? null,
                  "promotional_item" => $item["p_promote"] ?? null,
                  "sales_price" => $item["p_price"] ?? null,
                  "website_categories" => $item["p_categories"] ?? null,
                ]);
            }
        }

        return $result;
    }

    public function show(ProductShow $request)
    {
        $response = $this->http->get(
            "{$this->base_uri}/product/{$request->pid}"
        );
        $result = $response->json();
        Log::info($result);

        return $result["data"];
    }

    public function store(ProductStore $request)
    {
        try {
            $response = $this->http->post(
                "{$this->base_uri}/product",
                $request->all()
            );
            $result = $response->json();
            Log::info($result);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
    }

    public function update(ProductUpdate $request)
    {
        try {
            $response = $this->http->post(
                "{$this->base_uri}/product/{$request->pid}",
                $request->all()
            );
            $result = $response->json();
            Log::info($result);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
    }

public function featuredProducts(Request $request)
{
    Log::info('Featured Products Triggered. This is the Request...');
    Log::debug($request->all());

    $products = $request->all();
    $updatedProducts = [];

    foreach ($products as $product) {
        $updatedProduct = [
            'DeleteMissingArrayElements' => true,
            'p_code' => $product['itemId'],
            'promotions' => [
                'promo_tag' => 'Home Page - Featured',
                'promo_order' => 1
            ]
        ];
        $updatedProducts[] = $updatedProduct;

        // Connect to Website World
        $http_insinc = Http::withHeaders([
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
        ]);

        $base_uri = config("services.website.base_uri");
        try {
            $response = $http_insinc->post("{$base_uri}/product", $updatedProduct);
            $result = $response->json();
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }
    }

    Log::debug('Updated Products: ' . json_encode($updatedProducts));
    
    return;
}


public function updateProduct(Request $request)
    {
        Log::info("API request call from NetSuite ");

        $id = $request->internalID;
        $type = $request->type;
        if (!isset($request->internalID)) {
            return;
        }

        // Log::info("API request from NetSuite " . $id);

        // Retrieve pricingData from the request
    $pricingData = $request->input('pricingData', null);
        Log::info('Getting Pricing Data');
    if ($pricingData) {
        Log::info("Received Pricing Data: " . json_encode($pricingData));

        // Now, you can handle the pricing data as needed.
        // For example:
        $baseDiscount = $pricingData['baseDiscount'] ?? null;
        $quantityPricingType = $pricingData['quantityPricingType'] ?? null;
        
      Log::debug('Base Discount: ', ['base' => $baseDiscount]);
      Log::debug('Pricing Data: ', ['data' => $quantityPricingType]);
    }

        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getOneProductInfo($id);
        } while ($result == "error");

        do {
            $base_price = $netSuiteApi->getBasePrice($id);
        } while ($base_price === "error");

        do {
            $vendor_name = $netSuiteApi->getVendorName($id);
        } while ($vendor_name === "error");

        do {
            $environment_impact = $netSuiteApi->getEnviromentImpact($id);
        } while ($environment_impact === "error");

        do {
            $net_website_additional_text = $netSuiteApi->getWebAdditionalTxt(
                $id
            );
        } while ($net_website_additional_text === "error");

        // Log::info("NetSuite Result = " . json_encode($result));

        // $id = $request->internalID;
        // if (!isset($id)) {
        //     return;
        // }

        // $netSuiteApi = new NetSuiteApi();

        // Fetch product info
        $productInfo = $netSuiteApi->fetchFromNetSuite("GET", "/inventoryitem/" . $id);
 //       Log::info('Product Info Result: ' . json_encode($productInfo));

        $p_price = $base_price;

        // Fetch prices for different levels
        $prices = [];
        for ($i = 1; $i <= 5; $i++) {
            $prices["pricequantity" . $i] = $netSuiteApi->getPriceByLevel($id, $i);
        }

        $p_priceBreakA_minqty = $prices['pricequantity1'];
        $p_priceBreakB_minqty = $prices['pricequantity2'];
        $p_priceBreakC_minqty = $prices['pricequantity3'];
        $p_priceBreakD_minqty = $prices['pricequantity4'];
        $p_priceBreakE_minqty = $prices['pricequantity5'];

        $p_code = $result->itemId;

      Log::info("prices = " . json_encode($prices) );

        $website_display_insinc = false;
        if (isset($result->custitem14)) {
            if ($result->custitem14) {
                $website_display_insinc = true;
            }
        }

        $p_suppliername = $vendor_name;

        $p_suppliercode = "";
        if (isset($result->vendorName)) {
            $p_suppliercode = $result->vendorName;
        }

        $p_showbuybutton = true;
        if (isset($result->custitem13)) {
            if ($result->custitem13) {
                $p_showbuybutton = $result->custitem13;
            }
        }

        $p_freight_exclude = false;
        if (isset($result->custitem24)) {
            if ($result->custitem24) {
                $p_freight_exclude = $result->custitem24;
            }
        }

        $p_shipping = 0;
        if ($p_freight_exclude) {
            if (isset($result->custitem11)) {
                $p_shipping = $result->custitem11;
            }
        }

        $p_img = "";
        if (isset($result->custitem_atlas_item_image)) {
            if (!$result->custitem_atlas_item_image) {
                $p_img = $result->custitem_atlas_item_image;
            }
        }

        $p_details = "";

        if (isset($result->custitem6)) {
            $p_details = $result->custitem6;
        } else {
            if (isset($result->salesDescription)) {
                $p_details = $result->salesDescription;
            }
        }

        $productData = []; // This will be used to store the mapped product data

            // Map base price
            $productData['p_price'] = $base_price;

            // Map price quantities 
            $priceBreakMapping = [
                'pricequantity1' => 'p_priceBreakA_minqty',
                'pricequantity2' => 'p_priceBreakB_minqty',
                'pricequantity3' => 'p_priceBreakC_minqty',
                'pricequantity4' => 'p_priceBreakD_minqty',
                'pricequantity5' => 'p_priceBreakE_minqty',
                // ... add more mappings if needed
            ];

            foreach ($priceBreakMapping as $netSuiteField => $websiteWorldField) {
                if (isset($prices[$netSuiteField])) {
                    $productData[$websiteWorldField] = $prices[$netSuiteField ];
                }
            }


        $p_title = "";
        if (isset($result->custitem5)) {
            $p_title = $result->custitem5;
        }

        $p_uom = "";
        if (isset($result->custitem7)) {
            $p_uom = $result->custitem7;
        }

        $p_weight = 0;
        if (isset($result->custitem8)) {
            $p_weight = $result->custitem8;
        }

        $p_weight = "";
        if (isset($result->custitem8)) {
            $p_weight = $result->custitem8;
        }

        $p_outofstockmessage = "";
        if (isset($result->custitem9)) {
            $p_outofstockmessage = $result->custitem9;
        }

        $p_supplierprice = 0;
        if (isset($result->cost)) {
            $p_supplierprice = $result->cost;
        }

        $p_additionaltext = $net_website_additional_text;
        $p_additionaltext_insinc = $net_website_additional_text;
        if ($website_display_insinc) {
            switch ($net_website_additional_text) {
                case "Regular":
                    $p_additionaltext_insinc =
                        // '<p><img src="/images/149131/Red_Leaf_-_regular_product.jpg" border="0" /></p>';
                        '<p><img src="/assets/images/Regular.jpg" border="0" /></p>';
                    break;

                case "Sustainable":
                    $p_additionaltext_insinc =
                        // '<p><img src="/images/149131/Blue_leaf_-_sustainable_product.jpg" border="0" /></p>';
                        '<p><img src="/assets/images/Sustainable.jpg" border="0" /></p>';
                    break;

                case "Eco-Friendly":
                    $p_additionaltext_insinc =
                        // '<p><img src="/images/149131/Green_leaf_-_eco_option.jpg" border="0" /></p>';
                        '<p><img src="/assets/images/Planet-Friendly.jpg" border="0" /></p>';
                    break;

                case "Mixed Eco/Regular":
                    $p_additionaltext_insinc =
                        // '<p><img src="/images/149131/Blue_leaf_-_mixed_product.png" border="0" /></p>';
                        '<p><img src="/assets/images/Mixed.jpg" border="0" /></p>';
                    break;

                case "Recyclable":
                    $p_additionaltext_insinc =
                        // '<p><img src="/images/149131/Red_Leaf_-_regular_product_recyclable.jpg" border="0" /></p>';
                        '<p><img src="/assets/images/Recyclable.jpg" border="0" /></p>';
                    break;

                case "Reusable":
                    $p_additionaltext_insinc =
                        '<p><img src="/assets/images/Reusable.jpg" border="0" /></p>';
                    break;
            }
        }

        $p_tab_moreinformation = "";
        if (isset($result->custitem29)) {
            $p_tab_moreinformation = $result->custitem29;
        }

        $net_promotional_item = false;
        if (isset($result->custitem_czo_promotion)) {
            if ($result->custitem_czo_promotion) {
                $net_promotional_item = true;
            }
        }

        $p_priceprediscount = 0;
        $p_sale_ends = null;
        if ($net_promotional_item) {
            $p_priceprediscount = $p_price;
            if ($result->custitem_promo_price) {
                $p_price = $result->custitem_promo_price;
            }

            if ($result->custitem_promo_date) {
                $p_sale_ends = $result->custitem_promo_date;
            }
        }

        $weekly_specials_insinc = 0;
        if (isset($result->custitem27)) {
            if ($result->custitem27) {
                $weekly_specials_insinc = 124022;
            }
        }

        $p_promote = "";
        if (isset($result->custitem25)) {
            if ($result->custitem25) {
                $p_promote = "View Cart";
            }
        }

        if (isset($result->custitem26)) {
            if ($result->custitem26) {
                $p_promote = "Order Confirm";
            }
        }

        if (isset($result->custitem42)) {
            if ($result->custitem42) {
                $p_promote = "Home Page - Featured";                
                $weekly_specials_insinc = 124022;
            }
        }

        $p_tab_video = "";
        if (isset($result->custitem33)) {
            $p_tab_video = $result->custitem33;
        }

        $p_tab_specifications = "";
        if (isset($result->custitem34)) {
            $p_tab_specifications = $result->custitem34;
        }

        $p_minqty = 0;
        if (isset($result->custitem30)) {
            $p_minqty = $result->custitem30;
        }

        $p_maxqty = 0;
        if (isset($result->custitem31)) {
            $p_maxqty = $result->custitem31;
        }

        $p_tab_features = "";
        if (isset($result->custitem32)) {
            $p_tab_features = $result->custitem32;
        }

        // $p_qtyinstock = 0;
        $p_qtyinstock = 9999;
        if (isset($result->custitem21)) {
            $p_qtyinstock = $result->custitem21;
        }

        $isDropShipItem = false;
        if (isset($result->isDropShipItem)) {
            if ($result->isDropShipItem) {
                $isDropShipItem = $result->isDropShipItem;
            }
        }

        $totalValue = 0;
        if (isset($result->totalValue)) {
            $totalValue = $result->totalValue;
        }

        $averageCost = 0;
        if (isset($result->averageCost)) {
            $averageCost = $result->averageCost;
        }

        if (!$isDropShipItem) {
            if ($averageCost != 0) {
                $p_qtyinstock = (int) ($totalValue / $averageCost);
            }

            if (isset($result->custitem40)) {
                if ($result->custitem40) {
                    if (isset($result->custitem21)) {
                        $p_qtyinstock = $result->custitem21;
                    }
                }
            }
        }

        $outofstock = false;
        if (isset($result->custitem36)) {
            $outofstock = $result->custitem36;
        }

        if ($outofstock) {
            $p_qtyinstock = 0;
        }

        if (isset($result->custitem23)) {
            if ($result->custitem23) {
                $p_outofstockmessage =
                    "Obsolete Item - Please contact us for alternatives";
                $p_qtyinstock = 0;
                $p_showbuybutton = true;
            }
        }

        if (isset($result->custitem13)) {
            if ($result->custitem13) {
                $p_showbuybutton = false;
            }
        }

        $data = [
            "p_code" => $p_code,
            "p_suppliercode" => $p_suppliercode,
            "p_suppliername" => $p_suppliername,
            "p_showbuybutton" => $p_showbuybutton,
            "p_freight_exclude" => $p_freight_exclude,
            "p_shipping" => $p_shipping,
            "p_details" => $p_details,
            "p_promote" => $p_promote,
            "p_price" => $p_price,
            "p_title" => $p_title,
            "p_outofstockmessage" => $p_outofstockmessage,
            "p_supplierprice" => $p_supplierprice,
            "p_priceprediscount" => $p_priceprediscount,
            "p_sale_ends" => $p_sale_ends,
            "p_qtyinstock" => $p_qtyinstock,
            "p_order" => 1,
            "p_priceBreakA_minqty" => $p_priceBreakA_minqty,
            "p_priceBreakB_minqty" => $p_priceBreakB_minqty,
            "p_priceBreakC_minqty" => $p_priceBreakC_minqty,
            "p_priceBreakD_minqty" => $p_priceBreakD_minqty,
            "p_priceBreakE_minqty" => $p_priceBreakE_minqty,
        ];

   //     Log::info('Data For Website World : ' . json_encode($data));

        if ($p_img != "") {
            $data["p_img"] = $p_img;
        }

        if ($p_uom != "") {
            $data["p_uom"] = $p_uom;
        }

        if ($p_weight != "") {
            $data["p_weight"] = $p_weight;
        }

        if ($p_tab_moreinformation != "") {
            $data["p_tab_moreinformation"] = preg_replace(
                '/\r\n/',
                "<br>",
                $p_tab_moreinformation
            );
        }

        if ($p_tab_video != "") {
            $data["p_tab_video"] = $p_tab_video;
        }

        if ($p_tab_specifications != "") {
            $data["p_tab_specifications"] = preg_replace(
                '/\r\n/',
                "<br>",
                $p_tab_specifications
            );
        }

        if ($p_minqty != "") {
            $data["p_minqty"] = $p_minqty;
        }

        if ($p_maxqty != "") {
            $data["p_maxqty"] = $p_maxqty;
        }

        if ($p_tab_features != "") {
            $data["p_tab_features"] = preg_replace(
                '/\r\n/',
                "<br>",
                $p_tab_features
            );
        }

        if ($p_additionaltext != "") {
            $data["p_additionaltext"] = $p_additionaltext;
        }

        // Log::info("Mapping Data = " . json_encode($data));

        $removeData = [
            "p_code" => $p_code,
            "p_order" => "-999",
        ];

        // Log::info("Netsuite Type = " . $type);

        $http_cafe = Http::withHeaders([
            "apiID" => config("services.website.cafe_api_id"),
            "apiKey" => config("services.website.cafe_api_key"),
        ]);

        $http_car = Http::withHeaders([
            "apiID" => config("services.website.car_api_id"),
            "apiKey" => config("services.website.car_api_key"),
        ]);

        $http_hand = Http::withHeaders([
            "apiID" => config("services.website.hand_api_id"),
            "apiKey" => config("services.website.hand_api_key"),
        ]);

        $http_packnet = Http::withHeaders([
            "apiID" => config("services.website.packnet_api_id"),
            "apiKey" => config("services.website.packnet_api_key"),
        ]);

        $http_rubbish = Http::withHeaders([
            "apiID" => config("services.website.rubbish_api_id"),
            "apiKey" => config("services.website.rubbish_api_key"),
        ]);

        $http_gloves = Http::withHeaders([
            "apiID" => config("services.website.gloves_api_id"),
            "apiKey" => config("services.website.gloves_api_key"),
        ]);

        $http_insinc = Http::withHeaders([
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
        ]);



        $http_soluclean = Http::withHeaders([
            "apiID" => config("services.website.soluclean_api_id"),
            "apiKey" => config("services.website.soluclean_api_key"),
        ]);


        $base_uri = config("services.website.base_uri");

        $website_display_hand = boolval($request->input('custitem19', false));
        $this->processWebsiteData($website_display_hand, $http_hand, $base_uri, $p_code, $data, $type, "209709", $removeData);

        $website_display_car = boolval($request->input('custitem20', false));
        $this->processWebsiteData($website_display_car, $http_car, $base_uri, $p_code, $data, $type, "209707", $removeData);

        $website_display_packnet = boolval($request->input('custitem18', false));
        $this->processWebsiteData($website_display_packnet, $http_packnet, $base_uri,  $p_code, $data, $type, "209710", $removeData);

        $website_display_cafe = boolval($request->input('custitem15', false));
        $this->processWebsiteData($website_display_cafe, $http_cafe, $base_uri,  $p_code, $data, $type, "209706", $removeData);

        $website_display_rubbish = boolval($request->input('custitem17', false));
        $this->processWebsiteData($website_display_rubbish, $http_rubbish, $base_uri,  $p_code, $data, $type, "209711", $removeData);

        $website_display_disposable = boolval($request->input('custitem16', false));
        $this->processWebsiteData($website_display_disposable, $http_gloves, $base_uri,  $p_code, $data, $type, "209708", $removeData);

        $website_display_soluclean = boolval($request->input('custitem43', false));
        $this->processWebsiteData($website_display_soluclean, $http_soluclean, $base_uri,  $p_code, $data, $type, "244504", $removeData);

        $this->processWebsiteData($website_display_insinc, $http_insinc, $base_uri,  $p_code, $data, $type, "209705", $removeData);

        return;
    }

    // Create a reusable function to handle The Website World Conections
    function processWebsiteData($displayFlag, $httpInstance, $base_uri, $p_code, $data, $type, $groupId, $removeData, $additionalText = null) {

        if ($displayFlag) {
                $preparedData = $data; // Copying the data

                // Get product details first  from Website World
                $response = $httpInstance->get("{$base_uri}/products?p_code=" . $p_code);
                Log::debug('Response Headers:', ['headers' => $response->headers()]);
                Log::debug('Raw Response:', ['response' => $response->body()]);

                if ($response->successful()) {
                    Log::info('The Response was successful '. $response->status());
                    $decodedOuter = $response->json();
                    // $decodedOuter = json_decode($response->body(), true);
                    // Log::debug('Decoded Outer : ', ['Outer' => $decodedOuter]);
                    // $cleanedResponse = str_replace("\xEF\xBB\xBF", '', $response->body());
                    // $decodedOuter = json_decode($cleanedResponse, true);
                    // $decodedOuter = $cleanedResponse->json();
   //                 Log::debug('Decoded Outer : ', ['Outer' => $decodedOuter]);

                    if ($decodedOuter === null && json_last_error() !== JSON_ERROR_NONE) {
                        Log::error('JSON decoding error: ' . json_last_error_msg());
                    }
                    
                    if (isset($decodedOuter['response'])) {
                        Log::debug('I found the response in the outer ' );
                        $decodedInner = json_decode($decodedOuter['response'], true);
                        Log::debug('Inner JSON Result: ', ['result' =>  $decodedInner]);
                    } else {
                        Log::error('The "response" key does not exist in the outer JSON structure.');
                    }
                } else {
                    Log::info('The Response was not successful '. $response->status());
                } 

                $result = json_decode($response->body(), true);
                if(isset($result['response'])) {
                    $decodedInner = json_decode($result['response'], true);
                    Log::debug('Working Off The Result ', []);
                } else {
                        Log::error('The "response" key does not exist in the outer JSON structure.');
                    }

                // Log::debug('Attempting to convert the response to JSON.');
                // $result = $response->json();
                // Log::debug('JSON Result Type: ' . gettype($result));
                // Log::debug('JSON Result: ', ['result' =>  $result]);
                // Log::debug('Successfully converted the response to JSON.');

                if($result) {
                    Log::debug('Result ', ['result' => $result]);
                } else {
                Log::info( 'Something Went Wrong in the Conversion');
                }


                if ($type == "create" || (!isset($result["resultCount"]) || $result["resultCount"] == 0)) {
                    $preparedData["p_groupid"] = $groupId;
                }
                if ($additionalText) {
                    $preparedData["p_additionaltext"] = $additionalText;
                }
                $response = $httpInstance->post("{$base_uri}/product", $preparedData);
                $result = $response->json();
                // Log::info("Success for website with groupId: $groupId");
                } else {
                    $response = $httpInstance->get("{$base_uri}/products?p_code=" . $p_code);
                    $result = $response->json();
                    if (isset($result["resultCount"]) && $result["resultCount"] != 0) {
                        $response = $httpInstance->post("{$base_uri}/product", $removeData);
                        $result = $response->json();
                    }
            }


    }
    
}


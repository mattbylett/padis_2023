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
    // Clear the Cache
    $clearCache = $http_insinc->get("{$base_uri}/apistatus?dopublish");
    
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

        // $pricingQuantities = $request->input('pricingQuantities');

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

        $productInfo = $netSuiteApi->fetchFromNetSuite("GET", "/inventoryitem/" . $id);

        $p_code = $productInfo->itemId;

        // Getting the Insinc Site Ready For Additional Text

        $website_display_insinc = false;
        if (isset($result->custitem14)) {
            if ($result->custitem14) {
                $website_display_insinc = true;
            }
        }

        // Mapping The Fields From Netsuite to Website World

        $p_price = $base_price;

        $p_pricea = isset($result->custitem61) ? $result->custitem61 : 0;
        $p_priceb = isset($result->custitem62) ? $result->custitem62 : 0;
        $p_pricec = isset($result->custitem63) ? $result->custitem63 : 0;
        $p_priced = isset($result->custitem64) ? $result->custitem64 : 0;
        $p_pricee = isset($result->custitem65) ? $result->custitem65 : 0;
        $p_pricef = isset($result->custitem66) ? $result->custitem66 : 0;
        $p_priceg = isset($result->custitem67) ? $result->custitem67 : 0;
        $p_priceh = isset($result->custitem68) ? $result->custitem68 : 0;

        $p_pricebreaka_minqty = isset($result->custitem49) ? $result->custitem49 : 0;
        $p_pricebreaka = isset($result->custitem50) ? $p_price - ($p_price * ($result->custitem50 / 100)) : 0;
        $p_pricebreakb_minqty = isset($result->custitem51) ? $result->custitem51 : 0;
        $p_pricebreakb = isset($result->custitem56) ? $p_price - ($p_price * ($result->custitem56 / 100)) : 0;
        $p_pricebreakc_minqty = isset($result->custitem52) ? $result->custitem52 : 0;
        $p_pricebreakc = isset($result->custitem57) ? $p_price - ($p_price * ($result->custitem57 / 100)) : 0;
        $p_pricebreakd_minqty = isset($result->custitem53) ? $result->custitem53 : 0;
        $p_pricebreakd = isset($result->custitem58) ? $p_price - ($p_price * ($result->custitem58 / 100)) : 0;
        $p_pricebreake_minqty = isset($result->custitem54) ? $result->custitem54 : 0;
        $p_pricebreake = isset($result->custitem59) ? $p_price - ($p_price * ($result->custitem59 / 100)) : 0;
        $p_pricebreakf_minqty = isset($result->custitem55) ? $result->custitem55 : 0;
        $p_pricebreakf = isset($result->custitem60) ? $p_price - ($p_price * ($result->custitem60 / 100)) : 0;

        $p_suppliername = $vendor_name;

        $p_metakeywords = isset($result->custitem48) ? $result->custitem48 : '';

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
                // $weekly_specials_insinc = 124022;
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
        $p_showbuybutton = true;
        if (isset($result->custitem13)) {
            if ($result->custitem13) {
                $p_showbuybutton = false;
            }
        }

        $data = [
            "p_code"               => $p_code,
            "p_suppliercode"       => $p_suppliercode,
            "p_suppliername"       => $p_suppliername,
            "p_showbuybutton"      => $p_showbuybutton,
            "p_freight_exclude"    => $p_freight_exclude,
            "p_shipping"           => $p_shipping,
            "p_details"            => $p_details,
            "p_promote"            => $p_promote,
            "p_price"              => $p_price,
            "p_title"              => $p_title,
            "p_outofstockmessage"  => $p_outofstockmessage,
            "p_supplierprice"      => $p_supplierprice,
            "p_priceprediscount"   => $p_priceprediscount,
            "p_sale_ends"          => $p_sale_ends,
            "p_qtyinstock"         => $p_qtyinstock,
            "p_order"              => 1,
            "p_groupid"            => $weekly_specials_insinc,
            "p_pricebreaka_minqty" => $p_pricebreaka_minqty,
            "p_pricebreakb_minqty" => $p_pricebreakb_minqty,
            "p_pricebreakc_minqty" => $p_pricebreakc_minqty,
            "p_pricebreakd_minqty" => $p_pricebreakd_minqty,
            "p_pricebreake_minqty" => $p_pricebreake_minqty,
            "p_pricebreakf_minqty" => $p_pricebreakf_minqty,
            "p_pricebreaka"        => $p_pricebreaka,
            "p_pricebreakb"        => $p_pricebreakb,
            "p_pricebreakc"        => $p_pricebreakc,
            "p_pricebreakd"        => $p_pricebreakd,
            "p_pricebreake"        => $p_pricebreake,
            "p_pricebreakf"        => $p_pricebreakf,
            "p_pricea"             => $p_pricea,
            "p_priceb"             => $p_priceb,
            "p_pricec"             => $p_pricec,
            "p_priced"             => $p_priced,
            "p_pricee"             => $p_pricee,
            "p_pricef"             => $p_pricef,
            "p_priceg"             => $p_priceg,
            "p_priceh"             => $p_priceh,
            'p_metakeywords'       => $p_metakeywords,
            "p_metatitle"          => true
        ];

     //   Log::info('Data For Website World : ' . json_encode($data));

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


        $removeData = [
            "p_code" => $p_code,
            "p_order" => "-999",
        ];

        // Creating Connection Strings to the Website World API
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
            'Content-Type' => 'application/json',
            "apiID" => config("services.website.insinc_api_id"),
            "apiKey" => config("services.website.insinc_api_key"),
        ]);

        $http_soluclean = Http::withHeaders([
            "apiID" => config("services.website.soluclean_api_id"),
            "apiKey" => config("services.website.soluclean_api_key"),
        ]);


        $base_uri = config("services.website.base_uri");

        $website_display_hand = boolval($result->custitem19);
        $this->processWebsiteData($website_display_hand, $http_hand, $base_uri, $p_code, $data, $type, "209709", $removeData);
       // Log::debug('Display: ', ["Hand Sanitiser - " => $website_display_hand]);

        $website_display_car = boolval($result->custitem20);
        $this->processWebsiteData($website_display_car, $http_car, $base_uri, $p_code, $data, $type, "209707", $removeData);
      //  Log::debug('Display: ', ["Car Supplies - " => $website_display_car]);  
        
       //Log::debug('Raw custitem19: ', ["Packnet - " => $result->custitem18]);
        $website_display_packnet = boolval($result->custitem18);
        $this->processWebsiteData($website_display_packnet, $http_packnet, $base_uri,  $p_code, $data, $type, "209710", $removeData);
       //Log::debug('Display: ', ["Packnet - " => $website_display_packnet]);

        $website_display_cafe = boolval($result->custitem15);
        $this->processWebsiteData($website_display_cafe, $http_cafe, $base_uri,  $p_code, $data, $type, "209706", $removeData);
       // Log::debug('Display: ', ["Cafe Supplies - " => $website_display_cafe]);

        $website_display_rubbish = boolval($result->custitem17);
        $this->processWebsiteData($website_display_rubbish, $http_rubbish, $base_uri,  $p_code, $data, $type, "209711", $removeData);
       // Log::debug('Display: ', ["Rubbish - " => $website_display_rubbish]);

        $website_display_disposable = boolval($result->custitem16);
        $this->processWebsiteData($website_display_disposable, $http_gloves, $base_uri,  $p_code, $data, $type, "209708", $removeData);
      //  Log::debug('Display: ', ["Disposable Gloves - " => $website_display_disposable]);

        $website_display_soluclean = boolval($result->custitem43);
        $this->processWebsiteData($website_display_soluclean, $http_soluclean, $base_uri,  $p_code, $data, $type, "244504", $removeData);
       // Log::debug('Display: ', ["Soluclean - " => $website_display_soluclean]);

        $this->processWebsiteData($website_display_insinc, $http_insinc, $base_uri,  $p_code, $data, $type, "209705", $removeData);

        Log::info('Data Processing Complete!');

        return;
    }

    // Create a reusable function to handle The Website World Conections
    function processWebsiteData($displayFlag, $httpInstance, $base_uri, $p_code, $data, $type, $groupId, $removeData, $additionalText = null)     
    {
        if ($displayFlag) {
                $preparedData = $data; // Copying the data
               // Log::debug('PreparedData: ', ['data' => $preparedData]);
            Log::info('Updating Product');
                // Get product details first  from Website World
                $response = $httpInstance->get("{$base_uri}/product?p_code=" . $p_code);
                $content = $response->getBody();  // Assuming $response is your response object.
                $content_utf8 = mb_convert_encoding($content, 'UTF-8', 'ISO-8859-1');
                $result= json_decode($content_utf8, true);

                // if($result) {
                //     Log::debug('Result ', ['result' => $result]);
                // } else {
                // Log::info( 'Something Went Wrong in the Conversion');
                // }

                if ($type == "create" || (!isset($result["resultCount"]) || $result["resultCount"] == 0)) {
                    $preparedData["p_groupid"] = $groupId;
                }
                if ($additionalText) {
                    $preparedData["p_additionaltext"] = $additionalText;
                }
                $response = $httpInstance->post("{$base_uri}/product", $preparedData);
                $result = $response->json();
//Log::debug('Result: ', ['Product Updated Successfully: ' => $result['data']['p_code']]);
                //Log::debug('Result: ', ['Product Updated Successfully: ' => $result]);
                // Log::info("Success for website with groupId: $groupId");
                } else {
                    $response = $httpInstance->get("{$base_uri}/product?p_code=" . $p_code);
                    $result = $response->json();
                    if (isset($result["resultCount"]) && $result["resultCount"] != 0) {
                        $response = $httpInstance->post("{$base_uri}/product", $removeData);
                        $result = $response->json();
                    }
            }



    }
    
}


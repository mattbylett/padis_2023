<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use App\Models\Product;
use App\Models\WebsiteId;
use App\NetSuite\NetSuiteApi;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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
                //   "website_disable_buy_button" => $item[""] ?? null,
                  "website_show_buy_button" => $item["p_showbuybutton"] ?? null,
                //   "website_display_cafe_supplies" => $item[""] ?? null,
                //   "website_display_car_cleaning" => $item[""] ?? null,
                //   "website_display_hand_sanitiser" => $item[""] ?? null,
                //   "website_display_insinc_products" => $item[""] ?? null,
                //   "website_display_packnet" => $item[""] ?? null,
                //   "website_display_rubbish_bags" => $item[""] ?? null,
                //   "website_environmental_impact_logo" => $item[""] ?? null,
                  "website_unit_of_measure" => $item["p_uom"] ?? null,
                  "website_exclude_standard_freight_fees" => $item["p_freight_exclude"] ?? null,
                //   "website_featured_product" => $item[""] ?? null,
                  "website_fixed_freight_cost" => $item["p_shipping"] ?? null,
                  "website_freight_weight" => $item["p_weight"] ?? null,
                  "website_item_title" => $item["p_subtitle"] ?? null,
                  "website_more_information" => $item["p_tab_moreinformation"] ?? null,
                  "website_pdf_documents" => $item["p_url"] ?? null,
                  "website_product_features" => $item["p_tab_features"] ?? null,
                //   "website_promotion_order_confirm" => $item[""] ?? null,
                //   "website_promotion_view_cart" => $item[""] ?? null,
                  "website_quantity_in_stock" => $item["p_qtyinstock"] ?? null,
                  "website_remove_buy_button" => $item["p_removebuybutton"] ?? null,
                  "website_stock_available" => $item["p_qtyinstock"] ?? null,
                //   "website_display_disposable_gloves" => $item[""] ?? null,
                //   "website_weekly_special" => $item[""] ?? null,
                  "website_video" => $item["p_tab_video"] ?? null,
                  "display_name" => $item["p_title"] ?? null,
                  "description" => $item["p_details"] ?? null,
                //   "display_in_website" => $item[""] ?? null,
                //   "environmental_impact" => $item[""] ?? null,
                //   "not_loaded_on_any_website" => $item[""] ?? null,
                //   "obsolete" => $item[""] ?? null,
                //   "out_of_stock" => $item[""] ?? null,
                  "promotion_end_date" => $item["p_sale_ends"] ?? null,
                  "promotional_item" => $item["p_promote"] ?? null,
                //   "promotional_price" => $item[""] ?? null,
                //   "purchase_price" => $item[""] ?? null,
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

    public function updateProduct(Request $request)
    {
        Log::info("API request call from NetSuite ");

        $id = $request->internalID;
        $type = $request->type;
        if (!isset($request->internalID)) {
            return;
        }

        Log::info("API request from NetSuite " . $id);

        $netSuiteApi = new NetSuiteApi();

        do {
            $result = $netSuiteApi->getOneProductInfo($id);
        } while ($result == "error");
        // dd($result->custitem36);

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

        Log::info("Netsuite Result = " . json_encode($result));


        $p_code = $result->itemId;

        Log::info("p_code = " . $p_code );

        $website_display_insinc = false;
        if (isset($result->custitem14)) {
            if ($result->custitem14) {
                $website_display_insinc = true;
            }
        }

        $website_display_cafe = false;
        if (isset($result->custitem15)) {
            if ($result->custitem15) {
                $website_display_cafe = true;
            }
        }

        $website_display_disposable = false;
        if (isset($result->custitem16)) {
            if ($result->custitem16) {
                $website_display_disposable = true;
            }
        }

        $website_display_rubbish = false;
        if (isset($result->custitem17)) {
            if ($result->custitem17) {
                $website_display_rubbish = true;
            }
        }

        $website_display_packnet = false;
        if (isset($result->custitem18)) {
            if ($result->custitem18) {
                $website_display_packnet = true;
            }
        }

        $website_display_hand = false;
        if (isset($result->custitem19)) {
            if ($result->custitem19) {
                $website_display_hand = true;
            }
        }

        $website_display_car = false;
        if (isset($result->custitem20)) {
            if ($result->custitem20) {
                $website_display_car = true;
            }
        }

        Log::info(
            "Website insinc, cafe, disposable, rubbish, packnet, hand, car == " .
                $website_display_insinc .
                ", " .
                $website_display_cafe .
                ", " .
                $website_display_disposable .
                ", " .
                $website_display_rubbish .
                ", " .
                $website_display_packnet .
                ", " .
                $website_display_hand .
                ", " .
                $website_display_car
        );

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

        $p_shipping = null;
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

        $p_price = $base_price;

        $p_title = "";
        if (isset($result->custitem5)) {
            $p_title = $result->custitem5;
        }

        $p_uom = "";
        if (isset($result->custitem7)) {
            $p_uom = $result->custitem7;
        }

        $p_weight = "";
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

        // $net_website_stock_available = 0;
        // if(isset($result->custitem21))
        //     $net_website_stock_available = $request->custitem21;

        // if(($p_outofstockmessage == null) && ($net_website_stock_available == 0)) {
        //     $p_outofstockmessage = "Out Of Stock";
        // }

        $p_supplierprice = 0;
        if (isset($result->cost)) {
            $p_supplierprice = $result->cost;
        }

        // $net_website_additional_text = "";
        // if (isset($result->custitem28))
        //     $net_website_additional_text = $result->custitem28;

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

        // if (isset($result->custitem42)) {
        //     if ($result->custitem42) {
        //         $p_promote = "Home Page - Featured";                
        //         $weekly_specials_insinc = 124022;
        //     }
        // }

        $promotions = [];
        if (isset($result->custitem42)){
            // if($result->cusitem42) {
                $promotions = [
                    "DeleteMissingArrayElements" => true,
                    "promo_tag" => "Home Page - Featured"
                ];
            // }
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

        // if ((!$outofstock) && ($p_outofstockmessage == "Out Of Stock"))
        //     $p_outofstockmessage = "";

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
        ];

        // if($p_shipping != "")
        //     $data['p_shipping'] = $p_shipping;

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

        // if ($website_display_insinc)
        //     $data['p_additionaltext'] = $p_additionaltext_insinc;

        Log::info("Mapping Data = " . json_encode($data));

        // if (!$website_display_cafe) {
        //     $data_cafe = $data;
        //     $data_cafe['p_order'] = '-999';
        // }

        // if (!$website_display_car) {
        //     $data_car = $data;
        //     $data_car['p_order'] = '-999';
        // }

        // if (!$website_display_hand) {
        //     $data_hand = $data;
        //     $data_hand['p_order'] = '-999';
        // }

        // if (!$website_display_insinc) {
        //     $data_insinc = $data;
        //     $data_insinc['p_order'] = '-999';
        // }

        // if (!$website_display_packnet) {
        //     $data_packnet = $data;
        //     $data_packnet['p_order'] = '-999';
        // }

        // if (!$website_display_rubbish) {
        //     $data_rubbish = $data;
        //     $data_rubbish['p_order'] = '-999';
        // }

        // if (!$website_display_disposable) {
        //     $data_disposable = $data;
        //     $data_disposable['p_order'] = '-999';
        // }

        $removeData = [
            "p_code" => $p_code,
            "p_order" => "-999",
        ];

        Log::info("Netsuite Type = " . $type);

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

        $base_uri = config("services.website.base_uri");

        try {
            if ($type == "delete") {
                try {
                    $response = $http_cafe->post(
                        "{$base_uri}/product",
                        $removeData
                    );
                    $result = $response->json();
                    Log::info("Website Cafe Success");
                } catch (\Throwable $th) {
                    Log::error($th->getMessage());
                }

                try {
                    $response = $http_car->post(
                        "{$base_uri}/product",
                        $removeData
                    );
                    $result = $response->json();
                    Log::info("Website Car Success");
                } catch (\Throwable $th) {
                    Log::error($th->getMessage());
                }

                try {
                    $response = $http_hand->post(
                        "{$base_uri}/product",
                        $removeData
                    );
                    $result = $response->json();
                    Log::info("Website Hand Success");
                } catch (\Throwable $th) {
                    Log::error($th->getMessage());
                }

                try {
                    $response = $http_packnet->post(
                        "{$base_uri}/product",
                        $removeData
                    );
                    $result = $response->json();
                    Log::info("Website Packnet Success");
                } catch (\Throwable $th) {
                    Log::error($th->getMessage());
                }

                try {
                    $response = $http_rubbish->post(
                        "{$base_uri}/product",
                        $removeData
                    );
                    $result = $response->json();
                    Log::info("Website Rubbish Success");
                } catch (\Throwable $th) {
                    Log::error($th->getMessage());
                }

                try {
                    $response = $http_gloves->post(
                        "{$base_uri}/product",
                        $removeData
                    );
                    $result = $response->json();
                    Log::info("Website Gloves Success");
                } catch (\Throwable $th) {
                    Log::error($th->getMessage());
                }

                try {
                    $response = $http_insinc->post(
                        "{$base_uri}/product",
                        $removeData
                    );
                    $result = $response->json();
                    Log::info("Website Insinc Remove Success");
                } catch (\Throwable $th) {
                    Log::error($th->getMessage());
                }
            } else {
                if ($website_display_cafe) {
                    $data_cafe = $data;
                    if ($type == "create") {
                        $data_cafe["p_groupid"] = "209706";
                    } else {
                        $response_cafe = $http_cafe->get(
                            "{$base_uri}/products?p_code=" . $p_code
                        );
                        $result_cafe = $response_cafe->json();
                        if (isset($result_cafe["resultCount"])) {
                            if ($result_cafe["resultCount"] == 0) {
                                $data_cafe["p_groupid"] = "209706";
                            }
                        }
                    }
                    $response_cafe = $http_cafe->post(
                        "{$base_uri}/product",
                        $data_cafe
                    );
                    $result_cafe = $response_cafe->json();
                } else {
                    $response_cafe = $http_cafe->get(
                        "{$base_uri}/products?p_code=" . $p_code
                    );
                    $result_cafe = $response_cafe->json();
                    if (isset($result_cafe["resultCount"])) {
                        if ($result_cafe["resultCount"] != 0) {
                            $response_cafe = $http_cafe->post(
                                "{$base_uri}/product",
                                $removeData
                            );
                            $result_cafe = $response_cafe->json();
                        }
                    }
                }

                Log::info("Website Cafe Success");

                if ($website_display_car) {
                    $data_car = $data;
                    if ($type == "create") {
                        $data_car["p_groupid"] = "209707";
                    } else {
                        $response_car = $http_car->get(
                            "{$base_uri}/products?p_code=" . $p_code
                        );
                        $result_car = $response_car->json();
                        if (isset($result_car["resultCount"])) {
                            if ($result_car["resultCount"] == 0) {
                                $data_car["p_groupid"] = "209707";
                            }
                        }
                    }
                    $response_car = $http_car->post(
                        "{$base_uri}/product",
                        $data_car
                    );
                    $result_car = $response_car->json();
                } else {
                    $response_car = $http_car->get(
                        "{$base_uri}/products?p_code=" . $p_code
                    );
                    $result_car = $response_car->json();
                    if (isset($result_car["resultCount"])) {
                        if ($result_car["resultCount"] != 0) {
                            $response_car = $http_car->post(
                                "{$base_uri}/product",
                                $removeData
                            );
                            $result_car = $response_car->json();
                        }
                    }
                }

                Log::info("Website Car Success");

                if ($website_display_hand) {
                    $data_hand = $data;
                    if ($type == "create") {
                        $data_hand["p_groupid"] = "209709";
                    } else {
                        $response_hand = $http_hand->get(
                            "{$base_uri}/products?p_code=" . $p_code
                        );
                        $result_hand = $response_hand->json();
                        if (isset($result_hand["resultCount"])) {
                            if ($result_hand["resultCount"] == 0) {
                                $data_hand["p_groupid"] = "209709";
                            }
                        }
                    }
                    $response_hand = $http_hand->post(
                        "{$base_uri}/product",
                        $data_hand
                    );
                    $result_hand = $response_hand->json();
                } else {
                    $response_hand = $http_hand->get(
                        "{$base_uri}/products?p_code=" . $p_code
                    );
                    $result_hand = $response_hand->json();
                    if (isset($result_hand["resultCount"])) {
                        if ($result_hand["resultCount"] != 0) {
                            $response_hand = $http_hand->post(
                                "{$base_uri}/product",
                                $removeData
                            );
                            $result_hand = $response_hand->json();
                        }
                    }
                }

                Log::info("Website Hand Success");

                if ($website_display_packnet) {
                    $data_packnet = $data;
                    if ($type == "create") {
                        $data_packnet["p_groupid"] = "209710";
                    } else {
                        $response_packnet = $http_packnet->get(
                            "{$base_uri}/products?p_code=" . $p_code
                        );
                        $result_packnet = $response_packnet->json();
                        if (isset($result_packnet["resultCount"])) {
                            if ($result_packnet["resultCount"] == 0) {
                                $data_packnet["p_groupid"] = "209710";
                            }
                        }
                    }
                    $response_packnet = $http_packnet->post(
                        "{$base_uri}/product",
                        $data_packnet
                    );
                    $result_packnet = $response_packnet->json();
                } else {
                    $response_packnet = $http_packnet->get(
                        "{$base_uri}/products?p_code=" . $p_code
                    );
                    $result_packnet = $response_packnet->json();
                    if (isset($result_packnet["resultCount"])) {
                        if ($result_packnet["resultCount"] != 0) {
                            $response_packnet = $http_packnet->post(
                                "{$base_uri}/product",
                                $removeData
                            );
                            $result_packnet = $response_packnet->json();
                        }
                    }
                }

                Log::info("Website Packnet Success");

                if ($website_display_rubbish) {
                    $data_rubbish = $data;
                    if ($type == "create") {
                        $data_rubbish["p_groupid"] = "209711";
                    } else {
                        $response_rubbish = $http_rubbish->get(
                            "{$base_uri}/products?p_code=" . $p_code
                        );
                        $result_rubbish = $response_rubbish->json();
                        Log::info($result_rubbish);
                        if (isset($result_rubbish["resultCount"])) {
                            if ($result_rubbish["resultCount"] == 0) {
                                $data_rubbish["p_groupid"] = "209711";
                            }
                        }
                    }
                    $response_rubbish = $http_rubbish->post(
                        "{$base_uri}/product",
                        $data_rubbish
                    );
                    $result_rubbish = $response_rubbish->json();
                } else {
                    $response_rubbish = $http_rubbish->get(
                        "{$base_uri}/products?p_code=" . $p_code
                    );
                    $result_rubbish = $response_rubbish->json();
                    if (isset($result_rubbish["resultCount"])) {
                        if ($result_rubbish["resultCount"] != 0) {
                            $response_rubbish = $http_rubbish->post(
                                "{$base_uri}/product",
                                $removeData
                            );
                            $result_rubbish = $response_rubbish->json();
                        }
                    }
                }

                Log::info("Website Rubbish Success");

                if ($website_display_disposable) {
                    $data_gloves = $data;
                    if ($type == "create") {
                        $data_gloves["p_groupid"] = "209708";
                    } else {
                        $response_gloves = $http_gloves->get(
                            "{$base_uri}/products?p_code=" . $p_code
                        );
                        $result_gloves = $response_gloves->json();
                        if (isset($result_gloves["resultCount"])) {
                            if ($result_gloves["resultCount"] == 0) {
                                $data_gloves["p_groupid"] = "209708";
                            }
                        }
                    }
                    $response_gloves = $http_gloves->post(
                        "{$base_uri}/product",
                        $data_gloves
                    );
                    $result_gloves = $response_gloves->json();
                    Log::info($result_gloves);
                } else {
                    $response_gloves = $http_gloves->get(
                        "{$base_uri}/products?p_code=" . $p_code
                    );
                    $result_gloves = $response_gloves->json();
                    if (isset($result_gloves["resultCount"])) {
                        if ($result_gloves["resultCount"] != 0) {
                            $response_gloves = $http_gloves->post(
                                "{$base_uri}/product",
                                $removeData
                            );
                            $result_gloves = $response_gloves->json();
                        }
                    }
                }

                Log::info("Website Gloves Success");

                if ($website_display_insinc) {
                    $data_insinc = $data;
                    $data_insinc["p_additionaltext"] = $p_additionaltext_insinc;
                    if ($type == "create") {
                        $data_insinc["p_groupid"] = "209705";
                    } else {
                        $response_insinc = $http_insinc->get(
                            "{$base_uri}/products?p_code=" . $p_code
                        );
                        $result_insinc = $response_insinc->json();
                        if (isset($result_insinc["resultCount"])) {
                            if ($result_insinc["resultCount"] == 0) {
                                $data_insinc["p_groupid"] = "209705";
                            }
                        }
                    }

                    $data_insinc["p_groupid8"] = $weekly_specials_insinc;

                    $response_insinc = $http_insinc->post(
                        "{$base_uri}/product",
                        $data_insinc
                    );
                    $result_insinc = $response_insinc->json();
                } else {
                    $response_insinc = $http_insinc->get(
                        "{$base_uri}/products?p_code=" . $p_code
                    );
                    $result_insinc = $response_insinc->json();
                    if (isset($result_insinc["resultCount"])) {
                        if ($result_insinc["resultCount"] != 0) {
                            $response_insinc = $http_insinc->post(
                                "{$base_uri}/product",
                                $removeData
                            );
                            $result_insinc = $response_insinc->json();
                        }
                    }
                }

                Log::info("Website Insinc Success");
            }
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }

        /*
        $product->name = $result->itemId;

        if(isset($result->custitem5)) {
            $product->description = $result->custitem5;
        } else {
            if(isset($result->displayName))
                $product->display_name = $result->displayName;
        }

        if(isset($result->custitem6)) {
            $product->description = $result->custitem6;
        } else {
            if(isset($result->salesDescription))
                $product->description = $result->salesDescription;
        }

        $product->base_price = $base_price;
        // $product->categories = $result->custitem22;
        if(isset($result->weightUnits))
            $product->website_unit_of_measure = $result->weightUnits;

        if(isset($result->custitem8))
            $product->website_freight_weight = $result->custitem8;

        if($result->custitem3) {
            $product->website_stock_available = null;
        } else {
            if(isset($result->custitem21))
                $product->website_stock_available = $result->custitem21;
        }

        if(isset($result->cost))
            $product->purchase_price = $result->cost;

        if(isset($result->vendorName))
            $product->vendor_name = $result->vendorName;

        $product->vendor = $vendor_name;

        if($result->custitem_czo_promotion)
            $product->promotional_item = 1;
        else
            $product->promotional_item = 0;

        $product->website_show_buy_button = true;
        if(isset($result->custitem13)) {
            if(!$result->custitem13) {
                // $product->website_show_buy_button = $result->custitem13;
            }
        }

        $product->environmental_impact = $environment_impact;

        $product_out_of_stock_message = null;
        if(isset($result->custitem9)) {
            $product_out_of_stock_message = $result->custitem9;
        }
        if(($product_out_of_stock_message == null) && ($product->website_stock_available == 0)) {
            $product_out_of_stock_message = "Out Of Stock";
        }

        if(isset($result->custitem11))
            $product->website_fixed_freight_cost = $result->custitem11;

        if(isset($result->custitem14)) {
            if(!$result->custitem14)
                $product->website_display_insinc_products = $result->custitem14;
        }

        if(isset($result->custitem15)) {
            if(!$result->custitem15)
                $product->website_display_cafe_supplies = $result->custitem15;
        }

        if(isset($result->custitem16)) {
            if(!$result->custitem16)
                $product->website_display_disposable_gloves = $result->custitem16;
        }

        if(isset($result->custitem17)) {
            if(!$result->custitem17)
                $product->website_display_rubbish_bags = $result->custitem17;
        }

        if(isset($result->custitem18)) {
            if(!$result->custitem18)
                $product->website_display_packnet = $result->custitem18;
        }

        if(isset($result->custitem19)) {
            if(!$result->custitem19)
                $product->website_display_hand_sanitiser = $result->custitem19;
        }

        if(isset($result->custitem20)) {
            if(!$result->custitem20)
                $product->website_display_car_cleaning = $result->custitem20;
        }

        $product->save();

        try {

            $website_id = WebsiteId::select('cafe_supplies', 'car_cleaning', 'hand_sanitiser', 'insinc_products', 'packnet', 'rubbish_bags', 'disposable_gloves')->where('internal_id', $id)->first();

            foreach($website_id->toArray() as $website_name => $pid)
            {
                switch($website_name) {
                    case 'cafe_supplies':
                        $http = Http::withHeaders([
                            'apiID' => config('services.website.cafe_api_id'),
                            'apiKey' => config('services.website.cafe_api_key')
                        ]);
                        break;
                    case 'car_cleaning':
                        $http = Http::withHeaders([
                            'apiID' => config('services.website.car_api_id'),
                            'apiKey' => config('services.website.car_api_key')
                        ]);
                        break;
                    case 'hand_sanitiser':
                        $http = Http::withHeaders([
                            'apiID' => config('services.website.hand_api_id'),
                            'apiKey' => config('services.website.hand_api_key')
                        ]);
                        break;
                    case 'insinc_products':
                        $http = Http::withHeaders([
                            'apiID' => config('services.website.insinc_api_id'),
                            'apiKey' => config('services.website.insinc_api_key')
                        ]);
                        break;
                    case 'packnet':
                        $http = Http::withHeaders([
                            'apiID' => config('services.website.packnet_api_id'),
                            'apiKey' => config('services.website.packnet_api_key')
                        ]);
                        break;
                    case 'rubbish_bags':
                        $http = Http::withHeaders([
                            'apiID' => config('services.website.rubbish_api_id'),
                            'apiKey' => config('services.website.rubbish_api_key')
                        ]);
                        break;
                    case 'disposable_gloves':
                        $http = Http::withHeaders([
                            'apiID' => config('services.website.gloves_api_id'),
                            'apiKey' => config('services.website.gloves_api_key')
                        ]);
                        break;
                }

                $base_uri = config('services.website.base_uri');
                if($pid != 0){

                    $data = array(
                        // "id" => $pid,
                        'p_code' => $product->name,
                        // 'p_title' => $product->display_name,
                        // 'p_details' => $product->description,
                        // 'p_group' => $product->categories,
                        'p_price' => $product->base_price,
                        // 'p_shipping' => $product->website_fixed_freight_cost,
                        // 'p_uom' => $product->website_unit_of_measure,
                        // 'p_weight' => $product->website_freight_weight,
                        'p_outofstockmessage' => $product_out_of_stock_message,
                        'p_qtyinstock' => $product->website_stock_available,
                        'p_supplierprice' => $product->purchase_price,
                        // 'p_suppliercode' => $product->vendor_name,
                        // 'p_suppliername' => $product->vendor,
                        // 'p_promote' => $product->promotional_item,
                        'p_showbuybutton' => $product->website_show_buy_button,
                        // 'p_additionaltext' => $product->environmental_impact,
                        // 'p_freight_exclude' => $product->website_fixed_freight_cost,
                        // 'variants' => "error"
                    );
                    $response = $http->post("{$base_uri}/product", $data);
                    $result = $response->json();
                    Log::info($result);
                }
            }
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
        }

        */

        return;
    }
}


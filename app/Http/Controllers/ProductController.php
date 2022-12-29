<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\NetSuite\NetSuiteApi;
use App\Models\WebsiteId;
use App\Models\Product;
use Yajra\DataTables\Facades\DataTables;

class ProductController extends Controller
{
 //Get Route for the All New Products Page
    public function adminIndex(Request $request)
    {
        if ($request->ajax()) {
            ini_set("memory_limit", "1024M");

            $data = Product::all();
            return DataTables::of($data)
                ->addColumn("code", function ($row) {
                    return '<a href="' .
                        route("product.view.single", $row->id) .
                        '">' .
                        $row->name .
                        "</a>";
                })
                ->addColumn("status", function ($row) {
                    // return "<span class='badge badge-danger'>".$row->website_stock_available."</span>";
                    // if ($row->stock_qty <= 0) {
                    if (!empty($row->website_stock_available)) {
                        if ($row->website_stock_available <= 0) {
                            return "<span class='badge badge-danger'>Out of Stock</span>";
                        } else {
                            return "<span class='badge badge-primary'>In Stock</span>";
                        }
                    } else {
                        return "<span class='badge badge-danger'>Out of Stock</span>";
                    }
                })
                ->addColumn("action", function ($row) {
                    return "<div class='product-action'><a href='/products/sync/{$row->id}' class='btn btn-success btn-sm' id=\"newsync\" data-id='{$row->id}'>Sync</a> <a href='/products/edit/single/{$row->id}' class='btn btn-primary btn-sm'>Edit</a> </div> ";
                    // return "<button class='btn btn-success btn-lg'>Sync</button>";
                })
                ->rawColumns(["code", "status", "action"])
                ->make(true);
        }

        return view("products.admin.index");
    } // end index

    public function viewSingle($id) 
    {
        $product = Product::findOrFail($id);
        return view('products.view-single', compact('product'));
    } // end view

     //Edit Product
    public function editSingle($id)
    {
        $product = Product::findOrFail($id);
        // dd($product);

        return view("products.admin.edit", compact("product"));
    } //end edit

    //Update Product
    public function updateSingle(Request $request, Product $product, $id)
    {

        try {
            Product::findOrFail($id)->update([
            'name' => $request->name,
            'internal_id' => $request->internal_id,
            'pid' => $request->pid,
            'website_additional_text' =>
                $request->website_additional_text,
            'vendor_name' => $request->vendor_name,
            'website_availablilty_text' =>
                $request->website_availablilty_text,
            'website_categories' => $request->website_categories,
            'website_description' => $request->website_description,
            'website_disable_buy_button' =>
                $request->website_disable_buy_button,
            'website_disable_show_button' => $request->website_disable_show_button,
            'website_unit_of_measure' => $request->website_unit_of_measure,
            'website_display_cafe_supplies' =>
                $request->website_display_cafe_supplies,
            'website_display_car_cleaning' =>
                $request->website_display_car_cleaning,
            'website_display_hand_sanitiser' =>
                $request->website_display_hand_sanitiser,
            'website_display_insinc_products' =>
                $request->website_display_insinc_products,
            'website_display_packnet' =>
                $request->website_display_packnet,
            'website_display_rubbish_bags' =>
                $request->website_display_rubbish_bags,
            'website_environmental_impact_logo' =>
                $request->website_environmental_impact_logo,
            'website_exclude_standard_freight_fees' =>
                $request->website_exclude_standard_freight_fees,
            'website_featured_product' =>
                $request->website_featured_product,
            'website_fixed_freight_cost' =>
                $request->website_fixed_freight_cost,
            'website_freight_weight' => $request->website_freight_weight,
            'website_item_title' => $request->website_item_title,
            'website_more_information' =>
                $request->website_more_information,
            'website_pdf_documents' => $request->website_pdf_documents,
            'website_product_features' =>
                $request->website_product_features,
            'website_promotion_order_confirm' =>
                $request->website_promotion_order_confirm,
            'website_promotion_view_cart' =>
                $request->website_promotion_view_cart,
            'website_quantity_in_stock' =>
                $request->website_quantity_in_stock,
            'website_remove_buy_button' =>
                $request->website_remove_buy_button,
            'website_stock_available' =>
                $request->website_stock_available,
            'website_display_disposable_gloves' =>
                $request->website_display_disposable_gloves,
            'website_weekly_special' => $request->website_weekly_special,
            'website_videos' => $request->website_videos,
            'display_name' => $request->display_name,
            'description' => $request->description,
            'display_in_web_site' => $request->display_in_web_site,
            'environmental_impact' => $request->environmental_impact,
            'item_image' => $request->item_image,
            'not_loaded_on_any_website' =>
                $request->not_loaded_on_any_website,
            'obsolete' => $request->obsolete,
            'obsolete' => $request->obsolete,
            'promotion_end_date' => $request->promotion_end_date,
            'promotional_item' => $request->promotional_item,
            'promotional_price' => $request->promotional_price,
            'purchase_price' => $request->purchase_price,
            'sales_price' => $request->sales_price,

            ]);
            
            $notification = [
                "alert-type" => "success",
                "message" => "product Updated Successfully",
            ];

            return redirect()
                ->route("products.admin.index")
                ->with($notification);
        } catch (\Exception $e) {
            $notification = [
                "alert-type" => "error",
                "message" => $e->getMessage(),
            ];

            return redirect()
                ->route("product.admin.index")
                ->with($notification);
        }
    } // end update

    public function deleteSingle($id)
    {
        $product = Product::findOrFail($id);
        // $image_one = $product->image_one;
        // $image_two = $product->image_two;
        // $image_three = $product->image_three;

        try {
            // if ($image_one) {
            //     // unlink($image_one);
            // }
            // if ($image_two) {
            //     // unlink($image_two);
            // }
            // if ($image_three) {
            //     // unlink($image_three);
            // }

            $product->delete();

            $notification = [
                "message" => "Status Deleted Successfully",
                "alert-type" => "success",
            ];
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            $notification = [
                [
                    "message" => "Problem encountered while deleting product.",
                    "alert-type" => "error",
                ],
            ];
        }

        // return redirect()->back()->with($notification);
        return redirect()
            ->route("product.admin.index")
            ->with($notification);
    } // End Delete

    public function create()
    {
        try{
        Product::insert([
            $product->name = $request->name,
            $product->internal_id = $request->internal_id,
            $product->pid = $request->pid,
            $product->website_additional_text =
                $request->website_additional_text,
            $product->vendor_name = $request->vendor_name,
            $product->website_availablilty_text =
                $request->website_availablilty_text,
            $product->website_categories = $request->website_categories,
            $product->website_description = $request->website_description,
            $product->website_disable_buy_button = $request->website_disable_buy_button,
            $product->website_disable_show_button = $request->website_disable_show_button,
            $product->website_unit_of_measure = $request->website_unit_of_measure,
            $product->website_display_cafe_supplies =
                $request->website_display_cafe_supplies,
            $product->website_display_car_cleaning =
                $request->website_display_car_cleaning,
            $product->website_display_hand_sanitiser =
                $request->website_display_hand_sanitiser,
            $product->website_display_insinc_products =
                $request->website_display_insinc_products,
            $product->website_display_packnet =
                $request->website_display_packnet,
            $product->website_display_rubbish_bags =
                $request->website_display_rubbish_bags,
            $product->website_environmental_impact_logo =
                $request->website_environmental_impact_logo,
            $product->website_exclude_standard_freight_fees =
                $request->website_exclude_standard_freight_fees,
            $product->website_featured_product =
                $request->website_featured_product,
            $product->website_fixed_freight_cost =
                $request->website_fixed_freight_cost,
            $product->website_freight_weight = $request->website_freight_weight,
            $product->website_item_title = $request->website_item_title,
            $product->website_more_information =
                $request->website_more_information,
            $product->website_pdf_documents = $request->website_pdf_documents,
            $product->website_product_features =
                $request->website_product_features,
            $product->website_promotion_order_confirm =
                $request->website_promotion_order_confirm,
            $product->website_promotion_view_cart =
                $request->website_promotion_view_cart,
            $product->website_quantity_in_stock =
                $request->website_quantity_in_stock,
            $product->website_remove_buy_button =
                $request->website_remove_buy_button,
            $product->website_stock_available =
                $request->website_stock_available,
            $product->website_display_disposable_gloves =
                $request->website_display_disposable_gloves,
            $product->website_weekly_special = $request->website_weekly_special,
            $product->website_videos = $request->website_videos,
            $product->display_name = $request->display_name,
            $product->description = $request->description,
            $product->display_in_web_site = $request->display_in_web_site,
            $product->environmental_impact = $request->environmental_impact,
            $product->item_image = $request->item_image,
            $product->not_loaded_on_any_website =
                $request->not_loaded_on_any_website,
            $product->obsolete = $request->obsolete,
            $product->obsolete = $request->obsolete,
            $product->promotion_end_date = $request->promotion_end_date,
            $product->promotional_item = $request->promotional_item,
            $product->promotional_price = $request->promotional_price,
            $product->purchase_price = $request->purchase_price,
            $product->sales_price = $request->sales_price,
        ]);
            $notification = [
                "alert-type" => "success",
                "message" => "product Updated Successfully",
            ];

            return redirect()
                ->route("product.admin.index")
                ->with($notification);
        } catch (\Exception $e) {
            $notification = [
                "alert-type" => "error",
                "message" => $e->getMessage(),
            ];

            return redirect()
                ->route("product.admin.index")
                ->with($notification);
        }

    } //end create
    
// The Sync Function

    public function sync($id)
    {
        $netSuiteApi = new NetSuiteApi();
        // dd($netSuiteApi);
        do {
            $result = $netSuiteApi->getOneProductInfo($id);
        } while ($result == "error");
        // dd($result);
        do {
            $sales_price = $netSuiteApi->getBasePrice($id);
        } while ($sales_price === "error");

        do {
            $vendor_name = $netSuiteApi->getVendorName($id);
        } while ($vendor_name === "error");

        do {
            $environment_impact = $netSuiteApi->getEnviromentImpact($id);
        } while ($environment_impact === "error");

        $product = Product::findOrFail($id);
        // dd($product);
        if ($result != "error") {
            $product->name = $result->itemId;

            if (isset($result->custitem5)) {
                $product->display_name = $result->custitem5;
            } else {
                if (isset($result->displayName)) {
                    $product->display_name = $result->displayName;
                }
            }

            if (isset($result->custitem6)) {
                $product->description = $result->custitem6;
            } else {
                if (isset($result->salesDescription)) {
                    $product->description = $result->salesDescription;
                }
            }

            $product->sales_price = $sales_price;
            // $product->categories = $result->custitem22;
            if (isset($result->weightUnits)) {
                $product->website_unit_of_measure = $result->weightUnits;
            }

            if (isset($result->custitem8)) {
                $product->website_freight_weight = $result->custitem8;
            }

            if ($result->custitem36) {
                $product->website_stock_available = null;
            } else {
                if (isset($result->custitem21)) {
                    $product->website_stock_available = $result->custitem21;
                }
            }

            if (isset($result->cost)) {
                $product->purchase_price = $result->cost;
            }

            if (isset($result->vendorName)) {
                $product->vendor_name = $result->vendorName;
            }

            $product->vendor_name = $vendor_name;

            if ($result->custitem_czo_promotion) {
                $product->promotional_item = 1;
            } else {
                $product->promotional_item = 0;
            }

            $product->website_show_buy_button = true;
            if (isset($result->custitem13)) {
                if (!$result->custitem13) {
                    // $product->website_show_buy_button = $result->custitem13;
                }
            }

            $product->environmental_impact = $environment_impact;

            $product_out_of_stock_message = null;
            if (isset($result->custitem9)) {
                $product_out_of_stock_message = $result->custitem9;
            }
            if (
                $product_out_of_stock_message == null &&
                $product->website_stock_available == 0
            ) {
                $product_out_of_stock_message = "Out Of Stock";
            }

            if (isset($result->custitem11)) {
                $product->website_fixed_freight_cost = $result->custitem11;
            }

            if (isset($result->custitem14)) {
                if (!$result->custitem14) {
                    $product->website_display_insinc_products =
                        $result->custitem14;
                }
            }

            if (isset($result->custitem15)) {
                if (!$result->custitem15) {
                    $product->website_display_cafe_supplies =
                        $result->custitem15;
                }
            }

            if (isset($result->custitem16)) {
                if (!$result->custitem16) {
                    $product->website_display_disposable_gloves =
                        $result->custitem16;
                }
            }

            if (isset($result->custitem17)) {
                if (!$result->custitem17) {
                    $product->website_display_rubbish_bags =
                        $result->custitem17;
                }
            }

            if (isset($result->custitem18)) {
                if (!$result->custitem18) {
                    $product->website_display_packnet = $result->custitem18;
                }
            }

            if (isset($result->custitem19)) {
                if (!$result->custitem19) {
                    $product->website_display_hand_sanitiser =
                        $result->custitem19;
                }
            }

            if (isset($result->custitem20)) {
                if (!$result->custitem20) {
                    $product->website_display_car_cleaning =
                        $result->custitem20;
                }
            }

            if (isset($result->externalId)) {
                $product->internal_id = $result->externalId;
            }

            $product->save();

            try {
                $website_id = WebsiteId::select(
                    "cafe_supplies",
                    "car_cleaning",
                    "hand_sanitiser",
                    "insinc_products",
                    "packnet",
                    "rubbish_bags",
                    "disposable_gloves"
                )
                    ->where("internal_id", $id)
                    ->first();

                foreach ($website_id->toArray() as $website_name => $pid) {
                    switch ($website_name) {
                        case "cafe_supplies":
                            $http = Http::withHeaders([
                                "apiID" => config(
                                    "services.website.cafe_api_id"
                                ),
                                "apiKey" => config(
                                    "services.website.cafe_api_key"
                                ),
                            ]);
                            break;
                        case "car_cleaning":
                            $http = Http::withHeaders([
                                "apiID" => config(
                                    "services.website.car_api_id"
                                ),
                                "apiKey" => config(
                                    "services.website.car_api_key"
                                ),
                            ]);
                            break;
                        case "hand_sanitiser":
                            $http = Http::withHeaders([
                                "apiID" => config(
                                    "services.website.hand_api_id"
                                ),
                                "apiKey" => config(
                                    "services.website.hand_api_key"
                                ),
                            ]);
                            break;
                        case "insinc_products":
                            $http = Http::withHeaders([
                                "apiID" => config(
                                    "services.website.insinc_api_id"
                                ),
                                "apiKey" => config(
                                    "services.website.insinc_api_key"
                                ),
                            ]);
                            break;
                        case "packnet":
                            $http = Http::withHeaders([
                                "apiID" => config(
                                    "services.website.packnet_api_id"
                                ),
                                "apiKey" => config(
                                    "services.website.packnet_api_key"
                                ),
                            ]);
                            break;
                        case "rubbish_bags":
                            $http = Http::withHeaders([
                                "apiID" => config(
                                    "services.website.rubbish_api_id"
                                ),
                                "apiKey" => config(
                                    "services.website.rubbish_api_key"
                                ),
                            ]);
                            break;
                        case "disposable_gloves":
                            $http = Http::withHeaders([
                                "apiID" => config(
                                    "services.website.gloves_api_id"
                                ),
                                "apiKey" => config(
                                    "services.website.gloves_api_key"
                                ),
                            ]);
                            break;
                    }

                    $base_uri = config("services.website.base_uri");
                    if ($pid != 0) {
                        $data = [
                            // "id" => $pid,
                            "p_code" => $product->name,
                            // 'p_title' => $product->display_name,
                            // 'p_details' => $product->description,
                            // 'p_group' => $product->categories,
                            "p_price" => $product->sales_price,
                            // 'p_shipping' => $product->website_fixed_freight_cost,
                            // 'p_uom' => $product->website_unit_of_measure,
                            // 'p_weight' => $product->website_freight_weight,
                            "p_outofstockmessage" => $product_out_of_stock_message,
                            "p_qtyinstock" => $product->website_stock_available,
                            "p_supplierprice" => $product->purchase_price,
                            // 'p_suppliercode' => $product->vendor_name,
                            // 'p_suppliername' => $product->vendor,
                            // 'p_promote' => $product->promotional_item,
                            "p_showbuybutton" =>
                                $product->website_show_buy_button,
                            'p_additionaltext' => $product->environmental_impact,
                            // 'p_freight_exclude' => $product->website_fixed_freight_cost,
                            // 'variants' => "error"
                        ];
                        $response = $http->post("{$base_uri}/product", $data);
                        $result = $response->json();
                        Log::info($result);
                    }
                }
                $notification = [
                    "message" => "Product Synced Successfully",
                    "alert-type" => "success",
                ];
            } catch (\Throwable $th) {
                Log::error($th->getMessage());
                $notification = [
                    [
                        "message" =>
                            "Problem encountered while syncing product.",
                        "alert-type" => "error",
                    ],
                ];
            }
        } else {
            $notification = [
                [
                    "message" => "Cannot sync because netsuite network",
                    "alert-type" => "error",
                ],
            ];
        }

        return redirect()
            ->back()
            ->with($notification);
    }



} //end class

<?php 

            if (!$product) {
                Product::create([
                    // "code" => $item["p_code"] ?? null,
                  "name" => $item["p_code"] ?? null,
                  "internal_id" => $item[""] ?? null,
                  "pid" => $item["pid"] ?? null,
                  "website_additional_text" => $item["p_additionaltext"] ?? null,
                  "vendor_name" => $item["p_suppliername"] ?? null,
                  "website_availability_text" => $item["p_outofstockmessage"] ?? null,
                  "website_description" => $item["p_tab_contents"] ?? null,
                  "website_disable_buy_button" => $item[""] ?? null,
                  "website_show_buy_button" => $item["p_showbuybutton"] ?? null,
                  "website_display_cafe_supplies" => $item[""] ?? null,
                  "website_display_car_cleaning" => $item[""] ?? null,
                  "website_display_hand_sanitiser" => $item[""] ?? null,
                  "website_display_insinc_products" => $item[""] ?? null,
                  "website_display_packnet" => $item[""] ?? null,
                  "website_display_rubbish_bags" => $item[""] ?? null,
                  "website_environmental_impact_logo" => $item[""] ?? null,
                  "website_unit_of_measure" => $item["p_uom"] ?? null,
                  "website_exclude_standard_freight_fees" => $item["p_freight_exclude"] ?? null,
                  "website_featured_product" => $item[""] ?? null,
                  "website_fixed_freight_cost" => $item["p_shipping"] ?? null,
                  "website_freight_weight" => $item["p_weight"] ?? null,
                  "website_item_title" => $item["p_subtitle"] ?? null,
                  "website_more_information" => $item["p_tab_moreinformation"] ?? null,
                  "website_pdf_documents" => $item["p_url"] ?? null,
                  "website_product_features" => $item["p_tab_features"] ?? null,
                  "website_promotion_order_confirm" => $item[""] ?? null,
                  "website_promotion_view_cart" => $item[""] ?? null,
                  "website_quantity_in_stock" => $item["p_qtyinstock"] ?? null,
                  "website_remove_buy_button" => $item["p_removebuybutton"] ?? null,
                  "website_stock_available" => $item["p_qtyinstock"] ?? null,
                  "website_display_disposable_gloves" => $item[""] ?? null,
                  "website_weekly_special" => $item[""] ?? null,
                  "website_video" => $item["p_tab_video"] ?? null,
                  "display_name" => $item["p_title"] ?? null,
                  "description" => $item["p_details"] ?? null,
                  "display_in_website" => $item[""] ?? null,
                  "environmental_impact" => $item[""] ?? null,
                  "not_loaded_on_any_website" => $item[""] ?? null,
                  "obsolete" => $item[""] ?? null,
                  "out_of_stock" => $item[""] ?? null,
                  "promotion_end_date" => $item["p_sale_ends"] ?? null,
                  "promotional_item" => $item["p_promote"] ?? null,
                  "promotional_price" => $item[""] ?? null,
                  "purchase_price" => $item[""] ?? null,
                  "sales_price" => $item["p_price"] ?? null,
                  "website_categories" => $item["p_categories"] ?? null,
                ]);
            }

            ?>

            OAuth realm="7103496", auth_consumer_key="708cc5b4bda99ffb17be3b4cb3509c792c1d4040c1cac15fdb19089689a93dcb",oauth_token="80a0894fd6cc1322ab4785f52d20997bbc01762c5f0eee5ca0c3c3a92b0f1550",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1685496282",oauth_nonce="0123456789abcdefghijk",oauth_version="1.0",oauth_signature="toBNSQVMO5PpuM69IUfEivom4M/CiUD2w0J/TAVTMCQ"
      

            https://7103496.suitetalk.api.netsuite.com/services/rest/record/v1/customer

            OAuth realm="7103496",oauth_consumer_key="708cc5b4bda99ffb17be3b4cb3509c792c1d4040c1cac15fdb19089689a93dcb",oauth_token="80a0894fd6cc1322ab4785f52d20997bbc01762c5f0eee5ca0c3c3a92b0f1550",oauth_signature_method="HMAC-SHA256",oauth_timestamp="1685496282",oauth_nonce="C0HnSQT2Xt0",oauth_version="1.0",oauth_signature="uraPPqydKyz3CWpSW2UwPeRLU8msi8krtX00Va%2BeMmU%3D"
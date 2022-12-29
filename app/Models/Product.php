<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
     protected $fillable = [
        "name",
        "internal_id",
        "pid",
        "website_additional_text",
        "vendor_name",
        "website_availablilty_text",
        "website_unit_of_measure",
        "website_categories",
        "website_description",
        "website_disable_buy_button",
        "website_show_buy_button",
        "website_display_cafe_supplies",
        "website_display_car_cleaning",
        "website_display_hand_sanitiser",
        "website_display_insinc_products",
        "website_display_packnet",
        "website_display_rubbish_bags",
        "website_environmental_impact_logo",
        "website_exclude_standard_freight_fees",
        "website_featured_product",
        "website_fixed_freight_cost",
        "website_freight_weight",
        "website_item_title",
        "website_more_information",
        "website_pdf_documents",
        "website_product_features",
        "website_promotion_order_confirm",
        "website_promotion_view_cart",
        "website_quantity_in_stock",
        "website_remove_buy_button",
        "website_stock_available",
        "website_display_disposable_gloves",
        "website_weekly_special",
        "website_videos",
        "display_name",
        "description",
        "display_in_web_site",
        "environmental_impact",
        "item_image",
        "not_loaded_on_any_website",
        "obsolete",
        "out_of_stock",
        "promotion_end_date",
        "promotional_item",
        "promotional_price",
        "purchase_price",
        "sales_price",
    ];
}

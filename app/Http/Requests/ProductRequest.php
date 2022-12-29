<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "name" => 'string',
            "internal_id" => 'integer',
            "pid" => 'integer',
            "website_additional_text" => 'string',
            "vendor_name" => 'string',
            "website_availablilty_text" => 'string',
            "website_categories" => 'string',
            "website_description" => 'string|max:10096',
            "website_disable_buy_button" => 'tinyInteger',
            "website_show_buy_button" => 'tinyInteger',
            "website_display_cafe_supplies" => 'tinyInteger',
            "website_display_car_cleaning" => 'tinyInteger',
            "website_display_hand_sanitiser" => 'tinyInteger',
            "website_display_insinc_products" => 'tinyInteger',
            "website_display_packnet" => 'tinyInteger',
            "website_display_rubbish_bags" => 'tinyInteger',
            "website_environmental_impact_logo" => 'string',
            "website_unit_of_measure" => 'string',
            "website_exclude_standard_freight_fees" => 'integer',
            "website_featured_product" => 'integer',
            "website_fixed_freight_cost" => 'integer',
            "website_freight_weight" => 'integer',
            "website_item_title" => 'string',
            "website_more_information" => 'string|max:10096',
            "website_pdf_documents" => 'string',
            "website_product_features" => 'string|max:10096',
            "website_promotion_order_confirm" => 'string',
            "website_promotion_view_cart" => 'string',
            "website_quantity_in_stock" => 'integer',
            "website_remove_buy_button" => 'tinyInteger',
            "website_stock_available" => 'integer',
            "website_display_disposable_gloves" => 'integer',
            "website_weekly_special" => 'integer',
            "website_videos" => 'integer',
            "display_name" => 'string',
            "description" => 'string|max:10096',
            "display_in_web_site" => 'tinyInteger',
            "environmental_impact" => 'string',
            "item_image" => 'string',
            "not_loaded_on_any_website" => 'tinyInteger',
            "obsolete" => 'tinyInteger',
            "out_of_stock" => 'tinyInteger',
            "promotion_end_date" => 'date',
            "promotional_item" => 'tinyInteger',
            "promotional_price" => 'decimal',
            "purchase_price" => 'decimal',
            "sales_price" => 'decimal',
        ];
    }
}

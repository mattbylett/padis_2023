<?php

namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithUpserts;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

class ProductMaster implements
    ToModel,
    WithUpserts,
    WithHeadingRow,
    WithBatchInserts,
    WithChunkReading
{
    /**
     * @return string|array
     */
    public function uniqueBy()
    {
        return "id";
    }

    /**
     * @return string|array
     */
    public function chunkSize(): int
    {
        return 500;
    }
    /**
     * @return string|array
     */
    public function batchSize(): int
    {
        return 250;
    }

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function model(array $row)
    {
        $product = new Product();
        $product->id = $row["internal_id"];
        $product->internal_id = $row["internal_id"];
        $product->name = $row["name"];
        $product->pid = $row["pid"];
        $product->website_additional_text = $row["website_additional_text"];
        $product->website_unit_of_measure = $row["website_unit_of_measure"];
        $product->vendor_name = $row["vendor_name"];
        $product->website_availablilty_text = $row["website_availablilty_text"];
        $product->website_categories = $row["website_categories"];
        $product->website_description = $row["website_description"];
        $product->website_disable_buy_button =
            $row["website_disable_buy_button"];
        $product->website_show_buy_button = $row["website_show_buy_button"];
        $product->website_display_cafe_supplies =
            $row["website_display_cafe_supplies"];
        $product->website_display_car_cleaning =
            $row["website_display_car_cleaning"];
        $product->website_display_hand_sanitiser =
            $row["website_display_hand_sanitiser"];
        $product->website_display_insinc_products =
            $row["website_display_insinc_products"];
        $product->website_display_packnet = $row["website_display_packnet"];
        $product->website_display_rubbish_bags =
            $row["website_display_rubbish_bags"];
        $product->website_environmental_impact_logo =
            $row["website_environmental_impact_logo"];
        $product->website_exclude_standard_freight_fees =
            $row["website_exclude_standard_freight_fees"];
        $product->website_featured_product = $row["website_featured_product"];
        $product->website_fixed_freight_cost =
            $row["website_fixed_freight_cost"];
        $product->website_freight_weight = $row["website_freight_weight"];
        $product->website_item_title = $row["website_item_title"];
        $product->website_more_information = $row["website_more_information"];
        $product->website_pdf_documents = $row["website_pdf_documents"];
        $product->website_product_features = $row["website_product_features"];
        $product->website_promotion_order_confirm =
            $row["website_promotion_order_confirm"];
        $product->website_promotion_view_cart =
            $row["website_promotion_view_cart"];
        $product->website_quantity_in_stock = $row["website_quantity_in_stock"];
        $product->website_remove_buy_button = $row["website_remove_buy_button"];
        $product->website_stock_available = $row["website_stock_available"];
        $product->website_display_disposable_gloves =
            $row["website_display_disposable_gloves"];
        $product->website_weekly_special = $row["website_weekly_special"];
        $product->website_videos = $row["website_videos"];
        $product->display_name = $row["display_name"];
        $product->description = $row["description"];
        $product->display_in_web_site = $row["display_in_web_site"];
        $product->environmental_impact = $row["environmental_impact"];
        $product->item_image = $row["item_image"];
        $product->not_loaded_on_any_website = $row["not_loaded_on_any_website"];
        $product->obsolete = $row["obsolete"];
        $product->out_of_stock = $row["out_of_stock"];
        $product->promotion_end_date = $row["promotion_end_date"];
        $product->promotional_item = $row["promotional_item"];
        $product->promotional_price = $row["promotional_price"];
        $product->purchase_price = $row["purchase_price"];
        $product->sales_price = $row["sales_price"];

        $product->save();
    }
}

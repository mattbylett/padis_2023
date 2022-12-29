<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
$table->id();
            $table->string("name")->nullable();
            $table->integer("internal_id")->nullable();
            $table->integer("pid")->nullable();
            $table->string("website_additional_text")->nullable();
            $table->string("vendor_name")->nullable();
            $table->string("website_availablilty_text")->nullable();
            $table->string("website_categories")->nullable();
            $table->text("website_description")->nullable();
            $table->tinyInteger("website_disable_buy_button")->nullable();
            $table->tinyInteger("website_show_buy_button")->nullable();
            $table->tinyInteger("website_display_cafe_supplies")->nullable();
            $table->tinyInteger("website_display_car_cleaning")->nullable();
            $table->tinyInteger("website_display_hand_sanitiser")->nullable();
            $table->tinyInteger("website_display_insinc_products")->nullable();
            $table->tinyInteger("website_display_packnet")->nullable();
            $table->tinyInteger("website_display_rubbish_bags")->nullable();
            $table->string("website_environmental_impact_logo")->nullable();
            $table->string("website_unit_of_measure")->nullable();
            $table
                ->integer("website_exclude_standard_freight_fees")
                ->nullable();
            $table->integer("website_featured_product")->nullable();
            $table->integer("website_fixed_freight_cost")->nullable();
            $table->integer("website_freight_weight")->nullable();
            $table->string("website_item_title")->nullable();
            $table->text("website_more_information")->nullable();
            $table->string("website_pdf_documents")->nullable();
            $table->text("website_product_features")->nullable();
            $table->string("website_promotion_order_confirm")->nullable();
            $table->string("website_promotion_view_cart")->nullable();
            $table->integer("website_quantity_in_stock")->nullable();
            $table->tinyInteger("website_remove_buy_button")->nullable();
            $table->integer("website_stock_available")->nullable();
            $table->integer("website_display_disposable_gloves")->nullable();
            $table->integer("website_weekly_special")->nullable();
            $table->string("website_videos")->nullable();
            $table->string("display_name")->nullable();
            $table->text("description")->nullable();
            $table->tinyInteger("display_in_web_site")->nullable();
            $table->string("environmental_impact")->nullable();
            $table->string("item_image")->nullable();
            $table->tinyInteger("not_loaded_on_any_website")->nullable();
            $table->tinyInteger("obsolete")->nullable();
            $table->tinyInteger("out_of_stock")->nullable();
            $table->date("promotion_end_date")->nullable();
            $table->tinyInteger("promotional_item")->nullable();
            $table->decimal("promotional_price")->nullable();
            $table->decimal("purchase_price")->nullable();
            $table->decimal("sales_price")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};

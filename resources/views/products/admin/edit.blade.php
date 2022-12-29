@extends('admin.master')

@section('page-styles')
<link rel="stylesheet" href="/css/custom-styles.css" />


@section('admin-content')


    <form action="{{ route('product.update.single', $product->id) }}" method="POST">
      @csrf
      <div class="product-form mb-10 mt-10 col-lg-9">
        <h2 class="mb-5">Edit Product:  {{$product->name}}</h2>
        <label for="display_name" class="form-label">Display Name</label>
        <input name="display_name" type="text" class="form-control mb-5" placeholder="Enter Product Title" value="{{ $product->display_name }}">
        <label for="description" class="form-label">Product Description</label>
        <textarea class="form-control" name="description" id="" cols="30" rows="10">{{$product->description}}</textarea>

      <div class="row mt-10">
        <div class="col-lg-4">
          <label for="name" class="form-label">Product Code</label>
          <input name="name" type="text" class="form-control mb-5" placeholder="Enter Product code" value="{{ $product->name}}">
        </div>
        <div class="col-lg-4">
          <label for="internal_id" class="form-label">Internal ID (Netsuite)</label>
          <input name="internal_id" type="text" class="form-control mb-5" placeholder="Enter Internal ID" value="{{ $product->internal_id}}">
        </div>
        <div class="col-lg-4">
          <label for="pid" class="form-label">PID (Website World)</label>
          <input name="pid" type="text" class="form-control mb-5" placeholder="Enter Product code" value="{{ $product->pid}}">
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4">
          <label for="vendor_name" class="form-label">Vendor Name</label>
          <input name="vendor_name" type="text" class="form-control mb-5" placeholder="Enter Vendor Name" value="{{ $product->vendor_name}}">
        </div>
        <div class="col-lg-4">
          <label for="purchase_price" class="form-label">Purchase Price</label>
          <input name="purchase_price" type="text" class="form-control mb-5" placeholder="Enter Purchase Price" value="{{ $product->purchase_price}}">
        </div>
        <div class="col-lg-4">
          <label for="sales_price" class="form-label">Sales Price</label>
          <input name="sales_price" type="text" class="form-control mb-5" placeholder="Enter Sales Price" value="{{ $product->sales_price}}">
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4">
          <label for="promotional_item" class="form-label">Promotional Item</label>
          <input name="promotional_item" type="text" class="form-control mb-5" placeholder="Enter Promotional Item" value="{{ $product->promotional_item}}">
        </div>
        <div class="col-lg-4">
          <label for="promotional_price" class="form-label">Promotional Price</label>
          <input name="promotional_price" type="number" class="form-control mb-5" placeholder="Enter Promotional Price" value="{{ $product->promotional_price}}">
        </div>
        <div class="col-lg-4">
          <label for="promotional_end_date" class="form-label">Promotional End Date</label>
          <input name="promotional_end_date" type="text" class="form-control mb-5" placeholder="Promotional End Date" value="{{ $product->sales_price}}">
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4">
          <label for="environmental_impact" class="form-label">Environmental Impact</label>
          <input name="environmental_impact" type="text" class="form-control mb-5" placeholder="Enter Environmental Impact" value="{{ $product->environmental_impact }}">
        </div>
        <div class="col-lg-4">
          <label for="website_stock_available" class="form-label">Stock Available</label>
          <input name="website_stock_available" type="number" class="form-control mb-5" placeholder="Enter Stock Available" value="{{ $product->website_stock_available}}">
        </div>
        <div class="col-lg-4">
          <label for="website_freight_weight" class="form-label">Freight Weight</label>
          <input name="website_freight_weight" type="text" class="form-control mb-5" placeholder="Freight Weight" value="{{ $product->sales_price}}">
        </div>
      </div>
    </div>
      <div class="row mt-5">
        <h3 class="text-center">Show on Websites...</h3>        
        <div class="website-display">
          <label for="cafe_supplies" class="form-label">Cafe Supplies</label>
          <input name="cafe_supplies" type="checkbox" value="{{ $product->website_display_cafe_supplies}}"  {{(!empty($product->website_display_cafe_supplies)) ? 'checked' : ''}} />
          <label for="car_cleaning" class="form-label">Car Cleaning</label>
          <input name="car_cleaning" type="checkbox" value="{{ $product->website_display_car_cleaning }}"  {{(!empty($product->website_display_car_cleaning)) ? 'checked' : ''}} />
          <label for="hand_sanitizer" class="form-label">Hand Sanitiser</label>
          <input name="hand_sanitizer" type="checkbox" value="{{ $product->website_display_hand_sanitiser }}"  {{(!empty($product->website_display_hand_sanitiser)) ? 'checked' : ''}} />
          <label for="insinc_products" class="form-label">Insinc Products</label>
          <input name="insinc_products" type="checkbox" value="{{$product->website_display_insinc_products}}"  {{(!empty($product->website_display_insinc_products)) ? 'checked' : ''}}/>
          <label for="packnet" class="form-label">Packnet</label>
          <input name="packnet" type="checkbox" value="{{ $product->website_display_packnet }}"  {{(!empty($product->website_display_packnet)) ? 'checked' : ''}} />
          <label for="rubbish_bags" class="form-label">Rubbish Bags</label>
          <input name="rubbish_bags" type="checkbox" value="{{ $product->website_display_rubbish_bags }}"  {{(!empty($product->website_display_rubbish_bags)) ? 'checked' : ''}} />
          <label for="disposable_gloves" class="form-label">Disposable Gloves</label>
          <input name="disposable_gloves" type="checkbox" value="{{ $product->website_display_disposable_gloves }}"  {{(!empty($product->website_display_disposable_gloves)) ? 'checked' : ''}} />
        </div>
      </div>
      <div class="product-form-sumbit mt-10 mb-10">
        <button class="btn btn-primary" type="submit">Update Product</button>
       </div>
    </form>
@endsection

@section('page-scripts')
    
@endsection
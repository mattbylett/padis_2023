@extends('admin.master')

@section('admin-content')
{{-- @extends('layouts.dashboard')

@section('admin_content') --}}

    <h4>Product Management - Master Product Upload</h4>
    <form method="POST" action="{{route('import.master')}}" enctype="multipart/form-data">
        @csrf
        <div class="card col-lg-4">
            <div class="card-header">Product Management</div>
            <div class="card-body">
                <p>Please upload your Master Product sheet below.  This upload form is for importing all of your product data into the system in bulk.  This would be likely used when you are adding a new supplier to the system or add a new range.</p>
                {{-- <p><a class="" href="{{URL::to('/')}}/imports/templates/allproducts-headers.xlsx" target="blank"> Download Template Here</a></p> --}}
                <div class="form-group">
                    <label for="formFileSm" class="form-label">Upload Your Master Product File Here</label>
                    <input  class="form-control form-control-sm" id="select_file" type="file" name="select_file">
                </div>
                <div class="mb-10">
                    <br/>
                    <button class="btn btn-primary btn-sm" type="submit" onClick="">Upload Stock Sheet</button>
                </div>
            </div>
        </div>
    </form>

    <h4>Product Management - Upload Website IDs</h4>
    <form method="POST" action="{{route('import.webids')}}" enctype="multipart/form-data">
        @csrf
        <div class="card col-lg-4">
            <div class="card-header">Website Id's For Insinc</div>
            <div class="card-body">
                <p>Please upload your Website ID sheet below.  This upload form is for importing all of your product ids into the the different website world entities</p>
                {{-- <p><a class="" href="{{URL::to('/')}}/imports/templates/allproducts-headers.xlsx" target="blank"> Download Template Here</a></p> --}}
                <div class="form-group">
                    <label for="formFileSm" class="form-label">Upload Your Website ID File Here</label>
                    <input  class="form-control form-control-sm" id="select_file" type="file" name="select_file">
                </div>
                <div class="mb-10">
                    <br/>
                    <button class="btn btn-primary btn-sm" type="submit" onClick="">Upload Web Ids</button>
                </div>
            </div>
        </div>
    </form>

@endsection

@extends('admin.master')

@section('admin-content')
    <form action="{{route('ww.update.featured')}}">
    @csrf
      <label for="Promotions">Promotions</label><br/>
      <input type="text" name="product_id" placeholder="Please Enter a Product ID"/>
      <button type="submit">Submit</button>
    </form>
@endsection
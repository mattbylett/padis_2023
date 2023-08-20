@extends('admin.master')

@section('page-styles')
<link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet">
<link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">
@endsection

@section('admin-content')
<div class="table">

  {{$customers}}
  {{-- @foreach ($customers as $customer) 
  <a href="{{route('customer.show', $customer->id)}}"><li>Customer ID : {{$customer->id}}</li></a>
  @endforeach --}}
</div>
@endsection
@extends('admin.master')

@section('page-styles')
<link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet">
<link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">
@endsection

@section('admin-content')
<div class="table-responsive px-5 py-5">
    <table class="table gs-7 gy-7 gx-7 table-striped table-rounded table-hover table-active" id="products-table">
        <thead>
            {{-- <th scope="col">ID</th> --}}
            <th scope="col">Internal ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Cost</th>
            <th scope="col">List</th>
            {{-- <th scope="col">Date To</th> --}}
            <th scope="col">Vendor</th>
            <th scope="col">Action</th>
        </thead>
    </table>
</div>

@endsection

@section('page-scripts')
<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>

<script>
    $(document).ready(function() {
        var table = $('#products-table').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('product.admin.index') }}",
            columns: [
                // {data: 'DT_RowIndex', name: 'DT_RowIndex'},
                {data: 'id', name: 'id'},
                {data: 'code', name: 'name'},
                {data: 'display_name', name: 'display_name'},
                {data: 'status', name: 'status'},
                {data: 'purchase_price', name: 'purchase_price'},
                {data: 'sales_price', name: 'sales_price'},
                // {data: 'promotion_end_date', name: 'promotion_end_date'},
                {data: 'vendor_name', name: 'vendor_name'},
                {data: 'action', name: 'action'}
            ]
        });
    });
</script>
@endsection
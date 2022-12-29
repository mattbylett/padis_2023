<form method="POST" id="delete-form">
    @method("DELETE")
    @csrf
</form>

<form method="POST" id="new-sync-form">
    @csrf
</form>

<script src="{{ asset('https://unpkg.com/sweetalert/dist/sweetalert.min.js')}}"></script>

<script>
    $(document).on("click", "#delete", function(e){
        e.preventDefault();
        var link = $(this).attr("href");
        swal({
            title: "Are You Sure You Want To Delete This Data?",
            text: "This Will Be Permanent!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    $("#delete-form").attr('action', link)
                    $("#delete-form").submit()
                } else {
                    swal("Operation Cancelled! - Data Saved");
                }
            });
    });

    $(document).on("click", "#newsync", function(e){
        e.preventDefault();
        var link = $(this).attr("href");
        swal({
            title: "Are You Sure You Want To Sync This Data?",
            text: "This Will Be Permanent!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willSync) => {
                if (willSync) {
                    $("#new-sync-form").attr('action', link)
                    $("#new-sync-form").submit()
                } else {
                    swal("Operation Cancelled! - Data Saved");
                }
            });
    });
</script>

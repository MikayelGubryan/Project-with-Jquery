$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function() {
        var index = $(this).index(); // Get the index of the clicked li
        $('.popup').hide(); // Hide all popups initially

        // Show the corresponding popup based on the index
        $('.popup').eq(index).toggle();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
        }
    });
});

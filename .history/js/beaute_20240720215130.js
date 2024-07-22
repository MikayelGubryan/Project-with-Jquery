$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function() {
        var index = $(this).index();
        $('.popup').hide();

        // Show the corresponding popup based on the index
        $('.popup').eq(index).toggle();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
        }
    });
});

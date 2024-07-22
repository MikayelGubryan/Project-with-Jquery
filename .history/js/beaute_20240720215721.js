$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '#form-list-1', function() {
        $('.popup').hide();
        $('.popup').eq(0).toggle();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
        }
    });
});

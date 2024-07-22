$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list-1', function() {
        var index = $(this).index();
        $('.popup').hide();
        $('.popup').eq(index).toggle();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
        }
    });
});

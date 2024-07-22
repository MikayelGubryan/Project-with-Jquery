$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '#form-list-1', function() {
        if($(this).index() === 0){
            $('.popup').hide();
            $()
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
        }
    });
});

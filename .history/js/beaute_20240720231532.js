$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function() {
        if($(this).index() === 0){
            $('.popup').hide();
            $('#').hide();
            $('#submenu1').toggle();
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
        }
    });
});

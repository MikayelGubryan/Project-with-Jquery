$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function() {
        if($(this).index() === 0){
            $('.popup').hide();
            $('#submenu1-1').toggle();
            $('#submenu1').toggle();
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
        }
    });
});

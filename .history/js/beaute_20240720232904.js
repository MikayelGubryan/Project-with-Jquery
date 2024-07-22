$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function() {
        if($(this).index() === 0){
            $('#submenu1').toggle();
            $('#submenu2').hide();
            $('#beaute-img').css('visibility', 'hidden');
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
        }
    });
});

$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        if($(this).index() === 0){
            $('#submenu1').toggle();

            $('.form-list').css('color', 'gray');
            $(this).css('color', '#010114');
            $('#beaute-img').css('visibility', 'hidden');
        }
    });

$('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
    event.stopPropagation();

    if($(this).index() === 1){
        $('#submenu1-1').toggle();
        $('.submenu-items').css('color', 'gray');
    }    
});

$('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
    event.stopPropagation();

    if($(this).index() === 4){
        $('#submenu2').toggle();
        $('.submenu-menu-1').css('background', 'gray');
        $('.submenu-items-1').css('color', 'gray');

    }    
});

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
            $('.form-list').css('color', '#010114');
        }
    });
});

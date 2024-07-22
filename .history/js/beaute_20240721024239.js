$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        $('.form-list').removeClass('active').addClass('inactive');
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); 

        if($(this).index() === 0){
            $('#submenu1').toggle();
            $('.appointment-form').css('background-color', '#FFFFFF');
            $(this).removeClass('inactive').addClass('active');
            $('#beaute-img').css('visibility', 'hidden');
        }
    });

$('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
    event.stopPropagation();

    $('.submenu-items').removeClass('active').addClass('inactive');
    
    if($(this).index() === 1){
        $('#submenu1-1').toggle();
        $('#submenu1').css('background-color', '#FFFFFF');
        $('.submenu-items').css('color', 'gray');
    }    
});

$('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
    event.stopPropagation();

    if($(this).index() === 4){
        $('#submenu2').toggle();
        $('#submenu1-1').css('background-color', '#FFFFFF');
        $('.submenu-items-1').css('color', 'gray');

        if ($(this).index() === 0) {
            $('#submenu-items-3').css('color', '.in');
        } else {
            $('#submenu-items-2').css('color', 'gray');
        }
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

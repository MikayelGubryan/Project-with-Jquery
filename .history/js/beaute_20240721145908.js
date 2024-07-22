$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        $('.form-list').removeClass('active').addClass('inactive');
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); 

        if($(this).index() === 0){
            var $popup = $('#submenu1');
            positionPopupRelativeToFormList($(this), $popup);
            $popup.toggle();
            $('.appointment-form').css('background-color', '#FFFFFF');
            $(this).removeClass('inactive').addClass('active');
            $('#beaute-img').css('visibility', 'hidden');
        }
    });

$('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
    event.stopPropagation();

    $('.submenu-items').removeClass('active').addClass('inactive');
    
    if($(this).index() === 1){
        var $popup = $('#submenu1-1');
        positionPopupRelativeToFormList($(this), $popup);
        $popup.toggle();
        $('#submenu1').css('background-color', '#FFFFFF');
        $('.submenu-items').css('color', 'gray');
    }    
});

$('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
    event.stopPropagation();

    if($(this).index() === 4){
        var $popup = $('#submenu2');
        positionPopupRelativeToFormList($(this), $popup);
        $popup.toggle();
        $('#submenu1-1').css('background-color', '#FFFFFF');
        $('.submenu-items-1').css('color', 'gray');

        if ($(this).index() === 0) {
            $('#submenu-items-2').css('color', '.active');
            $('#submenu-items-3').css('color', '.inactive');
        } else {
            $('#submenu-items-2').css('color', '.inactive');
            $('#submenu-items-3').css('color', '.active');        }
    }    
});

function positionPopupRelativeToFormList($formListItem, $popup) {
    var offset = $formListItem.offset();
    var leftPosition = offset.left + $formListItem.outerWidth();
    $popup.css({
        // top: offset.top,
        left: 10,
        top: 0
    });
}

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
            $('.form-list').css('color', '#010114');
        }
    });
});

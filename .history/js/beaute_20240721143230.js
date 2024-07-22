$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        // Close other popups and reset styles
        $('.form-list').removeClass('active').addClass('inactive');
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); 

        if ($(this).index() === 0) {
            var $popup = $('#submenu1');
            positionPopupRelativeToFormList($(this), $popup);
            $popup.toggle();
            $('.appointment-form').css('background-color', '#FFFFFF');
            $(this).removeClass('inactive').addClass('active');
            $('#beaute-img').css('visibility', 'hidden');
        }
        // Add similar conditions for other form list items
    });

    $('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
        event.stopPropagation();

        $('.submenu-items').removeClass('active').addClass('inactive');
        
        if ($(this).index() === 1) {
            var $popup = $('#submenu1-1');
            positionPopupRelativeToFormList($(this), $popup);
            $popup.toggle();
            $('#submenu1').css('background-color', '#FFFFFF');
            $('.submenu-items').css('color', 'gray');
        }
    });

    function positionPopupRelativeToFormList($formListItem, $popup) {
        var offset = $formListItem.offset();
        var leftPosition = offset.left + $formListItem.outerWidth();
        $popup.css({
            top: offset.top,
            left: leftPosition
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

$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        // Close other popups and reset styles
        $('.form-list').removeClass('active').addClass('inactive');
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); 

        // Show the respective popup
        if ($(this).index() === 0) {
            var $popup = $('#submenu1');
            positionPopupRelativeToPreviousPopup($popup);
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
            positionPopupRelativeToPreviousPopup($popup);
            $popup.toggle();
            $('#submenu1').css('background-color', '#FFFFFF');
            $('.submenu-items').css('color', 'gray');
        }
        // Add similar conditions for other submenu items
    });

    // Function to position popup relative to the previous popup
    function positionPopupRelativeToPreviousPopup($popup) {
        var $lastVisiblePopup = $('.popup:visible').last();
        var offset = $lastVisiblePopup.offset();
        var topPosition = offset.top;
        var leftPosition = offset.left + $lastVisiblePopup.outerWidth() + 10; // Adjust as needed
        $popup.css({
            top: topPosition,
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

$(document).ready(function() {
    $('.popup').hide(); // Hide all popups initially

    // Click handler for form-list items
    $('.appointment-form-container').on('click', '.form-list li', function(event) {
        event.stopPropagation();

        // Hide other active elements and popups
        $('.form-list li').removeClass('active').addClass('inactive');
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide();

        // Show popup related to clicked form-list item
        var $popup = $('#submenu1'); // Example popup ID, adjust as needed
        positionPopupRelativeToFormList($(this), $popup);
        $popup.toggle();
        $(this).removeClass('inactive').addClass('active');
        $('.appointment-form').css('background-color', '#FFFFFF');
        $('#beaute-img').css('visibility', 'hidden');
    });

    // Click handler for submenu-item-1
    $('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
        event.stopPropagation();

        // Hide other active submenu items
        $('.submenu-items').removeClass('active').addClass('inactive');

        // Show corresponding submenu popup
        var $popup = $('#submenu1-1'); // Example popup ID, adjust as needed
        positionPopupRelativeToFormList($(this), $popup);
        $popup.toggle();
        $('#submenu1').css('background-color', '#FFFFFF');
        $('.submenu-items').css('color', 'gray');
    });

    // Click handler for submenu-item-2
    $('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
        event.stopPropagation();

        // Show corresponding submenu popup
        var $popup = $('#submenu2'); // Example popup ID, adjust as needed
        positionPopupRelativeToFormList($(this), $popup);
        $popup.toggle();
        $('#submenu1-1').css('background-color', '#FFFFFF');
        $('.submenu-items-1').css('color', 'gray');

        // Example conditionals (not clear what they're supposed to do)
        if ($(this).index() === 0) {
            $('#submenu-items-2').css('color', '.active');
            $('#submenu-items-3').css('color', '.inactive');
        } else {
            $('#submenu-items-2').css('color', '.inactive');
            $('#submenu-items-3').css('color', '.active');
        }
    });

    // Function to position popup relative to the clicked element
    function positionPopupRelativeToFormList($formListItem, $popup) {
        var offset = $formListItem.offset();
        var leftPosition = offset.left + $formListItem.outerWidth();
        $popup.css({
            left: leftPosition,
            top: offset.top // Adjust top position if needed
        });
    }

    // Click handler to close popups when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
            $('.form-list').css('color', '#010114');
        }
    });
});

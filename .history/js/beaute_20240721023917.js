$(document).ready(function() {
    // Hide all popups initially
    $('.popup').hide();

    // Click event handler for '.form-list'
    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        // Reset styles for other elements
        $('.form-list').removeClass('active').addClass('inactive');
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); // Hide all popups

        // Toggle visibility of submenu1
        if ($(this).index() === 0) {
            $('#submenu1').toggle();
            $('.appointment-form').css('background-color', '#FFFFFF');
            $(this).removeClass('inactive').addClass('active');
            $('#beaute-img').css('visibility', 'hidden');
        }
    });

    // Click event handler for '.submenu-item-1'
    $('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
        event.stopPropagation();

        // Reset styles for other elements
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); // Hide all popups

        // Toggle visibility of submenu1-1
        if ($(this).index() === 1) {
            $('#submenu1-1').toggle();
            $('#submenu1').css('background-color', '#FFFFFF');
            $(this).removeClass('inactive').addClass('active');
        }
    });

    // Click event handler for '.submenu-item-2'
    $('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
        event.stopPropagation();

        // Reset styles for other elements
        $('.submenu-items-1').removeClass('active').addClass('inactive');
        $('.popup').hide(); // Hide all popups

        // Toggle visibility of submenu2
        if ($(this).index() === 4) {
            $('#submenu2').toggle();
            $('#submenu1-1').css('background-color', '#FFFFFF');
            $(this).removeClass('inactive').addClass('active');

            // Conditionally set gray color based on index
            if ($(this).index() === 0) {
                $('#submenu-items-3').addClass('inactive');
                $('#submenu-items-2').removeClass('inactive').addClass('active');
            } else {
                $('#submenu-items-2').addClass('inactive');
                $('#submenu-items-3').removeClass('inactive').addClass('active');
            }
        }
    });

    // Click event handler for document (to hide all popups)
    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
            $('.form-list').removeClass('inactive').addClass('active');
        }
    });
});

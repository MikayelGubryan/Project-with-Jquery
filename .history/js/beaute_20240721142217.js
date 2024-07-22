$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        // Reset all form lists and submenu items
        $('.form-list').removeClass('active').addClass('inactive');
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); 

        // Toggle the clicked form list item
        $(this).toggleClass('inactive active');
        var index = $(this).index();

        // Hide all other popups
        $('.popup').not($(this).next('.popup')).hide();

        // Position the popup next to the clicked form list item
        var position = $(this).position();
        var top = position.top + $(this).outerHeight();
        var left = position.left;
        $(this).next('.popup').css({ top: top, left: left }).toggle();

        // Adjust background and visibility as needed
        $('.appointment-form').css('background-color', '#FFFFFF');
        $('#beaute-img').css('visibility', 'hidden');
    });

    $('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
        event.stopPropagation();

        // Reset all submenu items
        $('.submenu-items').removeClass('active').addClass('inactive');
        
        // Toggle the clicked submenu item
        $(this).toggleClass('inactive active');

        if($(this).index() === 1){
            $('#submenu1-1').toggle();
            $('#submenu1').css('background-color', '#FFFFFF');
            $('.submenu-items').css('color', 'gray');
        }    
    });

    $('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
        event.stopPropagation();

        // Toggle the clicked submenu item
        $(this).toggleClass('inactive active');

        if($(this).index() === 4){
            $('#submenu2').toggle();
            $('#submenu1-1').css('background-color', '#FFFFFF');
            $('.submenu-items-1').css('color', 'gray');

            // Manage colors of submenu items based on index
            if ($(this).index() === 0) {
                $('#submenu-items-2').removeClass('inactive').addClass('active');
                $('#submenu-items-3').removeClass('active').addClass('inactive');
            } else {
                $('#submenu-items-2').removeClass('active').addClass('inactive');
                $('#submenu-items-3').removeClass('inactive').addClass('active');        
            }
        }    
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
            $('.form-list').removeClass('active').addClass('inactive').css('color', '#010114');
        }
    });
});
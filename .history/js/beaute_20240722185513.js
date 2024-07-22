$(document).ready(function() {

    const arrowIconRight = '<i class="arrow-icon fas fa-chevron-right"></i>';
    const arrowIconDown = '<i class="arrow-icon fas fa-chevron-down"></i>';
    const arrowIconUp = '<i class="arrow-icon fas fa-chevron-above"></i>';


    $('.hamburger-menu').click(function() {
        $('.nav-links').toggleClass('active');
    });

    function checkWindowSizeAndAddArrows() {
        if (window.matchMedia("(max-width: 800px)").matches) {
            if (!$('.form-list').find('.arrow-icon').length) {
                $('.form-list').each(function() {
                    if (!$(this).find('.arrow-icon').length) {
                        $(this).append(arrowIconDown);
                    }
                });
            }

            $('.appointment-form-container').on('click', '.form-list-title', function(event) {
                event.stopPropagation();
    
                $('.form-list').not(this).removeClass('active').css('background-color', ''); 
                $(this).toggleClass('active');
                $('.form-list-title').css('background-color', $(this).hasClass('active') ? '#010114' : '');
                


                $(this).find('.arrow-icon').remove(); 
                $(this).append($(this).hasClass('active') ? arrowIconUp : arrowIconDown); 

                $(this).find('.submenu-popup').toggle();
                });
        } else {
            $('.arrow-icon').remove();
        }
    }

    checkWindowSizeAndAddArrows();

    $(window).resize(function() {
        checkWindowSizeAndAddArrows();
    });

    $('.popup').hide();

    

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        if (window.matchMedia("(max-width: 800px)").matches) {
            return;
        }

        $('.form-list').removeClass('active').addClass('inactive');
        $('.form-list').find('.arrow-icon').remove();
        $('.submenu-items').removeClass('active').addClass('inactive');
        $('.popup').hide(); 

        if($(this).index() === 0){
            var $popup = $('#submenu1');
            positionPopupRelativeToFormList($(this), $popup);
            $popup.toggle();
            $('.appointment-form').css('background-color', '#FFFFFF');
            $(this).removeClass('inactive').addClass('active')
            $('#beaute-img').css('visibility', 'hidden');

            if (!$(this).find('.arrow-icon').length) {
                $(this).append(arrowIconRight);
            }
            
        }
    });

$('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
    event.stopPropagation();

    $('.submenu-items').removeClass('active').addClass('inactive');
    
    if($(this).index() === 1){
        $(this).removeClass('inactive').addClass('active').append(arrowIconRight);
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
        $(this).removeClass('inactive').addClass('active').append(arrowIconRight);
        var $popup = $('#submenu2');
        positionPopupRelativeToFormList($(this), $popup);
        $popup.toggle();
        $('#submenu1-1').css('background-color', '#FFFFFF');
        $('.submenu-items-1').css('color', 'gray');

        $('#submenu-items-2').on('click', function() {
            $(this).css('color', '#010114');
            $('#submenu-items-3').css('color', 'gray');
        });

        $('#submenu-items-3').on('click', function() {
            $(this).css('color', '#010114');
            $('#submenu-items-2').css('color', 'gray');
        });
    }    
});

function positionPopupRelativeToFormList($formListItem, $popup) {
    var offset = $formListItem.offset();
    var offset2 = $popup.offset();
    var leftPosition = offset.left + 100;

    $popup.css({
        left: leftPosition,
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

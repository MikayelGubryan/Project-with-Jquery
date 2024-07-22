$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function(event) {
        event.stopPropagation();

        if($(this).index() === 0){
            $('#submenu1').toggle();
            // $('#submenu2').hide(); 
            // $('#submenu3').hide();
            $('#beaute-img').css('visibility', 'hidden');
        }
    });

$('.appointment-form-container').on('click', '.submenu-item-1', function(event) {
    event.stopPropagation();

    if($(this).index() === 1){
        $('#submenu1-1').toggle();
    }    
});

$('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
    event.stopPropagation();

    if($(this).index() === 4){
        $('#submenu').toggle();
    }    
});

// $('.appointment-form-container').on('click', '.submenu-item-2', function(event) {
//     event.stopPropagation();

//     if($(this).index() === 1){
//         $('#submenu3').toggle();
//     }    

// });

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
        }
    });
});

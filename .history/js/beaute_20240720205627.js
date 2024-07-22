$(document).ready(function() {
    $('.popup').hide();

    $('.popup-trigger').click(function() {
        var popupId = $(this).data('popup-id');
        $('.popup').not('#' + popupId).hide();
        $('#' + popupId).toggle();
    });

    
});
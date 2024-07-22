$(document).ready(function() {
    $('.popup').hide();

    $('.popup-trigger').click(function() {
        var popupId = $(this).data('popup-id');
        $('.popup').not('#' + popupId).hide();
        $('#' + popupId).toggle();
    });


});

$(document).click(function(event) {
    if (!$(event.target).closest('.popup').length) {
        $('.popup').hide();
    }
})


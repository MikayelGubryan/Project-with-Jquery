$(document).ready(function() {
    $('.popup').hide();

    $('.popup-trigger').click(function() {
        var popupId = $(this).data('popup-id');
        $('.popup')
        $('#' + popupId).show();
    });
});
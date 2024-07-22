$(document).ready(function() {
    $('.popup').hide();

    $('.appointment-form-container').on('click', '.form-list', function() {
        if($(this).index() === 0){
            $('#submenu1').toggle();
            $('#submenu2').hide();
            $('#beaute-img').css('visibility', 'hidden');
        }
    });

$('.appointment-form-container').on('click', '.submenu-item', function() {
    if($(this).index() === 1){
  $('#submenu2').toggle();
}

    $(document).click(function(event) {
        if (!$(event.target).closest('.appointment-form-container').length) {
            $('.popup').hide();
            $('#beaute-img').css('visibility', 'visible');
        }
    });
});

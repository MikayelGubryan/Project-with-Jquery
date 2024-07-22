// $(document).ready(function() {
//     $('.popup').hide();

//     $('.popup-trigger').click(function() {
//         var popupId = $(this).data('popup-id');
//         $('.popup').not('#' + popupId).hide();
//         $('#' + popupId).toggle();
//     });


// });

// $(document).click(function(event) {
//     if (!$(event.target).closest('.popup').length) {
//         $('.popup').hide();
//     }
// })

$(document).ready(function() {
    // When clicking on the 'Treatments' list item
    $('.treat').click(function() {
        // Toggle the visibility of your popup or implement your desired functionality here
        alert('Popup should open here'); // Example alert to indicate the click event works
        // Replace alert with your actual popup logic
    });
});
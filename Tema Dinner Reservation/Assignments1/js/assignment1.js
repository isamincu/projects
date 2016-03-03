
//auto executing function
$(function() {

    console.log("init");
    var $attachmentContainer = $('.attachment_img_container');
    var $confirmButton = $(".confirm_button");

    //add on click handler
    $attachmentContainer.on("click", function() {
        console.log("mouse click");
        $('#attachmentModal').modal('toggle');
    });


    $confirmButton.on("click", function() {
        var $buttonContainer = $(".confirm_button_container");
        $buttonContainer.empty();
        $buttonContainer.append(
            '<h1 class="text-center confirmed_successful"> Thank you. </h1>' +
            '<h2 class="text-center confirmed_successful">' +
                '<span class="glyphicon glyphicon-ok"> Reservation has been confirmed.</span>' +
            '</h2>'
        )
    });
});





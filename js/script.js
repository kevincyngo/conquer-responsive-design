//script to send email
$(".contact-form").submit(function(event) {
    alert("sent form.");
});


//allows external linking
$(".navbar-nav li").click(function (event) {
    if ($(this).hasClass("external")) {
        event.preventDefault();
    }
});
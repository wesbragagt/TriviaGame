// when start button clicked load the other html file which will load the other javascript

$(document).ready(function () {
    $("#start").on("click", function () {
        $("#content").load("../../index.html");
    })
})
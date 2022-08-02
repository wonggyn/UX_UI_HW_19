console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    /*
    $(".hover").hover(
        function() {
            $(this).css("text-decoration", "underline");
            $(this).css("font-weight", "bold");
        }, function() {
            $(this).css("text-decoration", "inherit");
            $(this).css("font-weight", "normal");
    });
    */

    $(".hover").hover(
        function() {
            $(this).addClass("a2");
        }, function() {
            $(this).removeClass("a2");
    });

    $(".button").hover(
        function() {
            $(this).addClass("button2");
        }, function() {
            $(this).removeClass("button2");
    });

});
$(document).ready(function () {

    var wow = new WOW({

        moblie: false
    });
    wow.init();

    $(function () {
        $("#emailForm").validate();
    })


});
$(document).ready(function () {

    // this help to show tooltips on buttons
    $('[data-toggle="tooltip"]').tooltip();

    // it serves to make jumbotron background dynamic (when use scroll)
    var jumboHeight = $('.jumbotron').outerHeight();
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.jumbotron-bg').css('height', (jumboHeight - scrolled) + 'px');
    }
    $(window).scroll(function (e) {
        parallax();
    });
});

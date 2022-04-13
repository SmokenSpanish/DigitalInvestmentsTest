$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu-burger__wrapper').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});
function resizeBlock(){
    if(window.matchMedia("screen and (max-width: 1215px)").matches) {
        $('.select__list').removeClass('shadow');
        $('.header__type_white').prepend($('.header__select'));
        $('.menu-burger__body').append($('.header__searcher'));
        $('.header__searcher img').attr('src', 'Images/Search2.svg')
        $('.menu-burger__body').append($('#header__nav_type-white'));
        $('.menu-burger__body').append($('#header__nav_type-black'));
    } if(window.matchMedia("screen and (max-width: 634px)").matches) {
        $('.menu-burger__title-container').append($('.header__select'));
        $('.menu-burger__title-container').append($('.header__searcher'));
    } else {
        $('.select__list').addClass('shadow');
        $('.header__nav-container').prepend($('.header__select'));
        $('.header__type_black').append($('.header__searcher'));
        $('.header__searcher img').attr('src', 'Images/Search1.svg')
    } 
}

$(window).resize(function() {
    resizeBlock();
});

$(document).ready(function(){
    resizeBlock();
});   
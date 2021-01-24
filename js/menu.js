$(function() { 
    var mclick = $('.menu-click > li');

    $(mclick).click(function() {
        $(this).toggleClass('menu-open');
        if ($(this).hasClass('menu-open')) {
            $('ul', this).slideDown();
        } else {
            $('ul', this).slideUp();
        }
    });
});
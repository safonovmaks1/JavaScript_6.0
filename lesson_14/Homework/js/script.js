$(function() {

    function showModal() {
        $('.overlay').fadeTo(1000, 1);
        $('.modal').slideDown(2000);
    }

    function closeModal() {
        $('.overlay').fadeOut(2000, 0);
        $('.modal').slideUp(600);
    }

    $('a[href="#sheldure"], .main_btna, .contact').on('click', showModal);
    $('.close').on('click', closeModal);

});
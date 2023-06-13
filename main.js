$(document).ready(function() {
    $('#card-1 .card__inner').on('click', function() {

        $(this).toggleClass('is-flipped');

        $('#card-1 .main__button').toggleClass('is-flipped');

        setTimeout(function() {
            $('.card__check').fadeIn();
        }, 3000);
        
    });

    $('#play').on('click', function(e) {
        e.stopPropagation();
        $('#my-audio').play();
    });

    $('.main__button .menu-icon').on('click', function() {
        $('#card-2').addClass('active');
        $('#card-1').css('z-index','-1');
    });
})

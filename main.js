$(document).ready(function() {
    $('#card-1 .card__inner').on('click', function() {
        $(this).toggleClass('is-flipped');
    });

    $('#play').on('click', function(e) {
        e.stopPropagation();
        $('#my-audio').play();
    });
})

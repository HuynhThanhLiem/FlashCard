var selectedCard = 1;

$(document).ready(function() {
    card.initEvent();
})

var card = {
    initEvent: function() {
        card.flip();
        card.playAudio();
        card.skip();
    },

    flip: function() {
        $('.card .card__inner').off().on('click', function() {
            // Flip
            $(this).toggleClass('is-flipped');
            
            // Button appear
            $('.card.card-selected .main__button').toggleClass('is-flipped');
            
            // Check box appear
            setTimeout(function() {
                $('.card__check').fadeIn();
            }, 3000);
            
        });
    },

    playAudio: function() {
        $('#play').on('click', function(e) {
            e.stopPropagation();
            $('#my-audio').play();
        });
    },

    skip: function() {
        $('.main__button .menu-icon').off().on('click', function() {
            $cardAfter = $('.card.card-after');
            $cardSelected = $('.card.card-selected');

            $cardAfter.addClass('active');
            $cardSelected.css('z-index','-1');

            setTimeout(function() {
                $cardAfter.addClass('card-selected').removeClass('card-after').removeClass('active');
                $cardSelected.addClass('card-after').removeClass('card-selected');
            }, 1000);

        });
    }
}

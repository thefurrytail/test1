function flip_one() {
    $('.card_one').toggleClass('flipped');
    $('.puppy').css({
    	"display": "inline-block",
    	"-webkit-transform": "rotate(-10deg)",
    	"-moz-transform": "rotate(-10deg)",
    	"-ms-transform": "rotate(-10deg)",
    	"-o-transform": "rotate(-10deg)",
    	"transform": "rotate(-10deg)"

    });
}


function flip_two() {
    $('.card_two').toggleClass('flipped');
    $('.picture_two').css({
        "display": "inline-block",
        "-webkit-transform": "rotate(8deg)",
        "-moz-transform": "rotate(8deg)",
        "-ms-transform": "rotate(8deg)",
        "-o-transform": "rotate(8deg)",
        "transform": "rotate(8deg)"

    });
}

function flip_three() {
    $('.card_three').toggleClass('flipped');
    $('.picture_three').css({
        "display": "inline-block",
        "-webkit-transform": "rotate(-10deg)",
        "-moz-transform": "rotate(-10deg)",
        "-ms-transform": "rotate(-10deg)",
        "-o-transform": "rotate(-10deg)",
        "transform": "rotate(-10deg)"

    });

}

function flip_four() {
    $('.card_four').toggleClass('flipped');
    $('.picture_four').css({
        "display": "inline-block",
        "-webkit-transform": "rotate(8deg)",
        "-moz-transform": "rotate(8deg)",
        "-ms-transform": "rotate(8deg)",
        "-o-transform": "rotate(8deg)",
        "transform": "rotate(8deg)"
    });
}

window.onload = function() {
  document.getElementsByClassName('fb-account-heading').className = 'text-center';
};

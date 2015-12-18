$(document).ready(function() {
		$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1800px'},
			700,
			function() {
				$(this).hide();
				$(this).css('left', '440px');			}
		);
	})
	.mouseup(function() {
		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

var xKeyDown = false;
$(document).keydown(function (e) {
    if (e.keyCode == 88 && !xKeyDown) {
    	xKeyDown = true;
    	playMusic();
        $('.ryu-still').hide();
        $('.ryu-cool').show();
    }
})
.keyup(function (e) {
    if (e.keyCode == 88) {
    	xKeyDown = false;
    	$('#ryu-music')[0].pause();
        $('.ryu-still').show();
        $('.ryu-cool').hide();
    }
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playMusic () {
	$('#ryu-music')[0].volume = 0.1;
	$('#ryu-music')[0].load();
	$('#ryu-music')[0].play();
}
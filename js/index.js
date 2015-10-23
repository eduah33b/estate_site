$( document ).ready(function(){ 

	var caru_ind = 0;

	$('main').scroll(function() {
        $.force_appear();
	});

	function go_to_this(id) {
		var offset = $('#' + id).offset().top;
		if($(window).width() > 850)
			offset -= 140;
		else{
			offset *= 1.3;
		}
		$('main').animate({ scrollTop: offset + 'px'}, 1000);
	}
	go_to = go_to_this;	

	function attach_anim(){
		var a_types = ['fadeInUpShort','bounceInUp', 'bounceInLeft', 'bounceInRight', 'fadeInUp', 'growIn', 'flipInY', 'wiggle', 'rotateIn', 'rollIn', 'flipInX', 'pulse', 'tada', 'swing'];
		$.each($('.animatedParent *:not(.mdl-card, .mdl-spinner, header, .carusole, .no-anim)'), function(i, val){
			$(val).addClass('animated ' + a_types[i % a_types.length]).attr('data-id', i);
		});
	}
	attach_anim();


	function carusole_animate(){
		$('#about_us .carusole>div.go, #about_us .carusole>div.go *').removeClass('go on_now');
		caru_ind = caru_ind % $('#about_us .carusole>div').length;
		caru_ind++;
		$('#about_us .carusole>div:nth-child(' + caru_ind + '), #about_us .carusole>div:nth-child(' + caru_ind + ') *').addClass('go on_now');
		return true;
	}

	setInterval(carusole_animate , 5000);

});
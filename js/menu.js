$(document).ready(function() {

	// бургер
	$('.burger').click(function(e){
		e.preventDefault();
		//$('.menu').toggleClass('active');
		$('.menu').removeClass('close').addClass('active');
	});

	$('.btn-close').click(function(e){
		$('.menu').removeClass('active').addClass('close');
	});

});
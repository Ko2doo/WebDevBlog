$(document).ready(function() {

	// бургер
	$('.burger').click(function(e){
		e.preventDefault();
		$('.menu').toggleClass('active');
		$('.btn-close').toggleClass('active');
	});

});
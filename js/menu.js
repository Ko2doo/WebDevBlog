$(document).ready(function() {

	// бургер
	$('.burger').click(function(e){
		e.preventDefault();
		$('.menu').removeClass('close').addClass('active');
	});

	$('.btn-close').click(function(e){
		$('.menu.active').removeClass('active').addClass('close');

			//Добавим удаление класса 'close' через определенное время,
			//тем самым полностью скрыв объект т.к. класс '.menu' имеет свойство display:none;
			setTimeout(function(e){
				$('.menu').removeClass('close');
			}, 1000);
	});





});
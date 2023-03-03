$('.hide-menu').hide();
$('.mobile-menu-item').hide();


$('.show-menu').click(function(){
	$('.hide-menu').show();
	$('.show-menu').hide();
	$('.mobile-menu-item').show();
	$('.mobile-menu-item').toggleClass('toggle-class');
});

$('.hide-menu').click(function(){
	$('.show-menu').show();
	$('.hide-menu').hide();

	$('.mobile-menu-item').toggleClass('toggle-class');
});






$('.count').each(function () {
	$(this).prop('Counter',0).animate({
			Counter: $(this).text()
	}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
					$(this).text(Math.ceil(now));
			}
	});
});
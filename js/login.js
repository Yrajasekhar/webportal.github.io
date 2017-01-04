$(document).ready(function()
{
	$('.register').hide(0);
	$('.login-header').css('background-color', '#ddd');

	$('.register-header').click(function(){
		$(this).css('background-color', '#ddd');
		$('.login-header').css('background-color', '');
		$('.login').slideUp(500);
		$('.register').slideDown(1000);
	});

	$('.login-header').click(function(){
		$(this).css('background-color', '#ddd');
		$('.register-header').css('background-color', '');
		$('.register').slideUp(500);
		$('.login').slideDown(800);
	});

/*click(function () {
          $(this).show("slide", { direction: "left" }, 1000);
    });*/
    /** Or use this also
     ** $("#slide").animate({width:'toggle'},350);*/

	$('.try-again').click(function(){
	  $('.error-page').hide(0);
	  $('.login').slideDown(1000);
	});
});
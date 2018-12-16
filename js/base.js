// JavaScript Document
$(document).ready(function () {
  
    /*nav show or hide*/
    $('.nav1>li').hover(function () {
        $(this).children('ul').stop(true, true).toggle(400);
    });
    /*search*/
    $('.search_ico').click(function () {
        $('#search').toggleClass('search_open');
        if ($('.input').val().length > 2) {
            $('.input').val('');
            $('#form').submit();
        } else {
            return false;
        }
    });
	
	$('#min_button').click(function(){
		$('#min_menu').toggle(400);
	});
	
});
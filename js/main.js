jQuery(document).ready(function($){
	//open popup
	$('#exit_quiz').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});

	$('#yes').on('click' , function (){
		event.preventDefault();
		$('.quiz_box').removeClass('active');
	})

	$('#no').on('click', function (){
		event.preventDefault();
		$('.cd-popup').removeClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});
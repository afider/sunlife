
	$(function() {

		goToElement ();
 
		
	});


	function goToElement () {

		$(".js-goto").click(function(e) {

			var self = $(this),
				targetClass = self.data('goto');
			    target = $(targetClass);

			var speed = 1000;

			 e.preventDefault();


		    $('html, body').stop().animate({
		        scrollTop: target.offset().top
		        
		    }, speed, 'easeInOutCubic');
		});

	} // goToElement
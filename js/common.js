
	$(function() {

		goToElement ();
		detectIfScroll();

		window.onscroll = function() {

			detectIfScroll();
		
		};
 
		
	});


	function detectIfScroll () {
		
		var scrollFromTop = $(window).scrollTop();
		var fixedState = 'is-fixed';
		var targetBlock = $('.main-nav__body');
		var navTop = $('.main-nav').offset().top;

		var wH = $(window).height();
		var docH = $(document).height();


		if (scrollFromTop > navTop) {

			targetBlock.addClass( fixedState );
		} else	{

			targetBlock.removeClass( fixedState );
		}


	} // detectIfScroll


	function goToElement () {

		$(".js-goto").click(function(e) {

			var self = $(this),
				targetClass = self.data('goto');
			    target = $(targetClass);

			var speed = 1000;

			 e.preventDefault();


		    $('html, body').stop().animate({
		        scrollTop: target.offset().top - 62
		        
		    }, speed, 'easeInOutCubic');
		});

	} // goToElement
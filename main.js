$(document).ready(function(){
	
	var distance = $('.header').offset().top; 
	$(window).scroll(function () {
		 
		 if ($(window).scrollTop() > distance) {
			 $('.header').addClass("affix");

		 } else {
			 $('.header').removeClass("affix");
		 }
	 });
	
	/* function calls */
	wow = new WOW(
		{
		  boxClass:     'wow',     
		  animateClass: 'animate__animated', 
		  offset:       0,      
		  mobile:       true,    
		  live:         true      
		}
	)
	wow.init();
	
	
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');
	updateNavigation();
	
	$(window).on('scroll', function(){
		updateNavigation();
	});
	
	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}
	
	/* top menu start */
	$(".menu-button").click(function(){
		$(".overlay .menu-button").toggleClass("is-active");
		$("body").toggleClass("menuActive")
		
	});
	/* top menu end */
	
	/* services start */
	$('.slick').slick({
		dots: true,
		infinite: true,
		arrows :false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		touchThreshold : 100,
	});
	/* services end */
	
	
	
});





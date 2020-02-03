$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th
		}).done(function() {
			alert("Заявка отправлена. Спасибо!");
			th.trigger("reset");
			setTimeout(function() {
				// Done Functions
				
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

/*$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});*/

//Owl Carousel (documentation - https://owlcarousel2.github.io/OwlCarousel2/docs)
$(document).ready(function(){
  $(".header-slider").owlCarousel({
  	items:1,
  	loop:true,
  	autoplay: true,
   	autoplayTimeout: 8000,
   	autoplayHoverPause: true,
  	nav: true, 
    slideSpeed : 300,
    singleItem: true,
	pagination: false,
    rewindSpeed: 500,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });

   $(".reviews-slider").owlCarousel({
   	items: 1,
   	loop: true,
   	autoplay: true,
   	autoplayTimeout: 8000,
   	autoplayHoverPause: true,
	singleItem: true,
	nav: true,
	dots: true,
	 navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
   });
});

$(document).ready(function() {
		
		$('.phone-input').on('keyup keypress', function(e) {
			if (e.keyCode == 8 || e.keyCode == 46) {} else {
				var letters = '+0123456789 ';
				return (letters.indexOf(String.fromCharCode(e.which)) != -1)
			}
		});
});

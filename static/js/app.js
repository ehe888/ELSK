function resize(){
	$("#slider1").find(".pic-wrapper").each(function(){
		if($(window).width() <= 640){
			$(this).height($(window).width() * 400.0/640.0);
		}else if($(window).width() < 1080){
			$(this).height($(window).width() * 1600 /1060.0 * 470 / 1600);
		}else{
			$(this).height($(window).width() * 470.0 / 1600);
		}
		
	});
}


$(function(){
	// resize();

	// $(window).resize(function(){
	// 	resize();
	// });

	$("#navIcon").click(function(e){
		e.preventDefault();
		if($(".header-nav").css("max-height") === "0px"){
			$(".header-nav").css({"max-height": "35em"});
			//$(this).removeClass("hide-block");
			
		}else{
			$(".header-nav").css({"max-height": "0"})
			//$(".header-nav").addClass("hide-block");
		}
		
	});

	$(".notfound-btn").click(function(event) {
		window.location.href = "index.html"
	});

	$(".timeline-person").bind('mouseenter', function(event) {
		$(this).find($(".timeline-personText")).addClass('timeline-personTextHover');
	}).bind('mouseleave',function(e){
		$(this).find($(".timeline-personText")).removeClass('timeline-personTextHover');
	});

	$(".power-product-detail").bind('mouseenter', function(event) {
		$(this).find($(".power-product-hover-wrapper")).css("display","block");
	}).bind('mouseleave',function(e){
		$(this).find($(".power-product-hover-wrapper")).css("display","none");
	});

	$(".product-product-detail").bind('mouseenter', function(event) {
		$(this).find($(".power-product-hover-wrapper")).css("display","block");
	}).bind('mouseleave',function(e){
		$(this).find($(".power-product-hover-wrapper")).css("display","none");
	});
	

});
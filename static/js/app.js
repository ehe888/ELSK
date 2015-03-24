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

	var article = new EJS({url: 'js/baby-artical.ejs'}).render({"data":[{"image":"images/img-baby-article-image3.jpg"},{"image":"images/img-baby-article-image2.jpg"},{"image":"images/img-baby-article-image1.jpg"},{"image":"images/img-baby-article-image2.jpg"}]});
	$(".baby-artical0-list").html(article);
	$(".baby-artical1-list").html(article);
	$(".baby-artical2-list").html(article);
	
	var product = new EJS({url: 'js/product.ejs'}).render();
	$("#power-products0").html(product);
	$("#power-products1").html(product);
	$("#power-products2").html(product);

	var product_series = new EJS({url: 'js/product-series.ejs'}).render({"number":11});
	$("#product-productseries").html(product_series);
	$("#search-productseries").html(product_series);

	var storeList = new EJS({url: 'js/stores.ejs'}).render();
	$("#store_list").html(storeList);


	$(".baby-video-series").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());
	$(".brand-video-series").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());

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
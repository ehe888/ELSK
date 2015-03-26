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

function IsMobile (){
    if (window.screen.width <= 640) {
        return true;
    }
    else {
        return false;
    }

}

function adaptive(){
    var w = $(window).width();
    $("body").css("font-size", 62.5 * w  / 320+"%");
}

//字体自适应
window.onresize=adaptive;


$(function(){
	// resize();

	// $(window).resize(function(){
	// 	resize();
	// });
	if(IsMobile()==true){
		adaptive();
		// product1 bg
		$(".product-titleImg").find("img").attr("src","images_mobile/img-product-img.jpg");
		$(".power-prodcut-image").find("img").attr("src","images_mobile/img-product-image.jpg");
		$(".power-more").append("<img></img>");
		$(".power-more").find("img").attr("src","images_mobile/more_btn.jpg","width","100%");
		$(".power-more").click(function(){
			window.location.href = "product1.html";
		}) 
	}

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
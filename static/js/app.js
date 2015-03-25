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


function domReady(fn){
    if(document.addEventListener){//兼容非IE  
        document.addEventListener("DOMContentLoaded",function(){  
            //注销事件，避免反复触发  
            document.removeEventListener("DOMContentLoaded",arguments.callee,false);  
            fn();//调用参数函数  
        },false);  
    }else if(document.attachEvent){//兼容IE  
        document.attachEvent("onreadystatechange",function(){  
            if(document.readyState==="complete"){  
                document.detachEvent("onreadystatechange",arguments.callee);  
                fn();  
            }  
        });  
    }  
}  

var honorSlide;
domReady(function(){
	var showcase = $$('#showcase li');
	if (showcase&&showcase.length>0) 
	{
		honorSlide = new Showcase.Horizontal(
        $$('#showcase li'),
        $$('a.controls'), 
        {
            duration: 0.3,
            ratio:0.5
        }
    );
	}
   
}); 


jQuery(document).ready(function($){
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

	if ($( ".signup-datepicker" )) 
	{
		$( ".signup-datepicker" ).datepicker({
			inline: true,
			changeMonth:true,
			changeYear:true,
			showOtherMonths:true,
			yearRange: "c-10:c",
			defaultDate:0,
			onSelect:function(date){
				$("#signup_baby_birth").val(date);
				$( ".signup-datepicker").css("display","none");
			}
		});
	};

	

	$("#signup_baby_birth").bind('focus',function(e){
		$( ".signup-datepicker").css("display","block");
	}).bind('focusout',function(e){
		// $( ".signup-datepicker").css("display","none");
	});

	$(".baby-artical").click(function(){
		$(".baby-story-overlay").css('display', 'block');
	});

	$(".baby-story-close").click(function(){
		$(".baby-story-overlay").css('display', 'none');
	});

	$(".brand-pic-right").click(function() {
		
	});

	$(".baby-video-div").click(function(){
		$(".brand-video-overlay").css('display','block');
	});

	$(".brand-video-overlay").click(function(){
		$(".brand-video-overlay").css('display', 'none');
	});

	$(".brand-pic-div").click(function(){
		$(".brand-pic-overlay").css('display','block');
	});

	$(".brand-pic-overlay").click(function(){
		$(".brand-pic-overlay").css('display', 'none');
	});

	var currentPoint = ($(".honor-slide-bar").width() - $(".honor-slide-btn").width())/2;
	$(".honor-slide-btn").udraggable({
		containment: 'parent',
        drag: function(e, ui){
            var pos = ui.position;
            var rang = $(".honor-slide-bar").width() - $(".honor-slide-btn").width();
            // console.log(currentPoint - pos.left - Math.round(rang/7));
            var left = currentPoint - pos.left - Math.round(rang/7);
            // console.log(left);
            var right = pos.left - currentPoint - Math.round(rang/7);
            // console.log(right);
            if ((left <=10 && left >=-10) || (right<=10 && right>=-10)) 
            {
            	console.log(honorSlide);
            	if (currentPoint - pos.left < 0) 
            	{
            		honorSlideBegin("next");
            	}
            	else{
            		honorSlideBegin("previous");
            	}
            	currentPoint = pos.left;
            };
        }
	});

	var honorSlideBegin = function(direction){
		if (!this.running) {
			eval("honorSlide." + direction + "()");
		}
		for(var _i = 0, _l = honorSlide.sections.length; _i < _l; _i++){
			var tmpSection = honorSlide.sections[_i];
			if( _i == honorSlide.sections.indexOf(event.findElement('li')) )
				honorSlide.toggleLastElement(tmpSection,1);	
			else
				honorSlide.toggleLastElement(tmpSection,0);
		}
		honorSlide.animate(direction);
	}

	
	

});
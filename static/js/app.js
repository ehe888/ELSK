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
	$(".header-banner").glide({
		arrows:false,
		navigation:false
	});
	// console.log($())
	$(".left-overlay").scrollFollow({
		container:'site-content'
	});

	$(".right-overlay").scrollFollow({
		container:'site-content'
	});

	var home_slider = $('.home-product-slider').glide({
		autoplay:false,
		arrows:false,
		navigation:false,
		circular:false,
		afterTransition:function(){
			$(".home-product-current").each(function() {
				$(this).css("display","none");
			});
			$("#home-product"+(home_slider.current()-1)+"-current").css("display","block");
		}
	}).data('api_glide');
	$(".home-product-left").click(function(){
		home_slider.prev();
	});
	$(".home-product-right").click(function(){
		home_slider.next();
	});
	$(".home-product-navItem").click(function() {
		$(".home-product-current").each(function() {
			$(this).css("display","none");
		});
		$(this).find('.home-product-current').css('display', 'block');
		home_slider.jump($(this).attr('list'));
	});

	$(".home-step-step1-more").bind('mouseenter', function(event) {
		$("#"+$(this).attr("id")+"_content").css('display', 'inline-block');

	}).bind('mouseleave',function(e){
		$("#"+$(this).attr("id")+"_content").css('display', 'none');
	});

	//加载文章
	var article = new EJS({url: 'js/baby-artical.ejs'}).render({"data":[{"image":"images/img-baby-article-image3.jpg"},{"image":"images/img-baby-article-image2.jpg"},{"image":"images/img-baby-article-image1.jpg"},{"image":"images/img-baby-article-image2.jpg"}]});
	$(".baby-artical0-list").html(article);
	$(".baby-artical1-list").html(article);
	$(".baby-artical2-list").html(article);
	
	//加载power页面产品
	var product = new EJS({url: 'js/product.ejs'}).render();
	$("#power-products0").html(product);
	$("#power-products1").html(product);
	$("#power-products2").html(product);

	//加载product页面产品
	var product_series = new EJS({url: 'js/product-series.ejs'}).render({"number":11});
	$("#product-productseries").html(product_series);
	$("#search-productseries").html(product_series);

	//加载门店列表
	var storeList = new EJS({url: 'js/stores.ejs'}).render();
	$("#store_list").html(storeList);

	//加载视频裂变
	// $(".baby-video-series").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());
	// $(".brand-video-series").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());


	//404页面返回首页
	$(".notfound-btn").click(function(event) {
		window.location.href = "index.html"
	});

	//power页面 鼠标移动到时间轴上
	$(".timeline-person").bind('mouseenter', function(event) {
		$(this).find($(".timeline-personText")).addClass('timeline-personTextHover');
	}).bind('mouseleave',function(e){
		$(this).find($(".timeline-personText")).removeClass('timeline-personTextHover');
	});

	//power页面 鼠标移动到产品上
	$(".power-product-detail").bind('mouseenter', function(event) {
		$(this).find($(".power-product-hover-wrapper")).css("display","block");
	}).bind('mouseleave',function(e){
		$(this).find($(".power-product-hover-wrapper")).css("display","none");
		$(this).find($(".product-hover-content")).css("display","none");
	});

	//product页面 鼠标移动到产品上
	$(".product-product-detail").bind('mouseenter', function(event) {
		$(this).find($(".power-product-hover-wrapper")).css("display","block");
	}).bind('mouseleave',function(e){
		$(this).find($(".power-product-hover-wrapper")).css("display","none");
		$(this).find($(".product-hover-content")).css("display","none");
	});

	//产品浮层上评测链接逻辑
	$(".product-hover-eval").click(function(event) {
		var main = $(this).closest(".power-product-detail"),
		content = main.find('.product-hover-content'),
		leftValue = parseInt(main.attr('list')) % 3 == 0?"-201%":"101%";
		content.css({
			left: leftValue,
			display: 'block'
		});
	});

	$(".product-series-hover-eval").click(function(event) {
		var main = $(this).closest(".product-product-detail"),
		content = main.find('.product-hover-content'),
		leftValue = parseInt(main.attr('list')) % 4 == 0 || parseInt(main.attr('list')) % 4 == 3?"-201%":"101%";
		content.css({
			left: leftValue,
			display: 'block'
		});
	});

	//注册页面时间选择逻辑
	if ($( ".signup-datepicker")) 
	{
		$( ".signup-datepicker" ).datepicker({
			inline: true,
			changeMonth:true,
			changeYear:true,
			showOtherMonths:true,
			yearRange: "c-10:c",
			defaultDate:0,
			dateFormat:'yy-mm-dd',
			onSelect:function(date){
				$("#signup_baby_birth").val(date);
				$( ".signup-datepicker").css("display","none");
			}
		});
	};

	//注册页面逻辑
	$(".signup_radio").change(function(event) {
		$(".signup_radio").each(function() {
			$(this).prop("checked",false);
			$(this).parent().css('background-color', 'transparent');
		});
		$(this).prop("checked",true);
		$(this).parent().css('background-color', '#d6efb0');
		$(this).attr("id") == "signup_hasbord"?$(".signup-baby-detail").css("display","block"):$(".signup-baby-detail").css("display","none");

	});

	$(".aiheInput").bind('focus', function(event) {
		$(this).css({
			'border-color':'#78952c',
			'color': '#78952c'
		});
		$(this).addClass('aiheiInputFouce');
	}).bind('focusout', function(event) {
		$(this).css({
			'border-color':'#ababab',
			'color': '#ababab'
		});
		$(this).removeClass('aiheiInputFouce');
	});

	
	$("#signup_baby_birth").bind('focus',function(e){
		$( ".signup-datepicker").css("display","block");
	}).bind('focusout',function(e){
		// $( ".signup-datepicker").css("display","none");
	});


	//baby页面浮层弹出
	$(".baby-artical").click(function(){
		$(".baby-story-overlay").css('display', 'block');
	});

	//baby页面浮层关闭
	$(".baby-story-close").click(function(){
		$(".baby-story-overlay").css('display', 'none');
	});


	//baby 视频加载
	$(".baby-video-series").find('ul').append('<li><div class="baby-video-page0"></div></li>');
	$(".baby-video-page0").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());

	$(".baby-video-series").find('ul').append('<li><div class="baby-video-page1"></div></li>');
	$(".baby-video-page1").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());

	var babyVideo = $(".baby-video-series").glide({
		autoplay:false,
		arrows:false,
		navigation:false,
		circular:false
	}).data('api_glide');
	
	$(".baby-video-left").click(function(){
		babyVideo.prev();
	});

	$(".baby-video-right").click(function(){
		babyVideo.next();
	});

	$(".baby-video-flash").scrollFollow({
		container:'baby_video_overlay',
		offset:0
	});

	//品牌页面 荣誉滑动逻辑
	if ($(".honor-slide-btn")) 
	{
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
	}



	//品牌页面 历程逻辑
	var brandProcess = $(".brand-process-content").glide({
		autoplay:false,
		arrows:false,
		navigation:false,
		circular:false,
		afterTransition:function(){
			$(".brand-process").find($(".process-year")).find('li').find('img').each(function() {
				$(this).attr('src', 'images/img-brand-process-dot.png');
				if ($(this).attr("process-list") == brandProcess.current()) 
				{
					$(this).attr('src', 'images/img-brand-process-selected.png');
				}
			});
		}
	}).data('api_glide');

	$(".img-brand-process-dot").click(function(event) {
		$(".brand-process").find($(".process-year")).find('li').find('img').each(function() {
			$(this).attr('src', 'images/img-brand-process-dot.png');
		});
		$(this).attr('src', 'images/img-brand-process-selected.png');
		brandProcess.jump($(this).attr("process-list"));
	});

	$(".brand-process-left").click(function(){
		brandProcess.prev();
	});
	$(".brand-process-right").click(function(){
		brandProcess.next();
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

	$(".brand-video-flash").scrollFollow({
		container:'brand_video_overlay',
		offset:0
	});

	$(".brand-pic-big").scrollFollow({
		container:'brand_pic_overlay',
		offset:0
	});

	$(".brand-pic-series").find('ul').append('<li><div class="brand-pic-page0"></div></li>');
	$(".brand-pic-page0").html(new EJS({url: 'js/brand-pic-preview.ejs'}).render());

	$(".brand-pic-series").find('ul').append('<li><div class="brand-pic-page1"></div></li>');
	$(".brand-pic-page1").html(new EJS({url: 'js/brand-pic-preview.ejs'}).render());

	var brandPic = $(".brand-pic-series").glide({
		autoplay:false,
		arrows:false,
		navigation:false,
		circular:false
	}).data('api_glide');
	
	$(".brand-pic-left").click(function(){
		brandPic.prev();
	});

	$(".brand-pic-right").click(function(){
		brandPic.next();
	});

	$(".brand-video-series").find('ul').append('<li><div class="brand-video-page0"></div></li>');
	$(".brand-video-page0").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());

	$(".brand-video-series").find('ul').append('<li><div class="brand-video-page1"></div></li>');
	$(".brand-video-page1").html(new EJS({url: 'js/baby-video-preview.ejs'}).render());

	var brandVideo = $(".brand-video-series").glide({
		autoplay:false,
		arrows:false,
		navigation:false,
		circular:false
	}).data('api_glide');
	
	$(".brand-video-left").click(function(){
		brandVideo.prev();
	});

	$(".brand-video-right").click(function(){
		brandVideo.next();
	});
	
	//视频浮层弹出
	$(".baby-video-div").click(function(){
		$(".brand-video-overlay").css('display','block');
		$(".baby-video-overlay").css('display','block');
	});

	$(".baby-video-overlay").click(function(){
		$(".baby-video-overlay").css('display', 'none');
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
	

	
	

});
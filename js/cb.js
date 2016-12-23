$("i").on("click", function() {
  $("nav").toggleClass("open");
});

$(window).resize(function(){
	if($(window).width() < 767){
		$(".nav-option span").on("click",function(){
			$(this).siblings().slideToggle();
		})
	}
});

if($(window).width() < 767){
	$(".nav-option span").on("click",function(){
		$(this).siblings().slideToggle();
	});
};
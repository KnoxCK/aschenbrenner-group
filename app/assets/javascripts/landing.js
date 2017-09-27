$(document).ready(function(){
	setTimeout(function() {
    $(".coming-soon").addClass("fadeOut");
	}, 3400);
	setTimeout(function() {
    $(".coming-soon").addClass("hidden");
    $(".address").removeClass("hidden");
	}, 4400);
})

$(document).ready(function(){
	setTimeout(function() {
    $(".coming-soon").addClass("fadeOut");
	}, 3000);
	setTimeout(function() {
    $(".coming-soon").addClass("hidden");
    $(".address").removeClass("hidden");
	}, 4000);
})

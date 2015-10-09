$(document).ready(function(){
	console.log("i'm ready");

	$(document).keydown(function(e){
		if (e.which == 39) { //right
			$("#square").style.left="50px";
			// $("#square").animate({'left': '+=100'});

			// $('#bottom_arrow').animate({ 'left': '+=100' });
		}
	})
});
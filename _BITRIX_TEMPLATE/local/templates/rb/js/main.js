function pde(e) {
	if (e.preventDefault) e.preventDefault();
	else e.returnValue = false;
}

$(document).ready(function() {
	$('#slider_id_here').flexslider({
		animation: "slide",
		pauseOnHover: true
	});
});
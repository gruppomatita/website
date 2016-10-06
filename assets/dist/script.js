$(document).ready(function(){
	$("#chi_siamo").click(function(){
		$("#table").html("<p>the one and only gruppo matita</p>");
		$("#home").removeClass("pageon");
		$(this).addClass("pageon");
	});

	$("#home").click(function(){
		$("#table").html("<h1>Gruppo Matita</h1>");
		$("#chi_siamo").removeClass("pageon");
		$(this).addClass("pageon");
	});
});
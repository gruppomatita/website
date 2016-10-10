$(document).ready(function(){

	$("#table").load("pages/home.html");

	$("#chi_siamo").click(function(){
		$("#table").load("pages/about.html");
		$("#home").removeClass("pageon");
		$("#ricerca").removeClass("pageon");
		$(this).addClass("pageon");
	});

	$("#home").click(function(){
		$("#table").load("pages/home.html");
		$("#chi_siamo").removeClass("pageon");
		$("#ricerca").removeClass("pageon");
		$(this).addClass("pageon");
	});
});
$(document).ready(function(){

	$("#table").load("pages/home.html");

	$("#brief").click(function(){
		$("#table").load("pages/brief.html");
		$("#home").removeClass("pageon");
		$("#chi_siamo").removeClass("pageon");
		$(this).addClass("pageon");
	});

	$("#chi_siamo").click(function(){
		$("#table").load("pages/about.html");
		$("#home").removeClass("pageon");
		$("#brief").removeClass("pageon");
		$(this).addClass("pageon");
	});

	$("#home").click(function(){
		$("#table").load("pages/home.html");
		$("#chi_siamo").removeClass("pageon");
		$("#brief").removeClass("pageon");
		$(this).addClass("pageon");
	});
});
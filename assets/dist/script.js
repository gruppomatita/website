$(document).ready(function(){

	$("#table").load("pages/home.html");

	$(".tooltip").tooltipster({
		animation: 'grow',
		arrow: false,
		maxWidth: 300,
		theme: 'tooltipster-shadow',
		trigger: 'click'
	});

	$("#ricerca").click(function(){
		$("#table").load("pages/ricerca.html");
		$("#home").removeClass("pageon");
		$("#chi_siamo").removeClass("pageon");
		$(this).addClass("pageon");
	});

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
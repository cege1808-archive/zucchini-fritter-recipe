
$(document).ready(function(){
	console.log("Script included!");


	$("#tabs-centre").tabs({
		heightStyle:"auto"
	});

	$(".carousel").carousel({
		interval:20000
	});
	

	$(".carousel").show();
	$("#close").show();
	$("#open").hide();

	$("#close, #open").click(function(){
		console.log("clicked to hide");

		$(".carousel").toggle();
		$("#close").toggle();
		$("#open").toggle();

		if ($("#close").is(":visible") == true){
			$("#recipe").css("margin-top", "30px");
			console.log("close eyes");
		}
		else if($("#open").is(":visible") == true){
			$("#recipe").css("margin-top", "0px");
			console.log("picture");
		}
	});

	$("#shoppinglist").sortable();


});


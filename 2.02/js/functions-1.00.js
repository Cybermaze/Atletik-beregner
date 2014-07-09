// Historik knapper.
$(function() {
	$("#calculator").button({
	});
	$("#showHistory").button({
		icons: {
			primary: "ui-icon-circle-plus"
		}
	}).click(function() {
		$("#showHistory").css("display", "none");
		$("#hideHistory").css("display", "inline");
		$("#longHistory").show( "blind", 1000 );
	});
	$("#hideHistory").button({
		icons: {
			primary: "ui-icon-circle-minus"
		}
	}).click(function() {
		$("#showHistory").css("display", "inline");
		$("#hideHistory").css("display", "none");
		$("#longHistory").hide( "blind", 1000 );
	});
});

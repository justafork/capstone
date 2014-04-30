document.ready = init;
	
	function init() {
		$("#btnContact").on("click", contactInfo);
	
		function contactInfo(e) {
			e.preventDefault();
			console.log("function -> contactInfo");
			var fname = $("#fname").val();
			var lname = $("#lname").val();
			$("#formContactConfirm").html("<p>"+fname+ ", thanks for your message!</p>");
		}
	
		$("#btnContactReset").on("click", contactReset);
	
		function contactReset(e) {
			$("#formContactConfirm").html("");
		}
	
	
	
	
	
	
	}
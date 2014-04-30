window.onload = init;
function init() {

$('#btnUploadImage').click(function(e){
	e.preventDefault();
		var formData = new FormData($('form')[0]);
			/* 	(':button') -> : grabs the type attribute
				$('form') grabs the form, can use id or class if needed
				can grab form (or ul, or other element) in array notation
				[0] grabs the 0 index of the form input
			*/
		$.ajax({
			url: 'http://54.221.231.96:3000/upload',  //Server script to process data
			type: 'POST',
			xhr: function() {  // Custom XMLHttpRequest
				var myXhr = $.ajaxSettings.xhr();
				//if(myXhr.upload){ // Check if upload property exists
				  //  myXhr.upload.addEventListener('progress',progressHandlingFunction, false); // For handling the progress of the upload
				//}
				return myXhr;
			},
			//Ajax events
			beforeSend: function(){console.log("step before");},
			success: function(){
				console.log("step success");
				$("#uploadConfirm").html("<p>Image uploaded to gallery!</p>");
				},
			error: function(error){console.log(error);},
			// Form data
			data: formData,
			//Options to tell jQuery not to process data or worry about content-type.
			cache: false,
			contentType: false,
			processData: false
		});
	});
	
	
	$("#btnViewImages").on("click", function(e) {
				e.preventDefault();
				ajaxImageCall();
			});
			
			function ajaxImageCall() {
				console.log("function -> ajaxImageCall()");
				$.ajax({
					url: "http://54.221.231.96:3000/viewImages",
					type: 'GET',
					contentType: 'application/json; charset=utf-8',
					dataType: 'json',
					error: handleAjaxImageError,
					success: handleAjaxImageSuccess
				});
			
			}
				
			function handleAjaxImageError() {
				console.log("ajax -> error");
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
			
			function handleAjaxImageSuccess(data) {
				console.log(data);
				$("#uploadConfirm").html("");
				$("#gallery").html("");
				for (i=0; i<data.length; i++) {
					var src = data[i];
					$("#gallery").append("<img src='images/gallery/" +src+ "'>");
				}
			}
}
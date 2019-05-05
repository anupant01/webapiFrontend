$(document).ready(

	function() {
	// body...


	$('#registerForm').submit(function(event)
	{
		event.preventDefault();


		var myFormData ={
			username:$('#username').val();
			addres:$('#address').val();
			password:$('#password').val();
		}




		



	})


$.ajax({

//v1:version, users:route in the backend
//api ma NOUN use garne
	url: 'http://localhost:3001/v1/users',
	method:'POST',
	contentType:'application/json',
	data:JSON.stringfy(myFormData)



success: function(result,status){



}

error:function(jqXHR,status)
	

})










})
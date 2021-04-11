
  $(function(){
     
	$('button').click(function(){
	//	var name = $('#txtName').val();
		var username = $('#txtUsername').val();
		var country = $('#txtCountry').val();
		var city = $('#txtCity').val();
		var school = $('#txtSchool').val();
		var password = $('#txtPassword').val();
		var passwordconf = $('#txtPasswordConf').val();

    var name = document.getElementById("txtName").value;
     console.log(name);
     
		 //To clear all old alerts
		 bs.ClearError();

		 if(name != " " )
		 {
			 //Show alert
			 bs.ShowError ("Please enter the customer Name",name);
		 }
		
			 /*
     if(test1 != " ") {
       alert("absolutely")
			//Show alert
    	bs.showError("Please enter your name",name);
		 }*/
		 



		$.ajax({
			url: '/signUpUser',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});

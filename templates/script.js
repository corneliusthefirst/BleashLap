
$(document).ready(function () {


	//new task screen add button action

	$('.Screen_Data').on('click', '.btn', function (event) {
		//To clear all old alerts
		bs.ClearError();

		//Get values
		var name = $('.Screen_Data').find('.name');
		var username = $('.Screen_Data').find('#txtUsername');
		var country = $('.Screen_Data').find('#txtCountry');
		var city = $('.Screen_Data').find('#txtCity');
		var school = $('.Screen_Data').find('#txtSchool');
		var password = $('.Screen_Data').find('#txtPassword');
		var passwordconf = $('.Screen_Data').find('#txtPasswordConf');

       /* var name = $('').val();
		var username = $('').val();
		var country = $('').val();
		var city = $('').val();
		var school = $('').val();
		var password = $('').val();
		var passwordconf = $('').val();*/
        
		
	/*	var workerName = "cornelius";
		var AddCustomer = {};*/


		if (((name.val().length > 9)) || (frm.IsEmpty(name.val()))) {
			//Show alert
			bs.ShowError("Please enter the customer Name", name);
		} else if (frm.IsEmpty(username.val())) {
			//Show alert
			bs.ShowError("Please enter the customer Number", username);
		} else if (frm.IsEmpty(country.val())) {
			//Show alert
			bs.ShowError("Please enter the number of days", country);
		} else if (frm.IsEmpty(city.val())) {
			//Show alert
			bs.ShowError("Please enter the Amount Paid", city);
		} else if (frm.IsEmpty(school.val())) {
			//Show alert
			bs.ShowError("Please enter the RoomNumber", school);
		} else if (frm.IsEmpty(password.val())) {
			//Show alert
			bs.ShowError("Please enter the RoomNumber", password);
		}else if (frm.IsEmpty(passwordconf.val())) {
			//Show alert
			bs.ShowError("Please enter the Date", passwordconf);
		} else {

			var name = $('#txtName').val();
			var username = $('#txtUsername').val();
			var country = $('#txtCountry').val();
			var city = $('#txtCity').val();
			var school = $('#txtSchool').val();
			var password = $('#txtPassword').val();
			var passwordconf = $('#txtPasswordConf').val();
			
		
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
		}

	});	
});	
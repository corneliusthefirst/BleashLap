/*else if(username1 != ""){
  var check = "";
       for(var i=0 ; i < username1.length ; i++) 
       {
          //charAt(i) can also be used to get a letter of a string 
              if(username1[i] == "@")
                 {
                     check = username[i];
                 }

        }
    if(check.length == "")
    {
         window.alert("Please Enter a valid email")
         document.getElementById("txtUsername").style.color = "red";
         //handle when mouse is down in input box
         txtUsername.on('mousedown', function() {
         document.getElementById("txtUsername").style.color = "royalblue";
         });
    }

}*/

/*
let name1  = document.getElementById("txtName").value;
let username1 = document.getElementById("txtUsername").value;
let country1 = document.getElementById("txtCountry").value;
let city1 = document.getElementById("txtCity").value;
let school1 = document.getElementById("txtSchool").value;
let password1 = document.getElementById("txtPassword").value;
let passwordconf1 = document.getElementById("txtPasswordConf").value;
*/
var check = "";
if(name1 == "" ){
  //Show alert
  window.alert("Please Enter your name")
 }else if(username1 == ""){
  //Show alert
  window.alert("Please Enter your email")
  

 }else if(username1 != ""){
  
       for(var i=0 ; i < username1.length ; i++) 
   {
      //charAt(i) can also be used to get a letter of a string 
          if(username1[i] == "@")
             {
                 check = username1[i];
             }

    }
if(check.length == 0)
{
     window.alert("Please Enter a valid email")
     document.getElementById("txtUsername").style.color = "red";
     //handle when mouse is down in input box
     txtUsername.on('mousedown', function() {
     document.getElementById("txtUsername").style.color = "royalblue";
     });
  
 }else if(country1 == ""){
  //Show alert
  window.alert("Please Enter your country")
  

 }else if(city1 == ""){
  //Show alert
  window.alert("Please Enter your city")
  

 }else if(school1 == ""){
  //Show alert
  window.alert("Please Enter your school")
  

 }else if(password1 == ""){
  //Show alert
  window.alert("Please Enter your password")
  

 }else if(passwordconf1 == ""){
  //Show alert 
  window.alert("Please Enter your password confirmation")


 }else if(password1 != passwordconf1){
   
  var txtPassword = d3.select('#txtPassword');
  var txtPasswordConf = d3.select('#txtPasswordConf');
  //Show alert 
  window.alert("Your passwords doesn't match")
   document.getElementById("txtPassword").style.color = "red";
   document.getElementById("txtPasswordConf").style.color = "red";
    
     txtPassword.on('mousedown', function() {
     document.getElementById("txtPassword").style.color = "royalblue";
         });
     
      txtPasswordConf.on('mousedown', function() {
     document.getElementById("txtPasswordConf").style.color = "royalblue";
         });
     }

 }else{




          /*retrieving from database*/
/*  
  username =  db.execute("SELECT name,email,country,city,school,password,passwordconf FROM signUp").fetchall()
    
  rowarray_list = []
  for row in username:
      t = (row.name, row.email, row.country, row.city,row.school, row.password, row.passwordconf)
      rowarray_list.append(t)
  j = json.dumps(rowarray_list)
  */

/*
 for(var i=0 ; i < username1.length ; i++) 
 {
   //charAt(i) can also be used to get a letter of a string 
       if(username1[i] == "@")
          {   i = i+1
              check[i] = 1;
          }

 }*/




 $.ajax({
    url: '/passwordReset',
    data: $('form').serialize(),
    type: 'POST',
    success: function(response){
        console.log(response);
    },
    error: function(error){
        console.log(error);
       }

});	


    
$.ajax({
    url: '/passwordReset',
   data: $('form').serialize(),
   type: 'POST',
 
success: function(response){

console.log(response);
document.getElementById("txtUsername").value ="";

//window.location.href = "http://127.0.0.1:5000/homePage";
},
      error: function(error){
         console.log(error);
    }
  });





  <table class="table table-bordered">
  <thead>
    <tr>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
         
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
  
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
  
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
     <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
  </tbody>
</table>







<table class="table table-bordered table-hover" style="margin-left:300px; margin-top:-300px;">
<tr class="success" style="margin-top:-300px;">
    <th>S.No</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thurday</th>
    <th>Friday</th>
    <th>Edit</th>
    <th>Delete</th>
</tr>
<tr ng-repeat="x in names">
    <td>{{id}}</td>
    <td>{{mon}}</td>
    <td>{{tue}}</td>
    <td>{{wed}}</td>
    <td>{{thu}}</td>
    <td>{{fri}}</td>
    <td>
        <button class="btn btn-success btn-xs" ng-click="update_data(x.id, x.mon,x.tue,x.wed, x.thu, x.fri)">
            <span class="glyphicon glyphicon-edit"></span> Edit
        </button>
    </td>
    <td>
        <button class="btn btn-danger btn-xs" ng-click="delete_data(x.id )">
            <span class="glyphicon glyphicon-trash"></span> Delete
        </button>
    </td>
</tr>
</table>





<script>  
var app = angular.module("sa_app", []);
app.controller("controller", function($scope, $http) {
    $scope.btnName = "Insert";
    $scope.insert = function() {
        if ($scope.mon == null) {
            alert("Enter Your Profession");
        } else if ($scope.tue == null) {
            alert("Enter Your Employee ID");
        }else if ($scope.wed == null) {
            alert("Enter Your FIRST AND LAST NAME");
        }else if ($scope.thu == null) {
            alert("Enter Your Email ID");
        } else if ($scope.fri == null) {
            alert("Enter Your Age");
        } else {
            $http.post(
                "insert_func", {
        inserter =  {
			        'monday': $scope.mon,
                    'tuesday': $scope.tue,
                    'wednesday': $scope.wed,
                    'thursday': $scope.thu,
                    'friday': $scope.fri,
                    'btnName': $scope.btnName,
                    'id': $scope.id
		      }
                }
            ).success(function(data) {
                alert(data);
                $scope.mon = null;
                $scope.tue = null;
                $scope.wed = null;
                $scope.thu = null;
                $scope.fri = null;
                $scope.btnName = "Insert";
                $scope.show_data();
            });
        }
    }
    $scope.show_data = function() {
        $http.get("displayfunc")
            .success(function(data) {
                $scope.names = data;
            });
    }
    $scope.update_data = function(id,mon,tue, wed, thu, fri) {
        $scope.id = id;
        $scope.mon = mon;
        $scope.tue = tue;
        $scope.wed = wed;
        $scope.thu = thu;
        $scope.fri = fri;
        $scope.btnName = "Update";
    }

    $scope.delete_data = function(id) {
        if (confirm("Are you sure you want to delete?")) {
            $http.post("delete_subject", {
                    'id': id
                })
                .success(function(data) {
                    alert(data);
                    $scope.show_data();
                });
        } else {
            return false;
        }
    }
});
</script>  


<!-- Form control by angular--></div>
  <div ng-app="sa_app" ng-controller="controller" ng-init="show_data()">

  </div>
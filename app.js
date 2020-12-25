function getGenderValue() {
  var uiGender = document.getElementsByName("uiGender");
  for(var i in uiGender) {
    if(uiGender[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getMarriedValue() {
  var uiMarried = document.getElementsByName("uiMarried");
  for(var i in uiMarried) {
    if(uiMarried[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getDependentsValue() {
  var uiDependents = document.getElementsByName("uiDependents");
  for(var i in uiDependents) {
    if(uiDependents[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getEducation() {
  var uiEdu = document.getElementsByName("uiEdu");
  for(var i in uiEdu) {
    if(uiEdu[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getEmployed() {
  var uiEmp = document.getElementsByName("uiEmp");
  for(var i in uiEmp) {
    if(uiEmp[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}


function getPropertyArea() {
  var uiProperty = document.getElementsByName("uiProperty");
  for(var i in uiProperty) {
    if(uiProperty[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getCreditHistory() {
  var uiCredit = document.getElementsByName("uiCredit");
  for(var i in uiCredit) {
    if(uiCredit[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function getLoanTerm() {
  var uiLat = document.getElementsByName("uiLat");
  for(var i in uiLat) {
    if(uiLat[i].checked) {
        return parseInt(i)+1;
    }
  }
  return -1; // Invalid Value
}

function onClickedLoanStatus() {
  console.log("Loan Status button clicked");
  var loanamount = document.getElementById("uiloanamt");
  
  var applicantincome = document.getElementById("uiappinc");
  var coapplicantincome = document.getElementById("uicoappinc");

  var gender1 = getGenderValue();
  var married1 = getMarriedValue();
  var dependents1 = getDependentsValue();
  var emp1 = getEmployed();
  var edu1 = getEducation();
  var property1 = getPropertyArea();
  var credit1 = getCreditHistory();
  var loanterm1 = getLoanTerm()

  var loanStatus = document.getElementById("uiLoanStatus");


// Below code is for server code - flask and all that is still left to be done - 25th dec 2020 1:57am

   var url = "/predict_loan_status"; //Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
      applicantincome: parseInt(applicantincome.value),
      coapincome: parseFloat(coapplicantincome.value),
      loanamt: parseFloat(loanamount.value),
      gender: gender1,
      married: married1,
      dependents: dependents1,
      edu: edu1,
      emp: emp1,
      loanterm: loanterm1,
      credhist: credit1,
      propertyarea: property1
      
  },function(data, status) {
      console.log(data.loan_status);
      var str=""
      if (data.loan_status == 1){
      str = "Congratulations!! Your Loan is Approved."}
      else{
      str="Sorry!! Your Loan is Not Approved"}
      loanStatus.innerHTML = "<h2>" + str + "</h2>";
      console.log(status);
  });
}

// function onPageLoad() {
//   console.log( "document loaded" );
//   // var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
//   var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
//   $.get(url,function(data, status) {
//       console.log("got response for get_location_names request");
//       if(data) {
//           var locations = data.locations;
//           var uiLocations = document.getElementById("uiLocations");
//           $('#uiLocations').empty();
//           for(var i in locations) {
//               var opt = new Option(locations[i]);
//               $('#uiLocations').append(opt);
//           }
//       }
//   });
// }

// window.onload = onPageLoad;
function validateForm() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value;
    var pnum = document.getElementById("pnum").value;
    var gender = document.getElementById("drop").value;
    var problem = document.getElementById("drop2").value;
    var birth = document.getElementById("birth").value;
    var hour = document.getElementById("hours").value;
    var min = document.getElementById("mins").value;
    var secs = document.getElementById("secs").value;
    var ampm = document.getElementById("ampm").value;
    var ques = document.getElementById("qa").value;
    // var mes = document.getElementById("mess").value;
    // var reason = document.getElementById("reason").value;

    // Resetting previous error messages
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (element) {
      element.innerText = "";
    });

    var isValid = true;

    // if(mes===""){
    //     document.getElementById("mess-error").innerText = "Message is required";
    //     isValid = false;  
    // }
    // Name validation
    if (name === "") {
      document.getElementById("name-error").innerText = "Name is required";
      isValid = false;
    }
    else if (!/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById("name-error").innerText = "Name must contain only letters and spaces.";
        return false;
      }

    // Email validation
    if (email === "") {
      document.getElementById("email-error").innerText = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("email-error").innerText =
        "Please enter a valid email address";
      isValid = false;
    }

    // Mobile number validation
    if (pnum === "") {
      document.getElementById("pnum-error").innerText =
        "Mobile number is required";
      isValid = false;
    } else if (isNaN(pnum) || pnum.length !== 10) {
      document.getElementById("pnum-error").innerText =
        "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    // Gender validation
    if (gender === "0") {
      document.getElementById("gender-error").innerText = "Gender is required";
      isValid = false;
    }

    // Problem validation
    if(hour==="0" || min==="0" || secs==="0" || ampm ==="0"){
      document.getElementById("tob-error").innerText =
        "Please select hours, min, sec & am or pm ";
      isValid = false;
    }
    if(problem ==="Prasanna Jothidam" && ques===""){
      document.getElementById("problem-error").innerText =
        "Your question is required if you select prassanna jodhidam";
      isValid = false;
    }
    if(problem==="Others"  && ques===""){
      document.getElementById("problem-error").innerText =
        "Your question is required if you select Others";
      isValid = false;
    }
    // Place of birth validation
    if (birth === "") {
      document.getElementById("pob-error").innerText =
        "Place of birth is required";
      isValid = false;
    }
    // else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(birth)) {
    //     document.getElementById("pob-error").innerText = "Birth place must contain only letters and spaces.";
    //     return false;
    //   }
    // Get the input element
// const timeInput = document.getElementById('settime');

// // Add event listener for when the input value changes
// timeInput.addEventListener('change', function() {
//     // Get the entered time value
//     const enteredTime = this.value;

//     // Parse the entered time into hours and minutes
//     const [hours, minutes] = enteredTime.split(':');

//     // Convert hours to 12-hour format
//     let hours12 = hours % 12;
//     hours12 = hours12 || 12; // If hours12 is 0, set it to 12

//     // Determine whether it's AM or PM
//     const period = hours < 12 ? 'AM' : 'PM';

//     // Update the input value with the converted time
//     this.value = `${hours12}:${minutes} ${period}`;
// });


    // Reason for appointment validation
    // if (reason === "") {
    //   document.getElementById("reason-error").innerText =
    //     "Reason for appointment is required";
    //   isValid = false;
    // }

    return isValid;
  }

  function isValidEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
//   document.getElementById("timeInput").addEventListener("input", function() {
//     var timeInput = this.value;
//     var timeError = document.getElementById("timeError");
//     var isValid = true;
//     if (timeInput === "") {
//         timeError.innerText = "Time is required";
//         isValid=false;
//     } else if (!/^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/.test(timeInput)) {
//         timeError.innerText = "Invalid time format (HH:MM:SS)";
//         isValid=false;
//     } else {
//         timeError.innerText = "";
//     }
//     return isValid;
// });
function sendwhatsapp() {
    // var phonenumber = "+917339124748";
      // var phonenumber = "+918667662525";
    var phonenumber = "+919092505041";
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("pnum").value;
    var gender = document.getElementById("drop").value;
    var problem = document.getElementById("drop2").value;
    // var otherProblem = document.getElementById("other").value;
    var dateOfBirth = document.getElementById("sec").value;
    // var timeOfBirth = document.getElementById("settime").value;
    var hour = document.getElementById("hours").value;
    var min = document.getElementById("mins").value;
    var secs = document.getElementById("secs").value;
    var ampm = document.getElementById("ampm").value;
    var placeOfBirth = document.getElementById("birth").value;
    // var question = document.getElementById("question").value;
    // var normalTime = convertToNormalTime(timeOfBirth);
    var convertedDOB = convertDateFormat(dateOfBirth);
    let dateInMillisecs = Date.now();
    var formattedDateTime = formatDate(dateInMillisecs);
    var ques = document.getElementById("qa").value;
    var tob = hour +":"+min+":"+ secs +" "+ampm;
    // let dateInWords = new Date(dateInMillisecs);
 
      if (ques==="") {
        var url =
          "https://wa.me/" +
          phonenumber +
          "?text=" +
          "*Name :* " +
          name +
          "%0a" +
          "*Email :* " +
          email +
          "%0a" +
          "*Phone :* " +
          phone +
          "%0a" +
          "*Gender :* " +
          gender +
          "%0a" +
          "*Problem :* " +
          problem +
          "%0a" +
          "*Date of Birth :* " +
          convertedDOB +
          "%0a" +
          "*Time of Birth :* " +
          tob+
          "%0a" +
          "*Place of Birth :* " +
          placeOfBirth +
          "%0a" +
          "*Sending Date and Time :* " +
          formattedDateTime +
          "%0a";
      }
      else {
        var url =
          "https://wa.me/" +
          phonenumber +
          "?text=" +
          "*Name :* " +
          name +
          "%0a" +
          "*Email :* " +
          email +
          "%0a" +
          "*Phone :* " +
          phone +
          "%0a" +
          "*Gender :* " +
          gender +
          "%0a" +
          "*Problem :* " +
          problem +
          "%0a" +
          "*Question :* " +
          ques +
          "%0a" +
          "*Date of Birth :* " +
          convertedDOB +
          "%0a" +
          "*Time of Birth :* " +
          tob +
          "%0a" +
          "*Place of Birth :* " +
          placeOfBirth +
          "%0a" +
          "*Sending Date and Time :* " +
          formattedDateTime +
          "%0a";
      }
    window.open(url, "_blank").focus();
  }
function convertDateFormat(dateString) {
  // Split the date string into parts
  var parts = dateString.split("-");
  
  // Rearrange the parts in the desired format
  var day = parts[2];
  var month = parts[1];
  var year = parts[0];

  // Return the formatted date
  return day + "-" + month + "-" + year;
}
function formatDate(dateInMillisecs) {
  // Create a Date object using the milliseconds
  var date = new Date(dateInMillisecs);

  // Extract date, month, and year
  var day = date.getDate();
  var month = date.getMonth() + 1; // Months are zero-based, so we add 1
  var year = date.getFullYear();

  // Extract hours, minutes, and seconds
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Determine AM/PM
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (00:00)

  // Add leading zeros if necessary
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Return the formatted date and time
  return day + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds + ' ' + ampm;
}

// Example usage:



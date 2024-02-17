function validateForm() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value;
    var pnum = document.getElementById("pnum").value;
    var gender = document.getElementById("drop").value;
    var problem = document.getElementById("drop2").value;
    var birth = document.getElementById("birth").value;
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
    else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name)) {
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
    if (problem === "0") {
      document.getElementById("problem-error").innerText =
        "Problem selection is required";
      isValid = false;
    }
    // Place of birth validation
    if (birth === "") {
      document.getElementById("pob-error").innerText =
        "Place of birth is required";
      isValid = false;
    }
    else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(birth)) {
        document.getElementById("name-error").innerText = "Birth place must contain only letters and spaces.";
        return false;
      }

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
  document.getElementById("timeInput").addEventListener("input", function() {
    var timeInput = this.value;
    var timeError = document.getElementById("timeError");
    var isValid = true;
    if (timeInput === "") {
        timeError.innerText = "Time is required";
        isValid=false;
    } else if (!/^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/.test(timeInput)) {
        timeError.innerText = "Invalid time format (HH:MM:SS)";
        isValid=false;
    } else {
        timeError.innerText = "";
    }
    return isValid;
});
function sendwhatsapp() {
    //   var phonenumber = "+917339124748";
      // var phonenumber = "+918667662525";
    var phonenumber = "+919092505041";
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("pnum").value;
    var gender = document.getElementById("drop").value;
    var problem = document.getElementById("drop2").value;
    var otherProblem = document.getElementById("other").value;
    var dateOfBirth = document.getElementById("sec").value;
    var timeOfBirth = document.getElementById("timeInput").value;
    var timeOfBirthAMorPM = document.getElementById("ampm").value;
    var placeOfBirth = document.getElementById("birth").value;
    var question = document.getElementById("question").value;
  
    let dateInMillisecs = Date.now();
    let dateInWords = new Date(dateInMillisecs);
  
    if (problem === "Others") {
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
        otherProblem +
        "%0a" +
        "*Date of Birth :* " +
        dateOfBirth +
        "%0a" +
        "*Time of Birth :* " +
        timeOfBirth +
        " " +
        timeOfBirthAMorPM +
        " " +
        "%0a" +
        "*Place of Birth :* " +
        placeOfBirth +
        "%0a" +
        "*User Asked Question (For Prasanna Predictions only) :* " +
        question +
        "%0a" +
        "*Sending Date and Time :* " +
        dateInWords +
        "%0a";
    } else {
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
        dateOfBirth +
        "%0a" +
        "*Time of Birth :* " +
        timeOfBirth +
        " " +
        timeOfBirthAMorPM +
        " " +
        "%0a" +
        "*Place of Birth :* " +
        placeOfBirth +
        "%0a" +
        "*User Asked Question (For Prasanna Predictions only) :* " +
        question +
        "%0a" +
        "*Sending Date and Time :* " +
        dateInWords +
        "%0a";
    }
  
    window.open(url, "_blank").focus();
  }
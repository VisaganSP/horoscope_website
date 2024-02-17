
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

    if (timeInput === "") {
        timeError.innerText = "Time is required";
    } else if (!/^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/.test(timeInput)) {
        timeError.innerText = "Invalid time format (HH:MM:SS)";
    } else {
        timeError.innerText = "";
    }
});

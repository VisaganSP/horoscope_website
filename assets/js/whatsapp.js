function sendwhatsapp() {
  //   var phonenumber = "+917339124748";
  //   var phonenumber = "+918667662525";
  var phonenumber = "+918667662525";

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

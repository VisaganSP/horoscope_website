function updateSecondDropdown() {
    var firstDropdown = document.getElementById("drop2");
    var secondDropdown = document.getElementById("other");

    // Clear existing options in the second dropdown
    secondDropdown.innerHTML = "";

    // Get the selected option from the first dropdown
    var selectedOption = firstDropdown.value;

    // Add options to the second dropdown based on the selection
    if (selectedOption === "3") {
      // Option 1 is selected in the first dropdown
      var option1Values = ["Select","Business problem", "Job Problems", "Foreign Settlement","Marriage Problems","Love and relationship","Wealth Property","Health Fitness","Legal Issues","Gem Stone Suggestions"];
      for (var i = 0; i < option1Values.length; i++) {
        var option = document.createElement("option");
        option.text = option1Values[i];
        option.value = option1Values[i];
        secondDropdown.add(option);
      }
    } 
}

function getInputs() {
    // Create two pop-up windows to retrieve users' inputs
    var firstInput = prompt("Enter the first input:");
    var secondInput = prompt("Enter the second input:");
  
    // Check if the first input is greater than the second input
    if (firstInput > secondInput) {
      // Change the background color to lightblue
      document.body.style.backgroundColor = "lightblue";
      // Print firstInput > secondInput on the screen
      document.write("firstInput > secondInput");
    }
    // Check if the second input is greater than the first input
    else if (secondInput > firstInput) {
      // Change the background color to lightgreen
      document.body.style.backgroundColor = "lightgreen";
      // Print secondInput > firstInput on the screen
      document.write("secondInput > firstInput");
    }
    // If the first input is equal to the second input
    else {
      // Change the background color to lightyellow
      document.body.style.backgroundColor = "lightyellow";
      // Print secondInput == firstInput on the screen
      document.write("secondInput == firstInput");
    }
  }
  
  // Create two buttons
  var firstButton = document.createElement("button");
  firstButton.innerHTML = "Show the first input";
  
  var secondButton = document.createElement("button");
  secondButton.innerHTML = "Show the second input";
  
  // Add the buttons to the page
  document.body.appendChild(firstButton);
  document.body.appendChild(secondButton);
  
  // Set the click event handlers for the buttons
  firstButton.addEventListener("click", function() {
    alert(firstInput);
  });
  secondButton.addEventListener("click", function() {
    alert(secondInput);
  });
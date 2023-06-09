function convertDaysToMinutes() {
    const daysInput = document.getElementById("days-input");
    const resultDiv = document.getElementById("result");
  
    // Get the number of days from the input
    const days = Number(daysInput.value);
  
    // Convert days to minutes
    const minutes = days * 24 * 60;
  
    // Display the result
    resultDiv.textContent = `${days} days is ${minutes} minutes.`;
  }
  
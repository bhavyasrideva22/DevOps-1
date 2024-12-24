// Select the button and the message paragraph
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// Add an event listener to the button
button.addEventListener("click", () => {
  message.textContent = "You just clicked the button!";
  button.style.backgroundColor = "#007BFF"; // Change button color
  button.textContent = "Clicked!";
});

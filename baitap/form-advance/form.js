const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting by default
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(data); // Display the form data in the console
  form.reset(); // Clear the form inputs
});

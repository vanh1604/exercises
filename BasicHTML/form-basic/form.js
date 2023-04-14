const form = document.getElementById("myForm");
const firstInput = document.getElementById("Fisrt");
const lastInput = document.getElementById("Last");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dateInput = document.getElementById("Date");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting by default
  const data = {
    first: firstInput.value,
    last: lastInput.value,
    date: dateInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  };
  console.log(data); // Display the form data in the console
  form.reset(); // Clear the form inputs
});

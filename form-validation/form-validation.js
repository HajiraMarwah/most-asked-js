const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

// Clear error messages
function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  clearErrors();

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email";
    isValid = false;
  }

  // Password validation (minimum 6 chars)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (!isValid) return;

  // If form is valid
  successMessage.textContent = "Form submitted successfully!";

  form.reset(); // Clear all fields
});

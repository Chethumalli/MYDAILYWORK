document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  error.textContent = "";

  if (password.length < 8) {
    error.textContent = "Password must be at least 8 characters.";
    return;
  }

  alert(`Welcome, ${name}! Signup successful 🎉`);
});

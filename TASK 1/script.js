const screens = document.querySelectorAll(".screen");

function hideAll() {
  screens.forEach(screen => screen.classList.remove("active"));
}

function showSignup() {
  hideAll();
  document.getElementById("signup").classList.add("active");
}

function showLogin() {
  hideAll();
  document.getElementById("login").classList.add("active");
}

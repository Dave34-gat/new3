document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginMessage = document.getElementById("loginMessage");

  // Hardcoded credentials (for demo only)
  if (username === "admin" && password === "eco123") {
    localStorage.setItem("adminLoggedIn", true);
    window.location.href = "admin.html";
  } else {
    loginMessage.textContent = "Invalid credentials. Try again.";
  }
});

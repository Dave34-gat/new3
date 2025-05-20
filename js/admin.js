window.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");
  if (!isLoggedIn) {
    alert("Access denied. Please log in as admin.");
    window.location.href = "admin-login.html";
  }

  // Fake analytics values
  document.getElementById("totalOrders").textContent = 120;
  document.getElementById("monthlyOrders").textContent = 15;
  document.getElementById("inventoryCount").textContent = 35;

  // User Management
  const userForm = document.getElementById("userForm");
  const userList = document.getElementById("userList");

  userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("newUser").value;
    const role = document.getElementById("role").value;

    const li = document.createElement("li");
    li.textContent = `${user} - ${role}`;
    userList.appendChild(li);

    userForm.reset();
  });
});

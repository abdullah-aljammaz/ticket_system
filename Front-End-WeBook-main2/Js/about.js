document.getElementById("logoutButton").addEventListener("click", function () {
  localStorage.removeItem("token");
  window.location.href = "/Html/HomePage.html";
});
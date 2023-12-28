document.addEventListener('DOMContentLoaded', function () {
  // Function to check if the user is logged in
  function isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if the token is present, false otherwise
  }

  // Function to update the navigation bar based on login status
  function updateNavbar() {
    const navBar = document.querySelector('.NavBar ul');
    const loginSignupLink = document.querySelector('.login-signup a');

    if (isLoggedIn()) {
      // If the user is logged in, show "Your Account" link
      loginSignupLink.textContent = 'Your Account';
      loginSignupLink.href = '/html/about.html'; // Update the href attribute accordingly
    } else {
      // If the user is not logged in, show "Login / Sign Up" link
      loginSignupLink.textContent = 'Login / Sign Up';
      loginSignupLink.href = '/html/login_signUp.html'; // Update the href attribute accordingly
    }
  }

  // Call the function when the page loads
  updateNavbar();
});
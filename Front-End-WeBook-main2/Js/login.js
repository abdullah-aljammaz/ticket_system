document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("sign_email");
    const passwordInput = document.getElementById("sign_password");

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      const response = await fetch("http://localhost:3005/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert(responseData.message);
        localStorage.setItem("token", responseData.token);
        window.location.href = "/Html/HomePage.html";
      } else {
        displayErrorMessage(
          responseData.message || "Login failed. Please try again."
        );

        // Highlight input fields with an issue
        if (responseData.errorFields) {
          if (responseData.errorFields.includes("email")) {
            highlightInputError(emailInput);
          }
          if (responseData.errorFields.includes("password")) {
            highlightInputError(passwordInput);
          }
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      displayErrorMessage("Login failed. Please try again.");
    }
  });

function displayErrorMessage(message) {
  const errorContainer = document.getElementById("errorContainer");
  errorContainer.textContent = message;
  errorContainer.style.color = "red";
  errorContainer.style.border = "1px solid red";
  errorContainer.style.padding = "10px";
  errorContainer.style.borderRadius = "5px";
  errorContainer.style.marginTop = "10px";
}

function highlightInputError(inputElement) {
  inputElement.style.border = "1px solid red";
}

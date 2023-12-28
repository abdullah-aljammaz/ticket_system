document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstName = document.getElementById("register_firstname").value;
    const lastName = document.getElementById("register_lastname").value;
    const password = document.getElementById("register_password").value;
    const email = document.getElementById("register_email").value;
    const phone = document.getElementById("register_phone").value;
    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof password);
    console.log(typeof email);
    console.log(typeof phone);
    const response = await fetch("http://localhost:3005/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, password, email, phone }),
    });

    if (response.ok) {
      alert("User registered successfully");

      // window.location.href = "/html/.html";
    } else {
      alert("Error registering user");
    }
  });

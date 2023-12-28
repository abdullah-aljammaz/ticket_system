const newCard = document.getElementById("newCard");
const cardName = document.getElementById("card_name");
const cardNumber = document.getElementById("card_number");
const cardDate = document.getElementById("card_date");
const Cardcvv = document.getElementById("card_cvv");

newCard.addEventListener("submit", async function (e) {
  e.preventDefault();

  let card_name = cardName.value;
  let card_number = cardNumber.value;
  // let card_cvv = Cardcvv.value;
  let card_date = cardDate.value;
  let userToken = localStorage.getItem("token");
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("event_id");
  try {
    const response = await fetch(`http://localhost:3005/ticket/create?event_id=${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      },
    });

    // Handle the response as needed (e.g., show success message)
    // Inside the success block after adding the card
    if (response.ok) {
      showMessage("Card added successfully!");

      // Redirect to the confirmation page
      window.location.href = "/html/about.html"; // Replace with your confirmation page
    } else {
      console.error("Error adding Card:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding Card", error);
  }
});

function showMessage(message) {
  // Display the message div
  var messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.style.display = "block";

  // Hide the message after a few seconds (you can adjust the timeout)
  setTimeout(function () {
    messageDiv.style.display = "none";
  }, 3000); // Hide after 3 seconds (adjust as needed)
}
function showMessage(message) {
  // Display the message div
  var messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  messageDiv.style.display = "block";

  // Hide the message after a few seconds (you can adjust the timeout)
  setTimeout(function () {
    messageDiv.style.display = "none";
  }, 3000); // Hide after 3 seconds (adjust as needed)
}

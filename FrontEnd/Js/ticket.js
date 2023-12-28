async function displayEventById(eventId) {
  try {
    const response = await fetch(
      `http://localhost:3005/event/getById?eventId=${eventId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const event = await response.json();
    if (!event) {
      window.location.href = "/html/HomePage.html";
    }

    const currentDate = new Date(event.discount_end);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let amOrPm = currentDate.getHours() < 12 ? "AM" : "PM";

    let formattedDate = `${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    } ${
      currentDate.getHours() % 12 || 12
    }:${currentDate.getMinutes()} ${amOrPm}`;

    content.innerHTML = "";
    const eventCard = document.createElement("div");
    eventCard.className = "wrapper";
    eventCard.innerHTML = `
      <h3>${event.title}</h3>
      <img src="${event.image}" alt="Ticket Image" class="ticket-image" />
      <div class="father">
        <div class="left-section">
          <div class="about-section">
            <h4>About the Event</h4>
            <p>${event.description}</p>
          </div>
          <p class="price">From ${event.price} SAR</p>
          ${
            event.discount_end
              ? `
          <style>
          .price{display:none}
          </style>
          <p class="original-price">Old Price: ${event.price} SAR</p> 
          <p class="discount-price">New Price: ${event.final_price} SAR</p>
          <p class="discount-end">Discount Ends: ${formattedDate}</p>`
              : ``
          }
        </div>
          <div class="right-section">
          
            <a href="/html/confirm.html" class="btn-page"><i class="bi bi-credit-card"></i>&nbsp;Pay Now</a>
            <p class="vat">Go To Pay</p>
          </div>
      </div>`;

    content.appendChild(eventCard);
  } catch (error) {
    console.error("Error fetching event", error);
  }
}

// Extract eventId from the URL and call displayEventById
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("eventId");
if (eventId) {
  displayEventById(eventId);
} else {
  console.error("Event ID not provided in the URL");
}

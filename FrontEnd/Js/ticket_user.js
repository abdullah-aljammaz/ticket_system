document.addEventListener("DOMContentLoaded", async () => {
  const userToken = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:3005/ticket/getByUser", {
      headers: {
        Authorization: "Bearer " + userToken,
      },
    });

    if (response.ok) {
      const userTickets = await response.json();
      displayTickets(userTickets);
    } else {
      console.error("Error fetching user tickets:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching user tickets", error);
  }
});

function displayTickets(tickets) {
  const ticketList = document.getElementById("ticketList");

  tickets.forEach((ticket) => {
    let ticketElement = document.createElement("div");
    ticketElement.className= "ticket-card";
    ticketElement.innerHTML = `
    <img src="${ticket.image}" alt="Ticket Image 3">
    <div class="ticket-details">
      <div class="ticket-title">${ticket.title}</div>
      <div class="ticket-price">${ticket.final_price}</div>
      <div class="location-title"><a href="https://www.google.com/maps"><img src = "/img/image_map.svg" alt="Location image"/>Abu Bakr Salem Theater </a></div>
      <a href="/html/ticket.html" class="book-now-btn">Book Now</a>
    </div>
        `;
    ticketList.appendChild(ticketElement);
  });
}

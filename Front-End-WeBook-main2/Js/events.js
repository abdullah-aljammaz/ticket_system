async function displayEvents() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryName = urlParams.get("category_name");

  try {
    const response = await fetch(
      `http://localhost:3005/event/getByCategory?category=${categoryName}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const events = await response.json();

      todoList.innerHTML = "";
      
      events.forEach((event) => {


      const eventCard = document.createElement("div");
      eventCard.className = "ticket-card";
      if (eventCard.discount = null){
        eventCard.innerHTML = `
        <img src="${event.image}" alt="Ticket Image 3">
        <div class="ticket-details">
          <div class="ticket-title">${event.title}</div>
          <div class="ticket-price">${event.final_price}</div>
          <div class="location-title"><a href="https://www.google.com/maps"><img src = "/img/image_map.svg" alt="Location image"/>${event.location}</a></div>
          <a href="/html/ticket.html?eventId=${event.id}" class="book-now-btn">Book Now</a>
        </div>
        `;
      }
      else{
      eventCard.innerHTML = `
      <img src="${event.image}" alt="Ticket Image 3">
      <div class="ticket-details">
        <div class="ticket-title">${event.title}</div>
        <div class="ticket-price">${event.final_price}</div>
        <div class="location-title"><a href="https://www.google.com/maps"><img src = "/img/image_map.svg" alt="Location image"/>${event.location}</a></div>
        <a href="/html/ticket.html?eventId=${event.id}" class="book-now-btn">Book Now</a>
      </div>
      `;}

      // <img src="${event.image}" alt="Ticket Image 3">
      // <div class="ticket-details">
      //   <div class="ticket-title">${event.title}</div>
      //   <div class="ticket-price">${event.price}</div>
      //   <div class="ticket-start-date"> ${new Date(event.discount_end).toLocaleString()}</div>
      //   <a href="#" class="book-now-btn">Book Now</a>

      todoList.appendChild(eventCard);
    });
  } catch (error) {
    console.error("Error fetching events", error);
  }
}

const newTodoForm = document.getElementById("newTodoForm");
const newEventTitle = document.getElementById("newTodoTitle");
const newEventdescription = document.getElementById("newEventdescription");
const newEventlocation = document.getElementById("newEventlocation");
const newEventstartDate = document.getElementById("newEventstartDate");
const newEventendDate = document.getElementById("newEventendDate");
const newEventimage = document.getElementById("newEventimage");
const newEventavalible_ticket = document.getElementById(
  "newEventavalible_ticket"
);
const newEventprice = document.getElementById("newEventprice");
const newEventdiscount = document.getElementById("newEventdiscount");
const newEventcategory = document.getElementById("newEventcategory");
const newEventdiscount_end = document.getElementById("newEventdiscount_end");
const todoList = document.getElementById("todoList");

newTodoForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  let title = newEventTitle.value;
  let description = newEventdescription.value;
  let location = newEventlocation.value;
  let startDate = newEventstartDate.value;
  let endDate = newEventendDate.value;
  let image = newEventimage.value;
  let avalible_ticket = newEventavalible_ticket.value;
  let price = newEventprice.value;
  let discount = newEventdiscount.value;
  let category = newEventcategory.value;
  let discount_end = newEventdiscount_end.value;
  let $startDate = null;
  let $endDate = null;
  let $DiscountDate = null;
  let formattedStartDate = null;
  let formattedEndDate = null;
  let formattedDiscountDate = null;
  if (startDate !== "") {
    $startDate = new Date(startDate);
    formattedStartDate = $startDate.toISOString();
  }

  if (endDate !== "") {
    $endDate = new Date(endDate);
    formattedEndDate = $endDate.toISOString();
  }

  if (discount_end !== "") {
    $DiscountDate = new Date(discount_end);
    formattedDiscountDate = $DiscountDate.toISOString();
  } 
    
  try { 
    const response = await fetch("http://localhost:3005/event/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        location,
        image,
        discount,
        startDate: formattedStartDate, // Use formatted ISO string
        endDate: formattedEndDate, // Use formatted endDate
        discount_end: formattedDiscountDate,
        avalible_ticket,
        price,
        category,
      }),
    });

    const newEvent = await response.json();
    displayTodos();
    newEventTitle.value = "";
    newEventdescription.value = "";
    newEventlocation.value = "";
    newEventstartDate.value = "";
    newEventendDate.value = "";
    newEventimage.value = "";
    newEventavalible_ticket.value = "";
    newEventprice.value = "";
    newEventdiscount.value = "";
    newEventcategory.value = "";
    newEventdiscount_end.value = "";
  } catch (error) {
    console.error("Error adding todo", error);
  }
});

async function displayTodos() {
  try {
    const response = await fetch("http://localhost:3005/event/get_all", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const todos = await response.json();

    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.id;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        deleteTodo(todo.id);
      };

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.onclick = function () {
        editTodo(todo.id);
      };

      li.appendChild(deleteBtn);
      li.appendChild(editBtn);

      todoList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching todos", error);
  }
}

async function deleteTodo(todoId) {
  try {
    const response = await fetch(
      `http://localhost:3005/event/delete/${todoId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    displayTodos();
  } catch (error) {
    console.error("Error deleting todo", error);
  }
}

async function editTodo(todoId) {
  const newTitle = prompt("Edit event");
  if (newTitle) {
    try {
      const response = await fetch(
        `http://localhost:3005/event/update/${todoId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            title: newEventdescription,
            description: newEventdescription,
            location: newEventlocation,
            startDate: newEventstartDate,
            endDate: newEventendDate,
            image: newEventimage,
            avalible_ticket: newEventavalible_ticket,
            price: newEventprice,
            discount: newEventdiscount,
            discount_end: newEventdiscount_end,
            category: newEventcategory,
          }),
        }
      );
      displayTodos();
    } catch (error) {
      console.error("Error editing todo", error);
    }
  }
}

//token تسجيل حروج وحذف
document.getElementById("logoutButton").addEventListener("click", function () {
  localStorage.removeItem("token");
  window.location.href = "/Html/login_signUp.html";
});
displayTodos();

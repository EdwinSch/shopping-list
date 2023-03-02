/* ---- TARGETS && INITIALIZERS ---- */
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const getItem = document.getElementById("grocery-item");
const submitBtn = document.querySelector(".submit-btn");
const itemsContainer = document.querySelector(".items-container");
const itemsList = document.querySelector(".items-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

/* ---- FUNCTIONS ---- */

// Submit Input from form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // get form input value
  const value = getItem.value;
  // get unique ID
  const itemID = createID();
  // check input case
  if (value !== "" && editFlag === false) {
    console.log("add item to the list");
  } else if (value !== "" && editFlag === true) {
    console.log("edit mode");
  } else {
    displayAlert("alert-danger", "empty input");
  }
});

// Create unique ID for list items
function createID() {
  let int;
  let id = "";
  for (i = 0; i < 6; i++) {
    int = Math.floor(Math.random() * 10);
    id += int;
  }
  return id;
}

// Show/Hide multifunction alert
function displayAlert(alertClass, text) {
  alert.classList.add(alertClass);
  alert.textContent = text;

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(alertClass);
  }, 1000);
}

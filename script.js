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

/* ---- SCRIPT ---- */

// Submit Input from form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // get form input value
  const value = getItem.value;
  // get unique ID
  const itemID = createID();
  // check input case
  if (value !== "" && editFlag === false) {
    // create and add new item
    const newItem = document.createElement("article");
    newItem.classList.add("item");
    const dataAttribute = document.createAttribute("data-id");
    dataAttribute.value = itemID;
    newItem.setAttributeNode(dataAttribute);
    newItem.innerHTML = `
     <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fa-sharp fa-solid fa-trash"></i>
              </button>
            </div>`;
    itemsList.appendChild(newItem);
    // diplay success alert
    displayAlert("alert-success", "item added");

    // add to local storage
    // reset input field
    resetDefault();
  } else if (value !== "" && editFlag === true) {
    console.log("edit mode");
  } else {
    displayAlert("alert-danger", "empty input");
  }
});

/* ---- FUNCTIONS ---- */

// Create unique ID for list items
function createID() {
  let int;
  let id = "";
  for (i = 0; i < 5; i++) {
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

// Set back to default: input value, flags, submit button
function resetDefault() {
  getItem.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

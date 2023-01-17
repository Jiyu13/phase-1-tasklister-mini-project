document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector("#create-task-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target["new-task-description"].value;
    const username = document.querySelector("#new-task-user").value
    const dateDue = document.querySelector("#date-due").value

    // select current option
    const select = document.querySelector("select")
    const selectedOption = select.options[select.selectedIndex].value

    buildTodoList(inputValue, username, dateDue, selectedOption);
    // console.log(inputValue)
    // console.log(username)
    // console.log(dateDue)
  })

  addInputFields(form);
  dropDown(form);

});


function buildTodoList(todo, name, date, option) {
  const deleteBtn = createDeleteBtn();

  let li = document.createElement("li");
  li.innerHTML = `Todo: ${todo}<br>By: ${name}<br>Due by: ${date}<br>`
  li.appendChild(deleteBtn);
  const color = optionColors(option);
  li.style.backgroundColor = color;
  
  const tasks = document.querySelector("#list #tasks")
  tasks.appendChild(li)

  const editBtn = createEditBtn()
  li.appendChild(editBtn)
} 

function createEditBtn() {
    // create edit btn
    const li = document.querySelector("#list #tasks li")
    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit";
    li.appendChild(editBtn)
    editBtn.addEventListener("click", (event) => handleEdit(event));
    return editBtn
}

function createDeleteBtn() {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (event) => handleDelete(event));
  return deleteBtn
}

// handle buttons
function handleDelete(e) {
  e.target.parentNode.remove(); 
}


function handleEdit(e) {
  const li = e.target.parentNode

  const editForm = document.createElement("form")
  editForm.setAttribute("id", "new-form")
  editForm.setAttribute("method", "POST")

  let editTodo = document.createElement("label");
  editTodo.setAttribute("for", "new-todo");
  editTodo.textContent = "Task Description: ";
  let editInput = document.createElement("input");
  editInput.setAttribute("id", "new-todo");
  editInput.placeholder = "description"

  
  let editName = document.createElement("label");
  editName.setAttribute("for", "new-name");
  editName.textContent = "Username: ";
  let nameInput = document.createElement("input");
  nameInput.setAttribute("id", "new-name");
  nameInput.placeholder = "Username"

  let editDate = document.createElement("label");
  editDate.setAttribute("for", "new-date");
  editDate.textContent = "Due Date: ";
  let newDate = document.createElement("input");
  newDate.setAttribute("id", "new-date");
  newDate.textContent = "mm/dd/yyyy: ";
  
  let save = document.createElement("input")
  save.setAttribute("type", "submit")
  save.setAttribute("value", "SAVE")

  editForm.append(editTodo, editInput, editName, nameInput, editDate, newDate)
  dropDown(editForm)
  editForm.append(save)

  li.append(editForm)
  editForm.addEventListener("submit", (event) => updateTodo(event))
  
}

// update todo
function updateTodo(e) {
  e.preventDefault()
  const newTask = e.target["new-todo"].value;
  const username = document.querySelector("#new-name").value
  const dateDue = document.querySelector("#new-date").value


  // select current option
  const select = document.querySelector("#new-form select")
  const selectedOption = select.options[select.selectedIndex].value
  const newColor = optionColors(selectedOption)

  // get original todo form
  const li = document.querySelector("#tasks li")
  li.innerHTML = `Todo: ${newTask}<br>By: ${username}<br>Due by: ${dateDue}<br>`
  const deleteBtn = createDeleteBtn();
  const editBtn = createEditBtn()
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  li.style.backgroundColor = newColor

  
}

function addInputFields(form) {
  // create user label and input
  let userLabel = document.createElement("label");
  userLabel.setAttribute("for", "new-task-user");
  userLabel.textContent = "Username: ";


  let userInput = document.createElement("input");
  userInput.setAttribute("id", "new-task-user");
  userInput.placeholder = "Username"

  // create date-due label and input
  let dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date-due");
  dateLabel.textContent = "Date Due: ";

  let dateInput = document.createElement("input");
  dateInput.setAttribute("id", "date-due");
  dateInput.placeholder = "mm/dd/yyyy";

  // prepend the new added fields to form
  form.prepend(userLabel, userInput, dateLabel, dateInput);
}


// add dropdown
function dropDown(form) {
  let select = document.createElement("select");

  let high = document.createElement("option");
  high.setAttribute("value", "high")
  high.textContent = "High"
  high.style.backgroundColor  = "red"

  let medium = document.createElement("option")
  medium.setAttribute("value", "medium")
  medium.textContent = "Medium"
  medium.style.backgroundColor  = "yellow"

  let low = document.createElement("option")
  low.setAttribute("value", "low")
  low.textContent = "Low"
  low.style.backgroundColor  = "green"

  select.append(high, medium, low)
  form.insertBefore(select, form.querySelector("input[type=submit]"))

}


function optionColors(option) {
  if (option === "high") {
    return "red";
  } else if (option === "medium") {
    return "yellow";
  } else {
    return "green"
  }
}



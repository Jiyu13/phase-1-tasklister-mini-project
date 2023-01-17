document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector("#create-task-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target["new-task-description"].value;
    const username = document.querySelector("#new-task-user").value
    const dateDue = document.querySelector("#date-due").value
    buildTodoList(inputValue, username, dateDue);
    console.log(inputValue)
    console.log(username)
    console.log(dateDue)
  })

  addInputFields(form)

});


function buildTodoList(todo, name, date) {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (event) => handleDelete(event));

  let li = document.createElement("li");
  li.innerHTML = `Todo: ${todo}<br>By: ${name}<br>Due by: ${date}<br>`
  li.appendChild(deleteBtn);

  const tasks = document.querySelector("#list #tasks")
  tasks.appendChild(li)

} 

function handleDelete(e) {
  e.target.parentNode.remove(); 
}


function addInputFields(form) {
  const taskInput = form.querySelector("#new-task-description");
  const submitBtn = form.querySelector("input[type=submit]");

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



document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector("#create-task-form")

  addInputFields(form) //

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target["new-task-description"].value;
    buildTodoList(inputValue);
  })

});


function buildTodoList(todo) {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (event) => handleDelete(event));

  let li = document.createElement("li");
  li.textContent = ` ${todo} `;
  

  li.appendChild(deleteBtn);

  const tasks = document.querySelector("#list #tasks")
  tasks.appendChild(li)

} 

function handleDelete(e) {
  e.target.parentNode.remove(); 
}


function addInputFields(form) {
  let createDiv = document.createElement("div");
  createDiv.innerHTML = `
  <br>
  <label for="new-task-user">Username: </label>
  <input id="new-task-user" type="text" placeholder="username">
  <br>
  <br>
  <label for="date-due">Date Due: </label>
  <input id="date-due" type="text" placeholder="mm/dd/yyyy">
  <br>
  <br>
  `
  form.appendChild(createDiv);

  const submitBtn = form.querySelector("input[type=submit]");
  form.insertBefore(createDiv, submitBtn)
  

  // let user = document.createElement("label");
  // user.for = "new-task-user";
  // user.textContent = "Username:";

  // let input = document.createElement("input");
  // input.id = "new-task-user";
  // input.placeholder = "username";

  // const submitBtn = form.querySelector("input[type=submit]")

  // form.insertBefore(user, submitBtn);
  // form.insertBefore(input, submitBtn);

  
  console.log(submitBtn)

}



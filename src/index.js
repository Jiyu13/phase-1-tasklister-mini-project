document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target["new-task-description"].value;
    buildTodoList(inputValue);
  })

});


function buildTodoList(todo) {
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", (event) => handleDelete(event));//

  let li = document.createElement("li");
  li.textContent = ` ${todo} `;
  

  li.appendChild(deleteBtn);

  const tasks = document.querySelector("#list #tasks")
  tasks.appendChild(li)
  
} 

function handleDelete(e) {
  e.target.parentNode.remove(); //
}




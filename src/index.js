document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = event.target["new-task-description"].value;
  })

});



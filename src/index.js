document.addEventListener("DOMContentLoaded", () => {
const newTask = document.getElementById('new-task-description');
const form = document.getElementById('create-task-form');
const tasksList = document.getElementById('tasks') 



form.addEventListener('submit', (e) => {
  alert('I was clicked!')
  e.preventDefault(); 
  tasksList.innerHTML += `<li> ${newTask.value}
  <button data-action = "delete"> X </button> 
  </li>`; // adds a delete button for each task created 
  taskForm.reset(); // to reset form after submit so input isn't there after submit
});


tasksList.addEventListener('click', (e) => {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove();
  }
  // makes sure that the action, delete, of the function matches the data-action of the button and then deletes the parent element.
  // e.target means the target of the event which is click  
});


});
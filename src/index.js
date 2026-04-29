// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Select the necessary elements from the DOM
  const taskForm = document.querySelector('#create-task-form');
  const taskInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  // 2. Add an event listener to the form to handle submission
  taskForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();

    // 3. Get the value from the input field
    const taskDescription = taskInput.value;

    // 4. Validate that the input is not empty
    if (taskDescription.trim() !== "") {
      
      // 5. Create a new <li> element
      const li = document.createElement('li');
      li.textContent = taskDescription;

      // Optional: Add a delete button to each task
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = ' ✕';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.style.color = 'red';
      deleteBtn.addEventListener('click', () => li.remove());
      
      li.appendChild(deleteBtn);

      // 6. Append the <li> to the <ul> (tasks list)
      taskList.appendChild(li);

      // 7. Clear the input field for the next task
      taskForm.reset();
    } else {
      alert("Please enter a task description!");
    }
  });
});

// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// ADD TASK
function addTask(e) {
  if (!taskInput.value) {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear Input
  taskInput.value = '';

  e.preventDefault();
}

// REMOVE TASK
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you Sure?')) e.target.parentElement.parentElement.remove();
  }
}

// CLEAR TASKS
function clearTasks() {
  //   taskList.innerHTML = '';
  // Faster Alternative
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// FILTER TASKS
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  const allTasks = document.querySelectorAll('.collection-item');

  allTasks.forEach((task) => {
    const item = task.firstChild.textContent.toLowerCase();

    if (item.indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

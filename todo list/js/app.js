let tasks = [];
let filter = "all";
let isDarkMode = false;

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const themeToggle = document.getElementById("themeToggle");

// Add Task
document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Task cannot be empty!");
    return;
  }

  tasks.push({
    id: Date.now(),
    text,
    completed: false
  });

  taskInput.value = "";
  renderTasks();
}

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "list-group-item";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.className = task.completed ? "completed" : "";
    span.onclick = () => toggleComplete(task.id);

    const btnGroup = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-sm btn-warning me-1";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(task.id);

    btnGroup.append(editBtn, deleteBtn);
    li.append(span, btnGroup);
    taskList.appendChild(li);
  });

  updateCounter();
}

// Toggle Complete
function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// Edit Task
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newText = prompt("Edit task:", task.text);

  if (newText && newText.trim() !== "") {
    task.text = newText.trim();
    renderTasks();
  }
}

// Delete Task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Counter
function updateCounter() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  taskCounter.textContent = `Total: ${total} | Completed: ${completed}`;
}

// Filters
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderTasks();
  });
});

// Dark Mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
});

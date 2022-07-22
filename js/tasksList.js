let tasks = [];

function addTask() {
  const task = document.getElementById("task");
  const textArea = document.getElementById("tasksListTextArea");
  tasks.push(task.value);
  const combinedTasks = tasks.join("\n");
  textArea.value = combinedTasks;
  task.value = "";
}

function clearTasks() {
  const textArea = document.getElementById("tasksListTextArea");
  const task = document.getElementById("task");
  tasks = [];
  textArea.value = "";
  task.value = "";
}

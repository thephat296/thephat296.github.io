function addTask() {
  let tasksForm = document.forms["task-list-form"];
  let task = tasksForm["task"].value;
  if (task == "") return;
  let taskList = tasksForm["task-list"];
  taskList.value = taskList.value == "" ? task : taskList.value + "\n" + task;
  localStorage.setItem("taskList", taskList.value);
}

function clearTasks() {
  document.forms["task-list-form"]["task-list"].value = "";
  localStorage.setItem("taskList", "");
}

function loadTaskList() {
  document.forms["task-list-form"]["task-list"].value =
    localStorage.getItem("taskList");
}

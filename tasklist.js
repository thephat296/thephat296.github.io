function addTask() {
  let tasksForm = document.forms["task-list-form"];
  let task = tasksForm["task"];
  if (task == "") return;
  let taskList = tasksForm["task-list"];
  taskList.value = taskList.value == "" ? task.value : taskList.value + "\n" + task.value;
  localStorage.setItem("taskList", taskList.value);
  task.value = ""
}

function clearTasks() {
  document.forms["task-list-form"]["task-list"].value = "";
  localStorage.setItem("taskList", "");
}

function loadTaskList() {
  document.forms["task-list-form"]["task-list"].value =
    localStorage.getItem("taskList");
}

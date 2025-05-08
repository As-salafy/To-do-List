
let taskList = document.querySelector(".taskList");
let inp = document.querySelector("input[type='text']");
let sub = document.querySelector("input[type='submit']");
let tasksArry = [];

if (localStorage.getItem("tasks") !== null) {
  tasksArry = JSON.parse(localStorage.getItem("tasks"));
  tasksArry.forEach((e) => {
    let task = document.createElement("div");
    let text = document.createTextNode(e);
    let del = document.createElement("button");
    let delText = document.createTextNode("Delete");
    task.classList.add("task");
    taskList.appendChild(task);
    task.appendChild(text);
    task.appendChild(del);
    del.appendChild(delText);

    del.addEventListener("click", () => {
      taskList.removeChild(task);
      tasksArry.splice(text, 1);
      localStorage.setItem("tasks", JSON.stringify(tasksArry));
    });
  });
}

sub.addEventListener("click", function (e) {
  e.preventDefault();
  if (inp.value !== "") {
    let task = document.createElement("div");
    let text = document.createTextNode(inp.value);
    let del = document.createElement("button");
    let delText = document.createTextNode("Delete"); 
    task.classList.add("task");
    taskList.appendChild(task);
    task.appendChild(text);
    task.appendChild(del);
    del.appendChild(delText);

    tasksArry.push(inp.value);
    localStorage.setItem("tasks", JSON.stringify(tasksArry));

    del.addEventListener("click", () => {
      taskList.removeChild(task);
      tasksArry.splice(text, 1);
      localStorage.setItem("tasks", JSON.stringify(tasksArry));
    });

    inp.value = "";
  }
});


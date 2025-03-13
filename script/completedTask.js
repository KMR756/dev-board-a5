const CompletedBtns = document.querySelectorAll("#Completed-btn");

for (let i = 0; i < CompletedBtns.length; i++) {
  const element = CompletedBtns[i];
  element.addEventListener("click", function (event) {
    alert("Board undated Successfully");

    const taskAssign = document.getElementById("task-assign").innerText;

    if (taskAssign > 0) {
      const subTaskAssign = taskAssign - 1;
      const navTaskCount = document.getElementById("nav-task-count").innerText;
      const convertedNavTaskCount = parseInt(navTaskCount);
      const addedNavTaskCount = convertedNavTaskCount + 1;

      document.getElementById("nav-task-count").innerText = addedNavTaskCount;
      document.getElementById("task-assign").innerText = subTaskAssign;
      element.disabled = true;
      element.classList.add("opacity-50", "cursor-not-allowed");
    }
  });
}

const headingTextBtn = document.querySelectorAll("#Completed-btn");
const headingText = document.querySelectorAll("#dash-board-heading");
for (let i = 0; i < headingTextBtn.length; i++) {
  const element = headingTextBtn[i];
  element.addEventListener("click", function (event) {
    console.log(event.target);
  });
}

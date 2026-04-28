const messageText = document.getElementById("messageText");
const changeTextBtn = document.getElementById("changeTextBtn");
const taskList = document.getElementById("taskList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const colorButtons = document.querySelectorAll(".color-btn");

let itemCount = 1;

changeTextBtn.addEventListener("click", function () {
    messageText.textContent = "The paragraph text has been changed using JavaScript.";
});

addItemBtn.addEventListener("click", function () {
    itemCount += 1;
    const newItem = document.createElement("li");
    newItem.textContent = "New list item " + itemCount;
    taskList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", function () {
    if (taskList.children.length > 1) {
        taskList.removeChild(taskList.lastElementChild);
        itemCount -= 1;
    }
});

colorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.body.style.backgroundColor = button.dataset.color;
    });
});

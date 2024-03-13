const taskInput = document.getElementById("taskInput");
const taskBox = document.getElementById("taskBox");

function addTask() {
    const taskValue = taskInput.ariaValueMax.trim();

    if(taskValue !== ""){
        const listItem = document.createElement("li");
        listItem.textContent = taskValue;
        taskBox.insertBefore(listItem, taskBox.firstChild);
        taskInput.value = "";
    }
}
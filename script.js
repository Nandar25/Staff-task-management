const addTaskButton = document.getElementById("addTask");
const tasksContainer = document.getElementById("tasks");

addTaskButton.addEventListener("click", function () {


const staff = document.getElementById("staff").value;
const task = document.getElementById("task").value;
const date = document.getElementById("date").value;
const priority = document.getElementById("priority").value;

if (staff === "" || task === "" || date === "") {
    alert("Please fill in all fields.");
    return;
}

const taskCard = document.createElement("div");
taskCard.classList.add("task");

taskCard.innerHTML = `
    <h3>${task}</h3>
    <p><strong> Staff: </strong>${staff} </p>
    <p><strong>Due:</strong> ${date}</p>
    <p><strong>Priority:</strong> ${priority}</p>
    <p><strong>Status:</strong> To Do</p>
`
;

tasksContainer.appendChild(taskCard);

document.getElementById("staff").value = "";
document.getElementById("task").value = "";
document.getElementById("date").value = "";
document.getElementById("priority").value = "High";


});

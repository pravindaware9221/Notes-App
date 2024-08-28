function loadFromLocalStorage() {
    const allTask = JSON.parse(localStorage.getItem("allTask"));

    if (allTask) {
        tasks.push(...allTask);
    }
    loadTask();
}


const tasks = [];
function loadTask() {
    localStorage.setItem("allTask", JSON.stringify(tasks))

    const taskContainer = document.getElementById("task");
    taskContainer.innerHTML = '';
    for (const task of tasks) {
        taskContainer.innerHTML += `
      
            <div class="img-task-container">
                <div class="task-output">
                    <b>${task}</b>
                      <img src=" img/trash.png" onclick="removeTask('${task}')" class ="del-img"/>
                </div>
            </div>
       `;
    }
}


function saveTask() {
    const input = document.getElementById('input').value;
    if (input) {
        tasks.push(input);
        document.getElementById('input').value = '';
        loadTask();
    }
}

function removeTask(task) {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        loadTask();
    }
}

loadTask();
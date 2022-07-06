const btn = document.querySelector('.add-task__button')
const taskInput = document.querySelector('#task__name')
const massage = document.querySelector('.massange')
const taskList = document.querySelector('.task__list')

btn.addEventListener('click', addTask);

function createTask(text) {
    let div = document.createElement("div")
    div.classList.add("task")

    let input = document.createElement("input")
    input.addEventListener('click', changeTaskState)
    input.type = "checkbox"

    let p = document.createElement("p")
    p.innerHTML = text

    div.append(input)
    div.append(p)

    return div
}

function changeTaskState() {
    if (this.checked) {
        this.parentElement.classList.add('completed')
    } else {
        this.parentElement.classList.remove('completed')
    }
}

function addTask() {
    if (taskInput.value) {
        if (!massage.hidden) {
            massage.hidden = true
        }

        let newTask = createTask(taskInput.value)
        taskList.append(newTask)
        taskInput.value = '';
    } else {
        alert("Add name Task");
    }
}
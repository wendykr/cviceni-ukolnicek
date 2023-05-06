const Task = (props) => {

    const {name, due, done} = props;

    let icon = '';

    if (done) {
        icon = '✓';
    }

    return `
        <div class="task">
            <div class="task__body">
                <div class="task__name">${name}</div>
                <div class="task__due">${due}</div>
            </div>
            <div class="task__done">${icon}</div>
        </div>
    `
}

const renderTasks = (items) => {

    const todoTasksElm = document.querySelector('.todo__tasks');

    todoTasksElm.innerHTML = items
        .map(oneTask => Task(oneTask))
        .join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => response.json())
    .then((data) =>
        renderTasks(data));

let checkboxElm = document.querySelector('#checkbox-undone');

const check = () => {
    if (checkboxElm.checked === true) {
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
            .then((response) => response.json())
            .then((data) =>
            renderTasks(data));
            checkboxElm.checked = false;
    } else {
        if (checkboxElm.checked === false) {
            fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
                .then((response) => response.json())
                .then((data) =>
                renderTasks(data));
                checkboxElm.checked = true;
        }
    }
}

checkboxElm.addEventListener('change', check);
console.log('funguju!');

const Taks = (props) => {

    const {name, due, done} = props;
    
    return `
        <div class="task">
            <div class="task__body">
                <div class="task__name">${name}</div>
                <div class="task__due">${due}</div>
            </div>
            <div class="task__done">${done}✓</div>
        </div>
    `
}

const renderTasks = (items) => {

    const todoTasksElm = document.querySelector('.todo__tasks');

    todoTasksElm.innerHTML = items
        .map(oneTask => Taks(oneTask))
        .join('');
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
    .then((response) => response.json())
    .then((data) =>
        //console.log(data));
        renderTasks(data));

let checkboxElm = document.querySelector('#checkbox-undone');

const check = () => {
    if (checkboxElm) {
        console.log('check');
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
            .then((response) => response.json())
            .then((data) =>
            //console.log(data));
            renderTasks(data));
            checkboxElm = false;

    } else {
        if (!checkboxElm) {
            console.log('uncheck');
            fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
                .then((response) => response.json())
                .then((data) =>
                //console.log(data));
                renderTasks(data));
                checkboxElm = true;
        }
    }
}

checkboxElm.addEventListener('change', check);
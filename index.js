// const newForm = `<form class="create-user-form">
//     <label>
//         Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя"/>
//     </label>
//     <label>
//         Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль"/>
//     </label>
//     <button type="submit">
//     Подтвердить
//     </button>
// </form>`

// document.body.innerHTML = newForm


// function createInputWithLabel(labelText, inputType, inputName, inputPlaceHolder) {
//     const labelElement = document.createElement("label")
//     labelElement.innerText = labelText

//     const inputElement = document.createElement("input")
//     inputElement.type = inputType
//     inputElement.name = inputName
//     inputElement.placeholder = inputPlaceHolder

//     labelElement.append(inputElement)
//     return labelElement

// }

// const form = document.createElement("form")
// form.className = 'create-user-form'

// const button = document.createElement("button")
// button.type = "submit"
// button.innerText = "Создать"

// const usernameInput = createInputWithLabel("Имя", "text", "userName", "Введите ваше имя")
// const passwordInput = createInputWithLabel("Пароль", "password", "password", "Придумайте пароль")



// form.append(usernameInput, passwordInput, button)

// document.body.append(form)

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]

createTasks = (tasks) => {
    const taskElements = [];

    for (i = 0; i < tasks.length; i ++) {
        const taskItemContainer = document.createElement("div");
        taskItemContainer.className = 'task-item';
        taskItemContainer.taskId = i + 1;

        const taskItemMainContainer = document.createElement("div");
        taskItemMainContainer.className = "task-item__main-container";
        taskItemContainer.append(taskItemMainContainer)

        const taskItemMainContent = document.createElement("div");
        taskItemMainContent.className = "task-item__main-content"
        taskItemMainContainer.append(taskItemMainContent)

        const form = document.createElement("form");
        form.className = "checkbox-form"
        taskItemMainContent.append(form)

        const input = document.createElement("input");
        input.className = "checkbox-form__checkbox";
        input.type = "checkbox";
        input.id = `task-${i + 1}`;
        form.append(input)
        
        const label = document.createElement("label");
        label.htmlFor = `task-${i + 1}`;
        form.append(label)

        const span = document.createElement("span");
        span.className = "task-item__text";
        span.innerText = tasks[i].text;

        taskItemMainContent.append(span)

        const button = document.createElement("button");
        button.className = "task-item__delete-button default-button delete-button";
        button.deleteTaskId = i + 1;
        button.innerText = "Удалить"

        taskItemMainContainer.append(button)

        taskElements.push(taskItemContainer)
    }
    return taskElements;

}

const tasksListElement = document.querySelector(".tasks-list")
console.log(tasksListElement)
const taskElements = createTasks(tasks)
console.log(taskElements)

for (const task of taskElements) {
    tasksListElement.appendChild(task)

}

/*<div class="task-item" data-task-id="1">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                <label for="task-1"></label>
            </form>
            <span class="task-item__text">Посмотреть новый урок по javaScript</span>
        </div>
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
        Удалить
        </button>
    </div>
</div>*/
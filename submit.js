const createTaskForm = document.querySelector(".create-task-block");

createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const { target } = event;
    const taskName = target.taskName.value;
    if (taskName) {
        removeErrorBlock();
        createTask(taskName);
    } else {
        createErrorBlock(createTaskForm);
    }

})

const tasksListBlock = document.querySelector(".tasks-list");
let targetTaskIdToDelete = null;

tasksListBlock.addEventListener("click", (event) => {
    const { target } = event;
    const isDeleteButton = target.closest(".task-item__delete-button");
    if (isDeleteButton) {
        const closestTask = target.closest(".task-item");
        targetTaskIdToDelete = closestTask.id;
        toggleModalWindow();
    }
})

const cancelButton = document.querySelector(".delete-modal__cancel-button");

cancelButton.addEventListener("click", (event) => {
    toggleModalWindow();
})

const deleteButton = document.querySelector(".delete-modal__confirm-button");

deleteButton.addEventListener("click", (event) => {
    const { target } = event;
    removeTaskById(targetTaskIdToDelete);
    toggleModalWindow();
})

removeTaskById = (id) => {
    const task = document.querySelector(`[id="${targetTaskIdToDelete}"]`);
    task.remove();
}


toggleModalWindow = () => {
    const modalWindow = document.querySelector(".modal-overlay");
    modalWindow.classList.toggle("modal-overlay_hidden");
}

removeErrorBlock = () => {
    const errorBlock = document.querySelector(".error-message-block");
    if (errorBlock) {
        errorBlock.remove();
    }
}

createErrorBlock = (createTaskForm) => {
    const errorBlock = document.createElement("span");
    errorBlock.className = "error-message-block";
    errorBlock.innerText = "Введите название задачи";

    createTaskForm.append(errorBlock);

} 

createTask = (taskName) => {
    const id = Date.now();

    const taskItemContainer = document.createElement("div");
    taskItemContainer.className = 'task-item';
    taskItemContainer.id = id;

    const taskItemMainContainer = document.createElement("div");
    taskItemMainContainer.className = "task-item__main-container";
    taskItemContainer.append(taskItemMainContainer);

    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";
    taskItemMainContainer.append(taskItemMainContent);

    const form = document.createElement("form");
    form.className = "checkbox-form";
    taskItemMainContent.append(form);

    const input = document.createElement("input");
    input.className = "checkbox-form__checkbox";
    input.type = "checkbox";
    input.id = `task-${id}`;
    form.append(input);
        
    const label = document.createElement("label");
    label.htmlFor = `task-${id}`;
    form.append(label);

    const span = document.createElement("span");
    span.className = "task-item__text";
    span.innerText = taskName;

    taskItemMainContent.append(span);

    const button = document.createElement("button");
    button.className = "task-item__delete-button default-button delete-button";
    button.deleteTaskId = id;
    button.innerText = "Удалить";

    taskItemMainContainer.append(button);
    
    const tasksListElement = document.querySelector(".tasks-list");
    tasksListElement.append(taskItemContainer);
}

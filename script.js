const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskCategory = document.getElementById("taskCategory");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");
const themeBtn = document.getElementById("themeBtn");

let nextTaskId = 1;

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const category = taskCategory.value;

    if (title === "") {
        taskTitle.focus();
        return;
    }

    createTask(title, category);
    taskForm.reset();
    taskTitle.focus();

    updateTaskCount();
});

function createTask(title, category) {
    const card = document.createElement("article");
    const heading = document.createElement("h3");
    const categoryText = document.createElement("p");
    const actions = document.createElement("div");

    heading.appendChild(document.createTextNode(title));
    categoryText.appendChild(
        document.createTextNode("Category: " + category)
    );

    categoryText.classList.add("task-category");
    actions.classList.add("task-actions");

    const completeBtn = createButton(
        "Complete",
        "complete-btn",
        "complete"
    );

    const editBtn = createButton(
        "Edit",
        "edit-btn",
        "edit"
    );

    const deleteBtn = createButton(
        "Delete",
        "delete-btn",
        "delete"
    );

    card.setAttribute("data-task-id", String(nextTaskId));
    card.setAttribute("data-category", category);
    card.setAttribute("data-status", "pending");
    card.setAttribute("data-active", "true");

    console.log("Task ID:", card.dataset.taskId);
    console.log("Category:", card.dataset.category);

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    card.appendChild(heading);
    card.appendChild(categoryText);
    card.appendChild(actions);

    card.classList.add("task-card");

    emptyMessage.hidden = true;

    taskList.appendChild(card);
    nextTaskId++;
}

function createButton(label, className, action) {
    const button = document.createElement("button");

    button.type = "button";
    button.classList.add(className);
    button.setAttribute("data-action", action);
    button.appendChild(document.createTextNode(label));

    return button;
}

taskList.addEventListener("click", function (event) {
    // Find the clicked action button, even if its inner content is clicked.
    const button = event.target.closest("button[data-action]");

    if (!button || !taskList.contains(button)) {
        return;
    }

    // Find the task card containing the clicked button.
    const card = button.closest(".task-card");

    if (!card) {
        return;
    }

    // Read the action using getAttribute().
    const action = button.getAttribute("data-action");

    // Read the task's custom data attribute.
    const taskId = card.getAttribute("data-task-id");

    console.log("Clicked action:", action);
    console.log("Task ID:", taskId);

    if (action === "complete") {
        toggleComplete(card, button);
    }

    if (action === "edit") {
        editTask(card);
    }

    if (action === "delete") {
        deleteTask(card);
    }

    updateTaskCount();
});


// 6. Complete / Undo task
function toggleComplete(card, button) {
    const isCompleted = card.classList.toggle("completed");

    if (isCompleted) {
        card.setAttribute("data-status", "completed");

        // Demonstrate removeAttribute().
        card.removeAttribute("data-active");

        button.textContent = "Undo";
    } else {
        card.setAttribute("data-status", "pending");

        // Restore the active data attribute.
        card.setAttribute("data-active", "true");

        button.textContent = "Complete";
    }

    console.log("Current status:", card.dataset.status);
}


// 7. Edit task
function editTask(card) {
    const heading = card.querySelector("h3");
    const oldTitle = heading.textContent;

    const newTitle = prompt("Enter the new task title:", oldTitle);

    // Cancel or blank input should not change the title.
    if (newTitle === null || newTitle.trim() === "") {
        return;
    }

    // textContent updates the DOM safely as text.
    heading.textContent = newTitle.trim();
}


// 8. Delete task
function deleteTask(card) {
    const shouldDelete = confirm("Do you want to delete this task?");

    if (!shouldDelete) {
        return;
    }

    // Remove the task card from the DOM.
    card.remove();

    // Show the empty message if there are no tasks left.
    if (taskList.querySelectorAll(".task-card").length === 0) {
        emptyMessage.hidden = false;
    }
}


// 9. Update task statistics
function updateTaskCount() {
    const cards = taskList.querySelectorAll(".task-card");
    const total = cards.length;

    const completed = taskList.querySelectorAll(
        '.task-card[data-status="completed"]'
    ).length;

    taskCount.textContent =
        "Total tasks: " + total + " | Completed: " + completed;
}


// 10. Theme toggle using classList
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});




// Event capturing demonstration
grandparent.addEventListener("click", function () {
    console.log("Grandparent capturing listener");
}, true);


// 12. Attributes vs properties demonstration
console.log("Input value property:", taskTitle.value);
console.log("Input value attribute:", taskTitle.getAttribute("value"));
console.log("Input ID property:", taskTitle.id);
console.log("Input ID attribute:", taskTitle.getAttribute("id"));

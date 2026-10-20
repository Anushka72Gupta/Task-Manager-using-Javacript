# Interactive Task Manager

## About My Project

I created this Task Manager using HTML, CSS, and Vanilla JavaScript. My main goal was to understand how JavaScript works with the DOM and how a webpage becomes interactive without using any framework or library.

Users can add tasks, select a category, edit task titles, mark tasks as complete, delete tasks, and switch between light and dark themes.

## Features

- Add a new task without refreshing the page.
- Choose a category: Work, Study, or Personal.
- Edit an existing task title.
- Mark a task as complete or undo it.
- Delete a task with confirmation.
- Switch between light and dark themes.
- Display the total and completed task count.
- Demonstrate event bubbling and event delegation.
- Use custom data attributes to store task information.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- DOM APIs

## How the Browser Processes a Webpage

### 1. HTML Parsing

HTML parsing is the process in which the browser reads the HTML code and understands how the page is structured. In my project, the browser reads elements such as the form, input fields, buttons, and task list to create the page structure.

### 2. Tokenization

During tokenization, the browser converts the HTML characters into tokens. These tokens represent things such as opening tags, closing tags, attributes, and text. The browser uses these tokens while building the DOM tree.

### 3. DOM Tree

The DOM tree represents the HTML document as a tree of objects. Parent elements contain child elements.

In my project, the main app contains different sections, and the task list contains task cards. JavaScript can access and update these elements using DOM APIs.

### 4. CSSOM Tree

CSSOM stands for CSS Object Model. It represents the CSS rules as objects that the browser can use to understand the styles of a page.

In my project, the browser processes the CSS rules for task cards, buttons, completed tasks, responsive layouts, and dark mode.

### 5. Render Tree

The render tree combines the DOM information with the CSS styling information needed to display visible content. It helps the browser determine what should be rendered on the screen.

For example, when I add a task, JavaScript updates the DOM. The browser then updates the necessary rendering information to show the new task.

### 6. Layout, Paint, and Compositing

After the rendering information is prepared, the browser calculates element sizes and positions during layout, draws visual elements during paint, and combines rendered layers during compositing.

These steps help display the webpage and reflect visual changes.

## DOM Manipulation

DOM manipulation means creating, changing, or removing elements on a webpage using JavaScript.

I used the following methods in my project:

- `document.createElement()` to create task cards and buttons.
- `document.createTextNode()` to create text nodes.
- `appendChild()` to add elements inside other elements.
- `textContent` to update task titles and button labels.
- `classList.add()` and `classList.toggle()` to manage CSS classes.
- `element.remove()` to delete a task card.

All task cards are created dynamically, so the page does not need to refresh when a task is added.

## Attributes vs Properties

HTML attributes are values written in the HTML markup. DOM properties are values available on JavaScript objects that represent HTML elements.

For example, `input.getAttribute("value")` reads the value attribute, while `input.value` gives the current value entered in the input field.

I used `getAttribute()`, `setAttribute()`, and `removeAttribute()` to read, set, and remove attributes. I also used properties such as `value`, `id`, and `textContent`.

## Dataset and Custom Data Attributes

Custom data attributes allow me to store additional information on HTML elements.

In my project, I used:

- `data-task-id` to identify a task.
- `data-category` to store its category.
- `data-status` to store whether it is pending or completed.
- `data-active` to demonstrate adding and removing an attribute.

JavaScript can access these values through `element.dataset`. For example, `card.dataset.status` reads the task status.

## Event Handling

Event handling allows JavaScript to respond when a user performs an action.

I used the `submit` event to add tasks and the `click` event to handle task actions and theme switching. I used `event.preventDefault()` to prevent the form from submitting in the browser's default way and refreshing the page.

## Event Bubbling

Event bubbling means that an event normally travels from the element where it happens to its parent elements.

In my bubbling demonstration, clicking the child button triggers its listener first, then the parent listener, and finally the grandparent listener.

This helps me understand how events move through nested HTML elements.

## Event Capturing

Event capturing is the phase in which an event travels from outer ancestors towards the target element before the target's listener runs.

The capturing phase can be demonstrated by passing `true` as the third argument to `addEventListener()`.

My original bubbling example uses the default bubbling phase. Capturing is an additional concept that can be tested by adding a capturing listener to the grandparent or parent element.

## Event Delegation

Event delegation means adding one event listener to a parent element instead of adding separate listeners to every child button.

In my project, I added one click listener to the task list. I used `event.target.closest("button[data-action]")` to identify the clicked action button and `closest(".task-card")` to find its task card.

The `data-action` attribute tells JavaScript whether the user clicked Complete, Edit, or Delete.

This also works for newly created task cards because the listener is already attached to their parent.

## Code Quality and User Experience

I divided the code into separate HTML, CSS, and JavaScript files to keep it easy to understand and maintain.

I used functions for creating tasks, editing titles, completing tasks, deleting tasks, and updating the task count. I also used `textContent` and text nodes when displaying user-entered task titles.

The layout is responsive, and the task manager provides feedback through button labels, task styling, and confirmation before deletion.

## Limitations

The tasks are currently stored only in the page's DOM. If the page is refreshed, the tasks are lost. Saving tasks between page visits can be added later using localStorage.

## What I Learned

While building this project, I learned how the browser processes HTML and CSS, how to manipulate the DOM, how attributes and properties differ, and how event bubbling and event delegation work in JavaScript.

This project helped me practice JavaScript fundamentals by building an interactive application without using any frameworks or libraries.

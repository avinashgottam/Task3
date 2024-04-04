document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'LI') {
            e.target.classList.toggle('completed');
            saveTasks();
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add(getTaskType(taskText)); // Add class based on task type
        const icon = getTaskIcon(taskText); // Get icon based on task type
        if (icon) {
            const img = document.createElement('img');
            img.src = icon;
            li.appendChild(img);
        }
        taskList.appendChild(li);
    }

    function getTaskType(taskText) {
        if (taskText.toLowerCase().includes('eat')) {
            return 'eat';
        } else if (taskText.toLowerCase().includes('sleep')) {
            return 'sleep';
        } else if (taskText.toLowerCase().includes('work')) {
            return 'work';
        } else {
            return '';
        }
    }

    function getTaskIcon(taskText) {
        if (taskText.toLowerCase().includes('eat')) {
            return 'eat_icon.png'; // Path to eat icon image
        } else if (taskText.toLowerCase().includes('sleep')) {
            return 'sleep_icon.png'; // Path to sleep icon image
        } else if (taskText.toLowerCase().includes('work')) {
            return 'work_icon.png'; // Path to work icon image
        } else {
            return ''; // No icon for other tasks
        }
    }

    function saveTasks() {
        localStorage.setItem('tasks', taskList.innerHTML);
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            taskList.innerHTML = savedTasks;
        }
    }

    loadTasks();
});

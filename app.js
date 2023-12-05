// Arreglo para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask() {
    const taskInput = document.getElementById('taskInput');

    // Obtén el valor del input
    const newTask = taskInput.value.trim();

    // Verifica si el input no está vacío
    if (newTask !== '') {
        // Agrega la tarea al arreglo
        tasks.push({ text: newTask, completed: false });

        // Actualiza la lista de tareas en el HTML
        renderTaskList();

        // Limpia el input
        taskInput.value = '';
    }
}

// Función para marcar una tarea como completada
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTaskList();
}

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTaskList();
}

// Función para renderizar la lista de tareas
function renderTaskList() {
    const taskList = document.getElementById('taskList');

    // Limpia la lista antes de renderizar las tareas
    taskList.innerHTML = '';

    // Agrega cada tarea como un nuevo elemento de lista
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed-task' : '';
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
                <button class="delete-button" onclick="deleteTask(${index})">Eliminar</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

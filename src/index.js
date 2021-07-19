import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
const tasksDiv = document.getElementById('tasks');
const tasks = [];
class Task {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}
const task1 = new Task(1, 'first task', false);
const task2 = new Task(2, 'second task', false);
const task3 = new Task(3, 'third task', true);
const task4 = new Task(4, 'forth task', true);
tasks.push(task1, task2, task3, task4);
const addTasks = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    const li = document.createElement('li');
    const task = tasks[i];
    li.innerHTML = `
            <div class="d-flex justify-content-between">
                <div>
                <input class="checkbox m-2" type="checkbox" id="${task.index}">
                <label for="${task.index}">${task.description}</label>
                </div>
                <i class="fas fa-ellipsis-v"></i>
            </div>
            `;
    tasksDiv.appendChild(li);
  }
};
addTasks(tasks);
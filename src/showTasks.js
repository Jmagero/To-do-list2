import { tasks } from './taskClass.js';
// eslint-disable-next-line import/no-cycle
import sort from './sort.js';
// eslint-disable-next-line import/no-cycle
import checkbox from './checkBox.js';

const tasksContainer = document.getElementById('tasks');

const addTasks = () => {
  tasksContainer.innerHTML = '';
  tasks.forEach((e) => {
    const li = document.createElement('li');
    if (e.completed === true) {
      li.innerHTML = `
              <div>
              <input class="checkbox m-2" type="checkbox" id="${e.index}" checked>
              <label for="${e.index}">${e.description}</label>
              </div>
              <i class="fas fa-ellipsis-v"></i>
            `;
    } else {
      li.innerHTML = `
              <div>
              <input class="checkbox m-2" type="checkbox" id="${e.index}">
              <label for="${e.index}">${e.description}</label>
              </div>
              <i class="fas fa-ellipsis-v"></i>
            `;
    }
    li.classList.add('list-group-item', 'draggable', 'droppable', 'd-flex', 'justify-content-between', 'align-items-center');
    li.setAttribute('draggable', 'true');
    tasksContainer.appendChild(li);
  });
  sort();
  checkbox();
};

export default addTasks;
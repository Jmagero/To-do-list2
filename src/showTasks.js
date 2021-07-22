/* eslint-disable import/no-cycle */
import { tasks } from './taskClass';
import sort from './sort';
import checkbox from './checkBox';
import editTask from './editTask';

const addTasks = () => {
  const taskContainer = document.querySelector('#tasks');
  let indexOfCheckboxes = -1;
  taskContainer.innerHTML = '';
  tasks.forEach((e) => {
    indexOfCheckboxes += 1;
    const li = document.createElement('li');
    if (e.completed === true) {
      e.id = indexOfCheckboxes;
      li.innerHTML = `
      <div>
      <input class="checkbox m-2" type="checkbox" id="${indexOfCheckboxes}" checked=true>
      <label class="completed" id="${indexOfCheckboxes}">${e.description}</label>
      </div>
      <i class="fas fa-ellipsis-v draggableicon"></i>
      `;
    } else {
      e.id = indexOfCheckboxes;
      li.innerHTML = `
      <div>
      <input class="checkbox m-2" type="checkbox" id="${indexOfCheckboxes}">
      <label id="${indexOfCheckboxes}">${e.description}</label>
      </div>
      <i class="fas fa-ellipsis-v draggableicon"></i>
      `;
    }
    li.classList.add('list-group-item', 'draggable', 'droppable', 'd-flex', 'justify-content-between', 'align-items-center');
    li.setAttribute('draggable', 'true');
    taskContainer.appendChild(li);
  });
  sort();
  checkbox();
  editTask();
};

export default addTasks;
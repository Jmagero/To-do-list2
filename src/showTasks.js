import { tasks } from './taskClass.js';
// eslint-disable-next-line import/no-cycle
import sort from './sort.js';
// eslint-disable-next-line import/no-cycle
import checkbox from './checkBox.js';



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
};

export default addTasks;
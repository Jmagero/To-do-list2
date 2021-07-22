/* eslint-disable import/no-cycle */
import { saveTasks } from './localStorage';
import addTasks from './showTasks';
import { tasks } from './taskClass';

const editTask = () => {
  const labelSelector = document.querySelectorAll('label[id]');
  const icon = document.createElement('i');
  icon.classList.add('bi', 'bi-trash', 'fs-5');
  const newInput = document.createElement('input');
  newInput.classList.add('no-border');
  newInput.setAttribute('type', 'text');
  labelSelector.forEach((e) => {
    e.addEventListener('click', (event) => {
      newInput.setAttribute('id', `${event.target.id}`);
      newInput.value = `${event.target.innerText}`;
      event.target.parentNode.append(newInput);
      newInput.focus();
      icon.setAttribute('id', `${event.target.id}`);
      event.target.parentNode.nextSibling.parentNode.append(icon);
      icon.addEventListener('click', () => {
        tasks.splice(e.id, 1);
        saveTasks();
        addTasks();
      });
      event.target.parentNode.nextSibling.nextSibling.remove();
      newInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          tasks[e.id].description = newInput.value;
          saveTasks();
          addTasks();
        }
      });
      event.target.remove();
    });
  });
};

export default editTask;
import addTasks from './showTasks.js';
import { saveTasks } from './localStorage.js';
import { Task, tasks } from './taskClass.js';

const enterEvent = () => {
  const inputSelector = document.querySelector('#inputTask');

  inputSelector.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const task = new Task(inputSelector.value);
      tasks.push(task);
      addTasks();
      saveTasks();
      inputSelector.value = '';
    }
  });
};

export default enterEvent;
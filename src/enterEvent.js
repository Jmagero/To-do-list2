  
import addTasks from './showTasks';
import { saveTasks } from './localStorage';
import { Task, tasks } from './taskClass';

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
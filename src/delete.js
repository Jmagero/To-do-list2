 
/* eslint-disable import/no-cycle */
import { saveTasks } from './localStorage.js';
import addTasks from './showTasks.js';
import { tasks } from './taskClass.js';

const deleteTask = () => {
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', () => {
    const result = tasks.filter((x) => x.completed === false);
    tasks.splice(0);
    tasks.push(...result);
    saveTasks();
    addTasks();
  });
};

export default deleteTask;
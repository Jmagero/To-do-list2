/* eslint-disable import/no-cycle */
import { saveTasks } from './localStorage';
import { tasks } from './taskClass';

const checkbox = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((e) => {
    e.addEventListener('change', () => {
      const index2 = e.id;
      if (e.checked) {
        tasks[index2].completed = true;
        e.nextSibling.nextSibling.classList.add('completed');
        saveTasks();
      } else {
        tasks[index2].completed = false;
        saveTasks();
      }
    });
  });
};

export default checkbox;

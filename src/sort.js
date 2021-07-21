/* eslint-disable import/no-cycle */
import { tasks } from './taskClass.js';
import addTasks from './showTasks.js';
import { saveTasks } from './localStorage.js';

const sort = () => {
  const draggables = document.querySelectorAll('.draggable');
  let dragged = null;
  let dropped = null;
  draggables.forEach((e) => {
    e.addEventListener('dragstart', () => {
      e.classList.add('hover');
      dragged = e.children[0].children[0].id;
    });

    e.addEventListener('dragend', () => {
      e.classList.remove('hover2');
    });

    e.addEventListener('dragenter', (event) => {
      if (dragged !== event.target) { e.classList.add('hover2'); }
    });

    e.addEventListener('dragleave', () => {
      e.classList.remove('hover2');
    });

    e.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    e.addEventListener('drop', () => {
      e.classList.remove('hover2');
      dropped = e.children[0].children[0].id;
      const swap = (arr, draggedIndex, droppedIndex) => {
        const temp = arr[droppedIndex];
        arr[droppedIndex] = arr[draggedIndex];
        arr[draggedIndex] = temp;
        addTasks();
        saveTasks();
      };
      if (dragged !== dropped) {
        if (e.classList.contains('droppable')) {
          swap(tasks, dragged, dropped);
        }
      }
    });
  });
};

export default sort;
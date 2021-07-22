import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTasks, saveTasks } from './localStorage.js';
import enterEvent from './enterEvent';
import deleteTask from './delete';


getTasks();
enterEvent();
deleteTask();




import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTasks } from './localStorage.js';
import enterEvent from './enterEvent.js';
import deleteTask from './delete.js';

getTasks();
enterEvent();
deleteTask();

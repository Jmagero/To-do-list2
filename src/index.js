import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getTasks } from './localStorage';
import enterEvent from './enterEvent';
import deleteTask from './delete';

getTasks();
enterEvent();
deleteTask();

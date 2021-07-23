import './style.scss';

import metListen from './initializer';
import metTasks from './addtask';

document.getElementsByClassName('fa-calendar-plus')[0].addEventListener('click', () => { metTasks.create(); });
metListen.createDOM();
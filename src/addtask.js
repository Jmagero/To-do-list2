import metListen from './initializer';

const metTasks = {

  create() {
    const addField = document.getElementById('name-field');

    if (addField.value === '') {
      addField.classList.add('error-msg');
      addField.setAttribute('placeholder', 'Please enter task description here');
    } else {
      addField.classList.remove('error-msg');
      addField.setAttribute('placeholder', 'Add to your list...');
      const indexarr = localStorage.getItem('index') ? localStorage.getItem('index').split(',') : [];
      const lastindex = indexarr.length === 0 ? 0 : indexarr.length;
      const obj = { description: addField.value, status: false, index: lastindex };
      metListen.updateStorage(obj);
      addField.value = '';
    }
  },
};

export default metTasks;
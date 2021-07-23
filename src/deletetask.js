import metDrag from './dragndrop';
import metStatus from './status';
import metName from './taskname';
import metPopulator from './updater';

const metDelete = {

  deleteItem(index) {
    const li = document.getElementsByTagName('li')[index];

    const newDict = metPopulator.getStorage();
    newDict.splice(index, 1);

    localStorage.clear();
    for (let i = 0; i < newDict.length; i += 1) {
      const obj = { description: newDict[i][0], status: newDict[i][1], index: i };
      metPopulator.updateStorage(obj);
    }

    li.remove();
    this.addListeners();
  },

  deleteChecked() {
    const Dict = metPopulator.getStorage();
    for (let i = Dict.length - 1; i >= 0; i -= 1) {
      const li = document.getElementsByTagName('li')[i];
      if (li.firstElementChild.firstElementChild.checked) {
        li.remove();
      }
    }

    const newDict = Dict.filter((obj) => obj[1] === 'false');
    localStorage.clear();
    for (let j = 0; j < newDict.length; j += 1) {
      const obj = { description: newDict[j][0], status: newDict[j][1], index: j };
      metPopulator.updateStorage(obj);
    }

    this.addListeners();
  },

  addListeners() {
    const ul = document.getElementsByTagName('ul')[0];
    const items = metPopulator.getStorage();
    ul.innerHTML = '';
    for (let i = 0; i < items.length; i += 1) {
      const li = document.createElement('li');
      li.draggable = true;
      const checked = items[i][1] === 'true' ? 'checked' : '';
      li.innerHTML = `<nav><input type='checkbox' ${checked} class='status' name='completed'><p>${items[i][0]}</p></nav><i class="fas fa-ellipsis-v"></i><i class="fas fa-trash-alt invisible"></i>`;
      ul.appendChild(li);
      li.addEventListener('dragstart', () => { li.classList.add('ontop'); });
      li.addEventListener('drop', () => { metDrag.dropOut(i); });
      li.addEventListener('dragover', (e) => { metDrag.onBottom(e, li); });
      li.addEventListener('dragleave', () => { li.classList.remove('onbottom'); });
      li.firstChild.lastChild.addEventListener('click', () => { metName.editName(i); });
      li.firstChild.firstChild.addEventListener('change', () => { metStatus.updateStatus(li.firstChild.firstChild, i); });
      li.lastChild.addEventListener('click', () => { setTimeout(() => { metDelete.deleteItem(i); }, 200); });
    }
  },
};

export default metDelete;
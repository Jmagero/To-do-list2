import metPopulator from './updater';

const metName = {
  editName(index) {
    const li = document.getElementsByTagName('li');
    li[index].setAttribute('draggable', 'false');

    const pElement = li[index].firstChild.lastChild;
    pElement.style.display = 'none';
    const inputField = document.createElement('input');
    inputField.className = 'input-field';
    inputField.value = pElement.textContent;
    li[index].firstChild.appendChild(inputField);
    inputField.focus();

    const thrash = li[index].lastChild;
    const dots = li[index].getElementsByClassName('fa-ellipsis-v')[0];
    dots.classList.add('invisible');
    thrash.classList.remove('invisible');

    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        metName.updateName(pElement, inputField, index, dots, thrash);
      }
    });
  },

  updateName(p, input, index, dots, thrash) {
    const li = document.getElementsByTagName('li');
    const newDict = metPopulator.getStorage();
    newDict[index][0] = input.value;
    localStorage.clear();
    for (let i = 0; i < newDict.length; i += 1) {
      const obj = { description: newDict[i][0], status: newDict[i][1], index: newDict[i][2] };
      metPopulator.updateStorage(obj);
    }

    if (li[index].firstChild.contains(input)) {
      li[index].firstChild.removeChild(input);
    }
    p.style.display = 'block';
    li[index].setAttribute('draggable', 'true');

    dots.classList.remove('invisible');
    thrash.classList.add('invisible');

    metPopulator.updateDOM();
  },
};

export default metName;
import metPopulator from './updater';

const metStatus = {
  updateStatus(item, index) {
    const newDict = metPopulator.getStorage();
    newDict[index][1] = item.checked;
    localStorage.clear();
    for (let i = 0; i < newDict.length; i += 1) {
      const obj = { description: newDict[i][0], status: newDict[i][1], index: newDict[i][2] };
      metPopulator.updateStorage(obj);
    }

    metPopulator.updateDOM();
  },
};

export default metStatus;
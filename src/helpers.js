import { projectObj } from './index';

function returnActiveProject() {
  for (let key in projectObj) {
    if (projectObj[key]['active']) {
      return key;
    }
  }
}

function clearActiveProject() {
  for (let key in projectObj) {
    projectObj[key]['active'] = false;
  }
}

export { returnActiveProject, clearActiveProject };

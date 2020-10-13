import { append } from './buildingBlocks';

function render(projects) {
  if (!document.getElementById('content-container')) {
    let element = document.createElement('div');
    element.setAttribute('id', 'content-container');
    append('content', element);
  }

  let container = document.getElementById('content-container');

  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  for (let i = 0; i < projects.length; i++) {
    let elementContainer = document.createElement('div');
    let element = document.createElement('h3');
    element.innerHTML = projects[i].name;
    elementContainer.appendChild(element);
    append('content-container', elementContainer);
  }
}

export { render };

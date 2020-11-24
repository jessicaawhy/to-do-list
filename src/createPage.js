function create(elementObject) {
  const element = document.createElement(elementObject['type']);
  element.innerHTML = elementObject['innerHTML'] || '';

  for (let key in elementObject['attributes']) {
    element.setAttribute(key, elementObject['attributes'][key]);
  }
  if (elementObject['classList']) {
    for (let i = 0; i < elementObject['classList'].length; i++) {
      element.classList.add(elementObject['classList'][i]);
    }
  }
  if (elementObject['parentElement']) {
    elementObject['parentElement'].appendChild(element);
  } else if (elementObject['parentID']) {
    const parent = document.getElementById(elementObject['parentID']);
    parent.appendChild(element);
  }

  return element;
}

function createSidebar() {
  const sidebar = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'sidebar'
    },
    classList: [],
    parentID: 'content',
  });

  const viewContainer = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'view'
    },
    classList: [],
    parentID: 'sidebar',
  });

  const homeView = create({
    type: 'h2', 
    innerHTML: 'Home',
    attributes: {
      id: 'home'
    },
    classList: [],
    parentID: 'view',
  });

  const todayView = create({
    type: 'h2', 
    innerHTML: 'Today',
    attributes: {
      id: 'today'
    },
    classList: [],
    parentID: 'view',
  });

  const weekView = create({
    type: 'h2', 
    innerHTML: 'Week',
    attributes: {
      id: 'week'
    },
    classList: [],
    parentID: 'view',
  });

  const projectsHeading = create({
    type: 'h2', 
    innerHTML: 'Projects',
    attributes: {
      id: ''
    },
    classList: [],
    parentID: 'sidebar',
  });

  const sidebarContainer = create({
    type: 'ul', 
    innerHTML: '',
    attributes: {
      id: 'sidebar-container'
    },
    classList: [],
    parentID: 'sidebar',
  });

  // Fake items for skeleton
  const listItem1 = create({
    type: 'li', 
    innerHTML: 'Coding',
    attributes: {
      id: ''
    },
    classList: [],
    parentID: 'sidebar-container',
  });

  const listItem2 = create({
    type: 'li', 
    innerHTML: 'Chores',
    attributes: {
      id: ''
    },
    classList: [],
    parentID: 'sidebar-container',
  });

  const addButton = create({
    type: 'li', 
    innerHTML: 'Add Project',
    attributes: {
      id: ''
    },
    classList: ['add-button'],
    parentID: 'sidebar-container',
  });
};

function createMain() {
  const main = create({
    type: 'div', 
    innerHTML: '',
    attributes: {
      id: 'main'
    },
    classList: [],
    parentID: 'content',
  });

  const homeView = create({
    type: 'h2', 
    innerHTML: 'Coding',
    attributes: {
      id: ''
    },
    classList: [],
    parentID: 'main',
  });

  const mainContainer = create({
    type: 'ul', 
    innerHTML: '',
    attributes: {
      id: 'main-container'
    },
    classList: [],
    parentID: 'main',
  });

  // Fake items for skeleton
  const listItem1 = create({
    type: 'li', 
    innerHTML: 'Do challenge problems',
    attributes: {
      id: ''
    },
    classList: [],
    parentID: 'main-container',
  });

  const listItem2 = create({
    type: 'li', 
    innerHTML: 'Daily commit',
    attributes: {
      id: ''
    },
    classList: [],
    parentID: 'main-container',
  });

  const listItem3 = create({
    type: 'li', 
    innerHTML: 'Read articles',
    attributes: {
      id: ''
    },
    classList: [],
    parentID: 'main-container',
  });

  const addButton = create({
    type: 'li', 
    innerHTML: 'Add Todo',
    attributes: {
      id: ''
    },
    classList: ['add-button'],
    parentID: 'main-container',
  });
};

export { createMain, createSidebar };

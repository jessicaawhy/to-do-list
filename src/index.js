import { Project } from './project';
import { Todo } from './todo'
import { pageStructure, sidebarStructure, mainStructure, projectForm, todoForm } from './projectStructure';

const projectView = (() => {
  const projectList = {
    'Example': {
      tasks: [{
        title: 'Here is a new project'
      },
      {
        title: 'I hope it renders correctly'
      }]
    }
  }

  function create(...structure) {
    let newArray = [].concat(...structure);
    for (let i = 0; i < newArray.length; i++) {
      createElement(newArray[i]);
    }
  }

  function createElement(elementObject) {
    const element = document.createElement(elementObject['type']);
    element.innerHTML = elementObject['innerHTML'] || '';
    const parent = document.getElementById(elementObject['parent']);
    parent.appendChild(element);
    for (let key in elementObject['attributes']) {
      element.setAttribute(key, elementObject['attributes'][key]);
    }
    if (elementObject['classList']) {
      for (let i = 0; i < elementObject['classList'].length; i++) {
        element.classList.add(elementObject['classList'][i]);
      }
    }
  }

  function renderSidebar() {
    for (let projectName in projectList) {
      let projectContainer = [{ 
        type: 'div',
        parent: 'sidebar-container',
        attributes: {
          id: projectName
        },
        classList: ["wrapper-btns"]
      },
      { 
        type: 'button',
        parent: projectName,
        innerHTML: projectName,
        attributes: {
        },
        classList: ['sidebar-name-btn']
      },
      { 
        type: 'button',
        parent: projectName,
        innerHTML: 'Delete',
        attributes: {
        },
        classList: ['delete-name-btn']
      }];
      create(projectContainer);
      const nameButton = document.getElementById(projectName).firstChild;
      nameButton.addEventListener('click', (e) => renderTodos(e));
      const deleteButton = document.getElementById(projectName).lastChild;
      deleteButton.addEventListener('click', (e) => deleteProject(e));
    }
  }
  
  function renderTodos(e) {
    const name = e ? e.target.parentNode.id : document.getElementById('main-header').innerHTML;
    deleteMainStructure();
    create(mainStructure);
    const mainHeader = document.getElementById('main-header');
    mainHeader.innerHTML = name;
    
    for (let i = 0; i < projectList[name]['tasks'].length; i++) {
      let currentTodo = projectList[name]['tasks'][i];
      let taskContainer = [
        { 
          type: 'div',
          parent: 'main-container',
          attributes: {
            id: `task${i}`
          },
          classList: ["wrapper-btns"]
        },
        { 
          type: 'button',
          parent: `task${i}`,
          innerHTML: currentTodo.title,
          attributes: {
          },
          classList: ['main-name-btn']
        },
        { 
          type: 'button',
          parent: `task${i}`,
          innerHTML: 'Delete',
          attributes: {
          },
          classList: ['main-name-btn']
        }];
        create(taskContainer);
        const deleteButton = document.getElementById(`task${i}`).lastChild; 
        deleteButton.addEventListener('click', (e) => deleteTodo(e));
      }
      create(todoForm);
      const addTodoButton = document.getElementById('add-todo-button');
      addTodoButton.addEventListener('click', ()=> toggleDisplay('todo'));
      const submitTodoButton = document.getElementById('submit-todo-button');
      submitTodoButton.addEventListener('click', addTodo);
    }

  function addProject() {
    // add something to handle projects that already exist
    const name = document.getElementById("project-name-input").value;
    if (projectList[name]) {
      console.log('Please choose another name'); // change this to a box alert later
    } else {
      const project = new Project(name);
      projectList[name] = project;
      document.getElementById("project-name-input").value = '';
      let container = [{ 
        type: 'div',
        parent: 'sidebar-container',
        attributes: {
          id: name
        },
        classList: ["wrapper-btns"]
      },
      { 
        type: 'button',
        parent: name,
        innerHTML: name,
        attributes: {
        },
        classList: ['sidebar-name-btn']
      },
      { 
        type: 'button',
        parent: name,
        innerHTML: 'Delete',
        attributes: {
        },
        classList: ['delete-name-btn']
      }];
      create(container);
    }
  }
  
  function deleteProject(e) {
    deleteMainStructure();
    const name = e.target.closest('div').firstChild.innerHTML;
    delete projectList[name];
    const target = e.target.closest('div');
    target.remove();
  }
  
  function addTodo() {
    // add something to handle projects that already exist
    const projectName = document.getElementById('main-header').innerHTML;
    const todoTitle = document.getElementById("todo-name-input").value;

    let newTodo = new Todo(todoTitle);
    projectList[projectName]['tasks'].push(newTodo);

    document.getElementById("todo-name-input").value = '';
    renderTodos();
  }

  function deleteTodo(e) {
    const todoIndex = e.target.closest('div').id.substring(4);
    const projectName = document.getElementById('main-header').innerHTML;

    projectList[projectName].tasks.splice(todoIndex, 1);

    renderTodos();
  }

  function deleteMainStructure() {
    const main = document.getElementById('main');
    if (main) {
      while (main.firstChild) {
        main.removeChild(main.lastChild);
      }
    }
  }

  function toggleDisplay(type) {
    const displaySetting = document.getElementById(`add-${type}-form`); // swap out for id var
    if (displaySetting.style.display === "none" || !displaySetting.style.display) {
      displaySetting.style.display = "block";
    } else {
      displaySetting.style.display = "none";
    }
  }
  
  create(pageStructure, sidebarStructure, projectForm);
  renderSidebar();
  const addProjectButton = document.getElementById('add-project-button');
  addProjectButton.addEventListener('click', ()=> toggleDisplay('project'));
  const submitProjectButton = document.getElementById('submit-project-button');
  submitProjectButton.addEventListener('click', addProject);
  })()
  
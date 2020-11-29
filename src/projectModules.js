import { projectObj, render, returnActiveProject, clearActiveProject } from './index';


const newProject = (function() {
  const _modal = document.getElementById('project-modal');

  const addBtn = document.getElementById("add-project-button");
  const cancelBtn = _modal.querySelector('.cancel');
  const submitBtn = document.getElementById('submit-project');
  
  const _clearInputs = () => {
    document.getElementById('project-name').value = '';
  }

  const show = () => {
    _modal.style.display = "flex";
  }

  const hide = () => {
    _modal.style.display = "none";
    _clearInputs();
  }

  const submit = () => {
    const name = document.getElementById('project-name').value;

    // fix projectObj later, need to fix this
    clearActiveProject()
    projectObj[name] = {
      todo: ['Add tasks here!'],
      active: true,
    }

    hide();
    render();
  }

  return { addBtn, cancelBtn, submitBtn, show, hide, submit }
}());

const newTodo = (function() {
  const _modal = document.getElementById('todo-modal');
  
  const addBtn = document.getElementById("add-todo-button");
  const cancelBtn = _modal.querySelector('.cancel');
  const submitBtn = document.getElementById('submit-todo');
  
  const _clearInputs = () => {
    document.getElementById('todo-name').value = '';
  }
  
  const show = () => {
    _modal.style.display = "flex";
  }

  const hide = () => {
    _modal.style.display = "none";
    _clearInputs();
  }

  const submit = () => {
    const name = document.getElementById('todo-name').value;
    
    // fix projectObj later, need to fix this
    let current = returnActiveProject()
    projectObj[current]['todo'].push(name)

    hide();
    render();
  }

  return { addBtn, cancelBtn, submitBtn, show, hide, submit };
}());

export { newProject, newTodo };
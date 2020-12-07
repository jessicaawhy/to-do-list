import { render } from './render';
import { createProject, createTodo, editProjectName } from './helpers';

const newProject = (function() {
  const _modal = document.getElementById('project-modal');
  const _projectName = document.getElementById('project-name');

  const addBtn = document.getElementById("add-project-button");
  const cancelBtn = _modal.querySelector('.cancel');
  const submitBtn = document.getElementById('submit-project');
  
  const _clearInputs = () => {
    _projectName.value = '';
  }

  const show = () => {
    _modal.style.display = "flex";
  }

  const hide = () => {
    _modal.style.display = "none";
    _clearInputs();
  }

  const submit = () => {
    const name = _projectName.value;

    if (name.length === 0) {
      alert('Please enter a valid name!');
    } else {
      createProject(name);
      hide();
      render();
    }
  }

  return { addBtn, cancelBtn, submitBtn, show, hide, submit };
}());

const editProject = (function() {
  const _modal = document.getElementById('edit-project-modal');
  const _projectHeader = document.getElementById('main-project-header');
  const _projectInput = document.getElementById('edit-project-name');

  const editBtn = document.getElementById('edit-project-btn');
  const cancelBtn = _modal.querySelector('.cancel');
  const submitBtn = document.getElementById('edit-project');
  
  const _clearInputs = () => {
    _projectInput.value = '';
  }

  const show = () => {
    _modal.style.display = "flex";
    _projectInput.value = _projectHeader.innerHTML;
  }

  const hide = () => {
    _modal.style.display = "none";
    _clearInputs();
  }

  const submit = () => {
    const name = _projectInput.value;

    if (name.length === 0) {
      alert('Please enter a valid name!');
    } else {
      editProjectName(name);
      hide();
      render();
    }
  }

  return { editBtn, cancelBtn, submitBtn, show, hide, submit };
}());

const newTodo = (function() {
  const _modal = document.getElementById('todo-modal');
  const _todoName = document.getElementById('todo-name');
  const _todoDate = document.getElementById('todo-date');
  
  const addBtn = document.getElementById("add-todo-button");
  const cancelBtn = _modal.querySelector('.cancel');
  const submitBtn = document.getElementById('submit-todo');
  
  const _clearInputs = () => {
    _todoName.value = '';
  }
  
  const show = () => {
    _modal.style.display = "flex";
  }

  const hide = () => {
    _modal.style.display = "none";
    _clearInputs();
  }

  const submit = () => {
    const name = _todoName.value;
    const date = _todoDate.value;

    if (name.length === 0) {
      alert('Please enter a valid name!');
    } else {
      createTodo(name, date);
      hide();
      render();
    }
  }

  return { addBtn, cancelBtn, submitBtn, show, hide, submit };
}());

export { newProject, editProject, newTodo };

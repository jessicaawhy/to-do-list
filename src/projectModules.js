import { render } from './render';
import { clearActiveProject, saveToStorage, createProject, createTodo } from './helpers';


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
      clearActiveProject()
      createProject(name);
      hide();
      saveToStorage();
      render();
    }
  }

  return { addBtn, cancelBtn, submitBtn, show, hide, submit };
}());

const newTodo = (function() {
  const _modal = document.getElementById('todo-modal');
  const _todoName = document.getElementById('todo-name');
  
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

    if (name.length === 0) {
      alert('Please enter a valid name!');
    } else {
      createTodo(name)
      hide();
      saveToStorage();
      render();
    }
  }

  return { addBtn, cancelBtn, submitBtn, show, hide, submit };
}());

export { newProject, newTodo };

import { newProject, newTodo, editProject } from './projectModules';
import { 
  deleteProject, 
  setActiveProject, 
  deleteTodo, 
  toggleEditView,
  submitTodoEdit,
  hideTodoInputs,
  toggleCompletion,
  showAllTodos 
} from './helpers';

newProject.addBtn.addEventListener('click', newProject.show);
newProject.cancelBtn.addEventListener('click', newProject.hide);
newProject.submitBtn.addEventListener('click', newProject.submit);

editProject.editBtn.addEventListener('click', editProject.show);
editProject.cancelBtn.addEventListener('click', editProject.hide);
editProject.submitBtn.addEventListener('click', editProject.submit);

newTodo.addBtn.addEventListener('click', newTodo.show);
newTodo.cancelBtn.addEventListener('click', newTodo.hide);
newTodo.submitBtn.addEventListener('click', newTodo.submit);

function addProjectListeners() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => project.addEventListener('click', (e) => setActiveProject(e)));

  const deleteBtns = document.querySelectorAll('.delete-project');
  deleteBtns.forEach(btn => btn.addEventListener('click', (e) => deleteProject(e)));

  const home = document.getElementById('home');
  home.addEventListener('click', showAllTodos);
}

function addTodoListeners() {
  const deleteBtns = document.querySelectorAll('.todo-delete-btn');
  deleteBtns.forEach(btn => btn.addEventListener('click', (e) => deleteTodo(e)));

  const editBtns = document.querySelectorAll('.todo-edit-btn');
  editBtns.forEach(btn => btn.addEventListener('click', (e) => toggleEditView(e)));

  const submitBtns = document.querySelectorAll('.todo-submit-btn');
  submitBtns.forEach(btn => btn.addEventListener('click', (e) => submitTodoEdit(e)));

  const cancelBtns = document.querySelectorAll('.todo-cancel-btn');
  cancelBtns.forEach(btn => btn.addEventListener('click', hideTodoInputs));

  const checkboxes = document.querySelectorAll('.todo-checkbox');
  checkboxes.forEach(box => box.addEventListener('change',(e) => toggleCompletion(e)));
}

export { addProjectListeners, addTodoListeners };

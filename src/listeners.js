import { newProject, newTodo } from './projectModules';
import { switchProject, deleteProject, deleteTodo, editTodo } from './helpers';

newProject.addBtn.addEventListener('click', newProject.show);
newProject.cancelBtn.addEventListener('click', newProject.hide);
newProject.submitBtn.addEventListener('click', newProject.submit);

newTodo.addBtn.addEventListener('click', newTodo.show);
newTodo.cancelBtn.addEventListener('click', newTodo.hide);
newTodo.submitBtn.addEventListener('click', newTodo.submit);

function addProjectListeners() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => project.addEventListener('click', (e) => switchProject(e)));

  const deleteBtns = document.querySelectorAll('.delete-project');
  deleteBtns.forEach(btn => btn.addEventListener('click', (e) => deleteProject(e)));
}

function addTodoListeners() {
  const deleteBtns = document.querySelectorAll('.delete-todo');
  deleteBtns.forEach(btn => btn.addEventListener('click', (e) => deleteTodo(e)));

  const editBtns = document.querySelectorAll('.edit-todo');
  editBtns.forEach(btn => btn.addEventListener('click', (e) => editTodo(e)));
}

export { addProjectListeners, addTodoListeners };

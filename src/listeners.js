import { newProject, newTodo } from './projectModules';

newProject.addBtn.addEventListener('click', newProject.show);
newProject.cancelBtn.addEventListener('click', newProject.hide);
newProject.submitBtn.addEventListener('click', newProject.submit);

newTodo.addBtn.addEventListener('click', newTodo.show);
newTodo.cancelBtn.addEventListener('click', newTodo.hide);
newTodo.submitBtn.addEventListener('click', newTodo.submit);

// for each project, we want to be able to delete
function deleteProject() {

}

// for each project, we want to be able to switch projects
function switchProject() {

}

// for each todo, we want to be able to delete
function deleteTodo() {

}

// export { deleteProject, switchProject, deleteTodo };

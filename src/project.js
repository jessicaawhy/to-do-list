import { Todo } from './todo';

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addToDo(title, description, dueDate, priority, status) {
    let newItem = new Todo(title, description, dueDate, priority, status);
    this.tasks.push(newItem);
  }

  deleteToDo(element) {
    this.tasks.splice(element, 1);
  }

  editToDo(element) {

  }
}

export { Project };

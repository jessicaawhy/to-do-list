import { render } from './render'

var projects = [];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

function submitNewProject() {
  let name = document.getElementById("name-input").value;
  let newProject = new Project(name)
  projects.push(newProject);
  document.getElementById("name-input").value = '';
  render(projects);
}

export { submitNewProject };

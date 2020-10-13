class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

function createNewProject() {
  var nameValue = document.getElementById('name-input').value;
  console.log(nameValue);
}

export { Project };

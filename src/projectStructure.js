const pageStructure = [{ 
  type: 'div', 
  parent: 'content',
  attributes: {
    id: 'sidebar'
  }
},
{ 
  type: 'div', 
  parent: 'sidebar',
  attributes: {
    id: 'sidebar-header'
  }
},
{ 
  type: 'div',
  parent: 'sidebar',
  attributes: {
    id: 'sidebar-container'
  }
},
{ 
  type: 'div',
  parent: 'sidebar',
  attributes: {
    id: 'sidebar-footer'
  }
},
{ 
  type: 'div',
  parent: 'content',
  attributes: {
    id: 'main'
  }
},
{ 
  type: 'div',
  parent: 'main',
  attributes: {
    id: 'main-header'
  }
},
{ 
  type: 'div',
  parent: 'main',
  attributes: {
    id: 'main-container'
  }
},
{ 
  type: 'div',
  parent: 'main',
  attributes: {
    id: 'main-footer'
  }
}];

const sidebarStructure = [{ 
  type: 'h1', 
  parent: 'sidebar-header',
  innerHTML: 'Projects',
  attributes: {
  }
},
{ 
  type: 'button', 
  parent: 'sidebar-footer',
  innerHTML: 'Add Project',
  attributes: {
    id: 'add-project-button'
  }
}];

const mainStructure = [{ 
  type: 'h1', 
  parent: 'main-header',
  innerHTML: 'Todos',
  attributes: {
  }
},
{ 
  type: 'button', 
  parent: 'main-footer',
  innerHTML: 'Add Todo',
  attributes: {
    id: 'add-todo-button'
  }
}];

const forms = [{ 
  type: 'form', 
  parent: 'sidebar-footer',
  innerHTML: '',
  attributes: {
    'id': 'add-project-form',
    'onsubmit': 'return false'
  }
},
{
  type: 'label', 
  parent: 'add-project-form',
  innerHTML: 'Project Name',
  attributes: {
    'for': 'name',
  }
},
{
  type: 'input', 
  parent: 'add-project-form',
  innerHTML: '',
  attributes: {
    'name': 'name',
    'type': 'text',
    'id': 'project-name-input',
    'placeholder': 'Name'
  }
},
{
  type: 'button', 
  parent: 'add-project-form',
  innerHTML: 'Submit',
  attributes: {
    'type': 'submit',
    'value': 'Submit',
    'id': 'submit-project-button',
    'placeholder': 'Name'
  }
}];

export { pageStructure, sidebarStructure, mainStructure, forms };

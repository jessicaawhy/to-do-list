import { render } from './render';

if (!localStorage.getItem('projects1')) {

  let myProjects = {
    Coding: {
      todo: [
        {
          name: 'Read articles',
          dueDate: '',
          complete: false,
        },
        {
          name: 'Do challenge problems',
          dueDate: '',
          complete: false,
        },
        {
          name: 'Daily commit',
          dueDate: '',
          complete: false,
        }
      ],
      active: true,
    },
    Chores: {
      todo: [
        {
          name: 'Get groceries',
          dueDate: '',
          complete: false,
        },
        {
          name: 'Do laundry',
          dueDate: '',
          complete: false,
        },
        {
          name: 'Wash dishes',
          dueDate: '',
          complete: false,
        }
      ],
      active: false,
    }
  }

  localStorage.setItem('projects1', JSON.stringify(myProjects));
}

const projectObj = JSON.parse(localStorage.getItem('projects1'))

render();

export { projectObj };

import './styles/style.css';
import { render } from './render';

if (!localStorage.getItem('projects')) {

  let myProjects = {
    Coding: {
      todo: [
        {
          name: 'Read articles',
          dueDate: '',
          complete: false,
          project: 'Coding',
        },
        {
          name: 'Do challenge problems',
          dueDate: '',
          complete: false,
          project: 'Coding',
        },
        {
          name: 'Daily commit',
          dueDate: '',
          complete: false,
          project: 'Coding',
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
          project: 'Chores',
        },
        {
          name: 'Do laundry',
          dueDate: '',
          complete: false,
          project: 'Chores',
        },
        {
          name: 'Wash dishes',
          dueDate: '',
          complete: false,
          project: 'Chores',
        }
      ],
      active: false,
    }
  }

  localStorage.setItem('projects', JSON.stringify(myProjects));
}

const projectObj = JSON.parse(localStorage.getItem('projects'));

render();

export { projectObj };

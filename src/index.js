import { render } from './render';

if (!localStorage.getItem('projects')) {

  let myProjects = {
    Coding: {
      todo: [
        'Read articles',
        'Do challenge problems',
        'Daily commit'
      ],
      active: true,
    },
    Chores: {
      todo: [
        'Get groceries',
        'Do laundry',
        'Wash dishes'
      ],
      active: false,
    }
  }

  localStorage.setItem('projects', JSON.stringify(myProjects));
}

const projectObj = JSON.parse(localStorage.getItem('projects'))

render();

export { projectObj };

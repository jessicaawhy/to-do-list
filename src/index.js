import { create } from './create';
import listeners from './listeners';
import { render } from './render';

const projectObj = {
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

render();

export { projectObj };

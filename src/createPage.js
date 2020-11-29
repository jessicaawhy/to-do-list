function create(elementObject) {
  const element = document.createElement(elementObject['type']);
  element.innerHTML = elementObject['innerHTML'] || '';

  for (let key in elementObject['attributes']) {
    element.setAttribute(key, elementObject['attributes'][key]);
  }
  if (elementObject['classList']) {
    for (let i = 0; i < elementObject['classList'].length; i++) {
      element.classList.add(elementObject['classList'][i]);
    }
  }
  if (elementObject['parentElement']) {
    elementObject['parentElement'].appendChild(element);
  } else if (elementObject['parentID']) {
    const parent = document.getElementById(elementObject['parentID']);
    parent.appendChild(element);
  }

  return element;
}

export { create };

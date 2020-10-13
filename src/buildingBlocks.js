function createLabelTag(name, labelText) {
  let label = document.createElement('label');
  label.setAttribute('for', name);
  label.innerHTML = labelText;
  return label;
}

function createInputTag(name, type, id, placeholder) {
  let input = document.createElement('input');
  input.setAttribute('name', name);
  input.setAttribute('type', type);
  input.setAttribute('id', id);
  input.setAttribute('placeholder', placeholder);
  return input;
}

function createButton(buttonId, buttonText) {
  let button = document.createElement('button');
  append('content', button)
  button.setAttribute('id', buttonId);
  button.innerHTML = buttonText;
  return button;
}

function append(parentId, child) {
  const parent = document.getElementById(parentId);
  parent.appendChild(child);
}

export {createLabelTag, createInputTag, createButton, append};
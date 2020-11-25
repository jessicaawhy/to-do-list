function modalHandler(e) {
  const type = e.target.id.split('-')[1];
  
  const modal = document.getElementById(`${type}-modal`);
  modal.style.display = "block";
  
  const span = modal.querySelector('.cancel');
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target.id === `${type}-modal`) {
      modal.style.display = "none";
    }
  }
}

function addModalListeners() {
  const projBtn = document.getElementById("add-project-button");
  const taskBtn = document.getElementById("add-todo-button");
  projBtn.addEventListener('click', (e) => modalHandler(e));
  taskBtn.addEventListener('click', (e) => modalHandler(e));
}

export { addModalListeners };

(()=>{"use strict";function t(t){const e=t.target.id.split("-")[1],n=document.getElementById(e+"-modal");n.style.display="block",n.querySelector(".cancel").onclick=function(){n.style.display="none"},window.onclick=function(t){t.target.id===e+"-modal"&&(n.style.display="none")}}!function(){const e=document.getElementById("add-project-button"),n=document.getElementById("add-todo-button");e.addEventListener("click",(e=>t(e))),n.addEventListener("click",(e=>t(e)))}()})();
//# sourceMappingURL=main.js.map
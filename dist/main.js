(()=>{"use strict";function e(e){const t=document.createElement(e.type);t.innerHTML=e.innerHTML||"";for(let n in e.attributes)t.setAttribute(n,e.attributes[n]);if(e.classList)for(let n=0;n<e.classList.length;n++)t.classList.add(e.classList[n]);return e.parentElement?e.parentElement.appendChild(t):e.parentID&&document.getElementById(e.parentID).appendChild(t),t}function t(e){const t=e.target.id.split("-")[1],n=document.getElementById(t+"-modal");n.style.display="flex",n.querySelector(".cancel").onclick=function(){n.style.display="none"},window.onclick=function(e){e.target.id===t+"-modal"&&(n.style.display="none"),document.getElementById(t+"-name").value=""}}!function(){const e=document.getElementById("add-project-button"),n=document.getElementById("add-todo-button");e.addEventListener("click",(e=>t(e))),n.addEventListener("click",(e=>t(e)))}();const n={Coding:["Read articles","Do challenge problems","Daily commit"],Chores:["Get groceries","Do laundry","Wash dishes"]};let l=Object.keys(n)[0];function d(t){for(let t in n){let n=e({type:"div",innerHTML:"",attributes:{id:""},classList:[],parentID:"project-list"}),l=e({type:"li",innerHTML:""+t,attributes:{id:""},classList:[],parentElement:n}),d=e({type:"span",innerHTML:"x",attributes:{id:""},classList:[],parentElement:n});l.addEventListener("click",(e=>o(e))),d.addEventListener("click",(e=>s(e)))}if(l){document.getElementById("main-project-header").innerHTML=l,document.getElementById("main-container").style.display="block",document.getElementById("add-todo-button").style.display="block";for(let t=0;t<n[l].length;t++){let d=e({type:"div",innerHTML:"",attributes:{id:""},classList:[],parentID:"todo-list"});e({type:"li",innerHTML:""+n[l][t],attributes:{id:""},classList:[],parentElement:d}),e({type:"span",innerHTML:"x",attributes:{id:""},classList:[],parentElement:d}).addEventListener("click",(e=>a(e)))}}else document.getElementById("main-project-header").innerHTML="Add a new project!",document.getElementById("main-container").style.display="block",document.getElementById("add-todo-button").style.display="none"}function i(){let e=document.getElementById("project-list");for(;e.firstChild;)e.removeChild(e.lastChild);let t=document.getElementById("todo-list");for(;t.firstChild;)t.removeChild(t.lastChild);document.getElementById("main-project-header").innerHTML="",document.getElementById("main-container").style.display="none"}function o(e){l=e.target.innerHTML,i(),d()}function s(e){let t=e.target.parentElement.firstChild.innerHTML;delete n[t],i(),l===t&&(l=Object.keys(n)[0]),d()}function a(e){let t=e.target.parentElement.firstChild.innerHTML,o=n[l].indexOf(t);n[l].splice(o,1),i(),d()}document.getElementById("submit-project").onclick=function(){let e=document.getElementById("project-name").value;document.getElementById("project-name").value="",n[e]=["Add tasks here!"],l=e,i(),d(),document.getElementById("project-modal").style.display="none"},document.getElementById("submit-todo").onclick=function(){let e=document.getElementById("todo-name").value;document.getElementById("todo-name").value="",n[l].push(e),i(),d(),document.getElementById("todo-modal").style.display="none"},d()})();
//# sourceMappingURL=main.js.map
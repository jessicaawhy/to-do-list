(()=>{"use strict";var e={550:(e,t,n)=>{function i(e){const t=document.createElement(e.type);t.innerHTML=e.innerHTML||"";for(let n in e.attributes)t.setAttribute(n,e.attributes[n]);if(e.classList)for(let n=0;n<e.classList.length;n++)t.classList.add(e.classList[n]);return e.parentElement?e.parentElement.appendChild(t):e.parentID&&document.getElementById(e.parentID).appendChild(t),t}function d(){for(let e in a)if(a[e].active)return e}function o(){for(let e in a)a[e].active=!1}n.d(t,{T:()=>a});const l=function(){const e=document.getElementById("project-modal"),t=document.getElementById("add-project-button"),n=e.querySelector(".cancel"),i=document.getElementById("submit-project"),d=()=>{e.style.display="none",document.getElementById("project-name").value=""};return{addBtn:t,cancelBtn:n,submitBtn:i,show:()=>{e.style.display="flex"},hide:d,submit:()=>{const e=document.getElementById("project-name").value;0===e.length?alert("Please enter a valid name!"):(o(),a[e]={todo:["Add tasks here!"],active:!0},d(),s())}}}(),c=function(){const e=document.getElementById("todo-modal"),t=document.getElementById("add-todo-button"),n=e.querySelector(".cancel"),i=document.getElementById("submit-todo"),o=()=>{e.style.display="none",document.getElementById("todo-name").value=""};return{addBtn:t,cancelBtn:n,submitBtn:i,show:()=>{e.style.display="flex"},hide:o,submit:()=>{const e=document.getElementById("todo-name").value;if(0===e.length)alert("Please enter a valid name!");else{let t=d();a[t].todo.push(e),o(),s()}}}}();function r(){document.querySelectorAll(".project").forEach((e=>e.addEventListener("click",(e=>function(e){o();const t=e.target.parentElement.firstChild.innerHTML;a[t].active=!0,s()}(e))))),document.querySelectorAll(".delete-project").forEach((e=>e.addEventListener("click",(e=>function(e){const t=e.target.parentElement.firstChild.innerHTML;delete a[t];const n=d();Object.keys(a).length>0&&!n&&function(){let e=Object.keys(a)[0];a[e].active=!0}(),s()}(e)))))}function s(){!function(){let e=document.getElementById("project-list");for(;e.firstChild;)e.removeChild(e.lastChild);let t=document.getElementById("todo-list");for(;t.firstChild;)t.removeChild(t.lastChild);document.getElementById("main-project-header").innerHTML="",document.getElementById("main-container").style.display="none"}(),function(){for(let e in a){let t=i({type:"div",innerHTML:"",attributes:{id:""},classList:[],parentID:"project-list"});i({type:"li",innerHTML:""+e,attributes:{id:""},classList:["project"],parentElement:t}),i({type:"span",innerHTML:"x",attributes:{id:""},classList:["delete-project"],parentElement:t})}}(),function(){let e=d();if(e){document.getElementById("main-project-header").innerHTML=e,document.getElementById("main-container").style.display="block",document.getElementById("add-todo-button").style.display="block";for(let t=0;t<a[e].todo.length;t++){let n=i({type:"div",innerHTML:"",attributes:{id:""},classList:[],parentID:"todo-list"}),d=(i({type:"li",innerHTML:""+a[e].todo[t],attributes:{id:""},classList:[],parentElement:n}),i({type:"div",innerHTML:"",attributes:{id:""},classList:["todo-btn-container"],parentElement:n}));i({type:"img",innerHTML:"",attributes:{id:"",src:"../src/public/edit-pencil.png"},classList:["edit-todo"],parentElement:d}),i({type:"span",innerHTML:"x",attributes:{id:""},classList:["delete-todo"],parentElement:d})}}else document.getElementById("main-project-header").innerHTML="Add a new project!",document.getElementById("main-container").style.display="block",document.getElementById("add-todo-button").style.display="none"}(),r(),document.querySelectorAll(".delete-todo").forEach((e=>e.addEventListener("click",(e=>function(e){const t=e.target.parentElement.firstChild.innerHTML,n=d(),i=a[n].todo.indexOf(t);a[n].todo.splice(i,1),s()}(e)))))}l.addBtn.addEventListener("click",l.show),l.cancelBtn.addEventListener("click",l.hide),l.submitBtn.addEventListener("click",l.submit),c.addBtn.addEventListener("click",c.show),c.cancelBtn.addEventListener("click",c.hide),c.submitBtn.addEventListener("click",c.submit);const a={Coding:{todo:["Read articles","Do challenge problems","Daily commit"],active:!0},Chores:{todo:["Get groceries","Do laundry","Wash dishes"],active:!1}};s()}},t={};function n(i){if(t[i])return t[i].exports;var d=t[i]={exports:{}};return e[i](d,d.exports,n),d.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(550)})();
//# sourceMappingURL=main.js.map
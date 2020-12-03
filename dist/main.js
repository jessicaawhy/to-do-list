(()=>{"use strict";var e={550:(e,t,n)=>{function o(e){const t=document.createElement(e.type);t.innerHTML=e.innerHTML||"";for(let n in e.attributes)t.setAttribute(n,e.attributes[n]);if(e.classList)for(let n=0;n<e.classList.length;n++)t.classList.add(e.classList[n]);return e.parentElement?e.parentElement.appendChild(t):e.parentID&&document.getElementById(e.parentID).appendChild(t),t}function l(){for(let e in m)if(m[e].active)return e}function i(){for(let e in m)m[e].active=!1}function d(){document.querySelectorAll(".normal-view").forEach((e=>e.style.display="flex")),document.querySelectorAll(".edit-view").forEach((e=>e.style.display="none"))}function a(){localStorage.setItem("projects1",JSON.stringify(m))}n.d(t,{T:()=>m});const c=function(){const e=document.getElementById("project-modal"),t=document.getElementById("project-name"),n=document.getElementById("add-project-button"),o=e.querySelector(".cancel"),l=document.getElementById("submit-project"),d=()=>{e.style.display="none",t.value=""};return{addBtn:n,cancelBtn:o,submitBtn:l,show:()=>{e.style.display="flex"},hide:d,submit:()=>{const e=t.value;0===e.length?alert("Please enter a valid name!"):(i(),function(e){m[e]={todo:[],active:!0}}(e),d(),a(),u())}}}(),r=function(){const e=document.getElementById("todo-modal"),t=document.getElementById("todo-name"),n=document.getElementById("todo-date"),o=document.getElementById("add-todo-button"),i=e.querySelector(".cancel"),d=document.getElementById("submit-todo"),c=()=>{e.style.display="none",t.value=""};return{addBtn:o,cancelBtn:i,submitBtn:d,show:()=>{e.style.display="flex"},hide:c,submit:()=>{const e=t.value,o=n.value;0===e.length?alert("Please enter a valid name!"):(function(e,t){let n=l();m[n].todo.push({name:e,dueDate:t,complete:!1})}(e,o),c(),a(),u())}}}();function s(){document.querySelectorAll(".project").forEach((e=>e.addEventListener("click",(e=>function(e){i();const t=e.target.parentElement.firstChild.innerHTML;m[t].active=!0,a(),u()}(e))))),document.querySelectorAll(".delete-project").forEach((e=>e.addEventListener("click",(e=>function(e){const t=e.target.parentElement.firstChild.innerHTML;delete m[t];const n=l();Object.keys(m).length>0&&!n&&function(){let e=Object.keys(m)[0];m[e].active=!0,a()}(),a(),u()}(e)))))}function u(){!function(){let e=document.getElementById("project-list");for(;e.firstChild;)e.removeChild(e.lastChild);let t=document.getElementById("todo-list");for(;t.firstChild;)t.removeChild(t.lastChild);document.getElementById("main-project-header").innerHTML="",document.getElementById("main-container").style.display="none"}(),function(){for(let e in m){let t=o({type:"div",innerHTML:"",attributes:{id:""},classList:[],parentID:"project-list"});o({type:"li",innerHTML:""+e,attributes:{id:""},classList:["project"],parentElement:t}),o({type:"span",innerHTML:"x",attributes:{id:""},classList:["delete-project"],parentElement:t})}}(),function(){let e=l();if(e){document.getElementById("main-project-header").innerHTML=e,document.getElementById("main-container").style.display="block",document.getElementById("add-todo-button").style.display="block";for(let t=0;t<m[e].todo.length;t++){let n=o({type:"div",innerHTML:"",attributes:{id:""},classList:["todo-item-container"],parentID:"todo-list"}),l=o({type:"div",innerHTML:"",attributes:{id:""},classList:["normal-view"],parentElement:n}),i=o({type:"input",innerHTML:"",attributes:{id:"",type:"checkbox"},classList:["todo-checkbox"],parentElement:l}),d=(o({type:"li",innerHTML:""+m[e].todo[t].name,attributes:{id:""},classList:["todo-text"],parentElement:l}),o({type:"div",innerHTML:"",attributes:{id:""},classList:["end-container"],parentElement:l}));o({type:"span",innerHTML:""+m[e].todo[t].dueDate,attributes:{id:""},classList:["todo-date"],parentElement:d}),o({type:"img",innerHTML:"",attributes:{id:"",src:"../src/public/edit-pencil.png"},classList:["todo-edit-btn"],parentElement:d}),o({type:"span",innerHTML:"x",attributes:{id:""},classList:["todo-delete-btn"],parentElement:d}),m[e].todo[t].complete?(i.checked=!0,l.classList.add("complete")):(i.checked=!1,l.classList.remove("complete"));let a=o({type:"div",innerHTML:"",attributes:{id:""},classList:["edit-view"],parentElement:n});a.style.display="none",o({type:"input",innerHTML:"",attributes:{id:"",value:""+m[e].todo[t].name},classList:["todo-text-input"],parentElement:a});let c=o({type:"div",innerHTML:"",attributes:{id:""},classList:["end-container"],parentElement:a});o({type:"input",innerHTML:"",attributes:{id:"",value:""+m[e].todo[t].dueDate,type:"date"},classList:["todo-date-input"],parentElement:c}),o({type:"button",innerHTML:"submit",attributes:{id:"",src:""},classList:["todo-submit-btn"],parentElement:c}),o({type:"button",innerHTML:"cancel",attributes:{id:""},classList:["todo-cancel-btn"],parentElement:c})}}else document.getElementById("main-project-header").innerHTML="Add a new project!",document.getElementById("main-container").style.display="block",document.getElementById("add-todo-button").style.display="none"}(),s(),document.querySelectorAll(".todo-delete-btn").forEach((e=>e.addEventListener("click",(e=>function(e){const t=e.target.closest(".todo-item-container").querySelector("li").innerHTML,n=l();let o;for(let e=0;e<m[n].todo.length;e++)m[n].todo[e].name===t&&(o=e);m[n].todo.splice(o,1),a(),u()}(e))))),document.querySelectorAll(".todo-edit-btn").forEach((e=>e.addEventListener("click",(e=>function(e){d(),e.target.closest(".normal-view").style.display="none",e.target.closest(".todo-item-container").querySelector(".edit-view").style.display="flex"}(e))))),document.querySelectorAll(".todo-submit-btn").forEach((e=>e.addEventListener("click",(e=>function(e){let t,n=e.target.closest(".todo-item-container").querySelector("li").innerHTML,o=l();for(let e=0;e<m[o].todo.length;e++)m[o].todo[e].name===n&&(t=e);let i=e.target.closest(".edit-view").querySelector(".todo-text-input").value,d=e.target.closest(".edit-view").querySelector(".todo-date-input").value;0===i.length?alert("Please enter a valid task!"):(m[o].todo[t].name=i,m[o].todo[t].dueDate=d,a(),u())}(e))))),document.querySelectorAll(".todo-cancel-btn").forEach((e=>e.addEventListener("click",d))),document.querySelectorAll(".todo-checkbox").forEach((e=>e.addEventListener("change",(e=>function(e){const t=e.target.closest(".todo-item-container").querySelector("li").innerHTML,n=l();let o;for(let e=0;e<m[n].todo.length;e++)m[n].todo[e].name===t&&(o=e);m[n].todo[o].complete?m[n].todo[o].complete=!1:m[n].todo[o].complete=!0,a(),u()}(e)))))}if(c.addBtn.addEventListener("click",c.show),c.cancelBtn.addEventListener("click",c.hide),c.submitBtn.addEventListener("click",c.submit),r.addBtn.addEventListener("click",r.show),r.cancelBtn.addEventListener("click",r.hide),r.submitBtn.addEventListener("click",r.submit),!localStorage.getItem("projects1")){let e={Coding:{todo:[{name:"Read articles",dueDate:"",complete:!1},{name:"Do challenge problems",dueDate:"",complete:!1},{name:"Daily commit",dueDate:"",complete:!1}],active:!0},Chores:{todo:[{name:"Get groceries",dueDate:"",complete:!1},{name:"Do laundry",dueDate:"",complete:!1},{name:"Wash dishes",dueDate:"",complete:!1}],active:!1}};localStorage.setItem("projects1",JSON.stringify(e))}const m=JSON.parse(localStorage.getItem("projects1"));u()}},t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(550)})();
//# sourceMappingURL=main.js.map
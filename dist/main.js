(()=>{"use strict";class t{constructor(t,e,n,i,a){this.title=t,this.description=e,this.dueDate=n,this.priority=i,this.status=a}}class e{constructor(t){this.name=t,this.tasks=[]}addToDo(e,n,i,a,r){let s=new t(e,n,i,a,r);this.tasks.push(s)}deleteToDo(t){this.tasks.splice(t,1)}editToDo(t){}}const n=[{type:"div",parent:"content",attributes:{id:"sidebar"}},{type:"div",parent:"sidebar",attributes:{id:"sidebar-header"}},{type:"div",parent:"sidebar",attributes:{id:"sidebar-container"}},{type:"div",parent:"sidebar",attributes:{id:"sidebar-footer"}}],i=[{type:"h1",parent:"sidebar-header",innerHTML:"Projects",attributes:{}},{type:"button",parent:"sidebar-footer",innerHTML:"Add Project",attributes:{id:"add-project-button"}}],a=[{type:"div",parent:"content",attributes:{id:"main"}},{type:"div",parent:"main",attributes:{id:"main-header"}},{type:"div",parent:"main",attributes:{id:"main-container"}},{type:"div",parent:"main",attributes:{id:"main-footer"}},{type:"h1",parent:"main-header",innerHTML:"",attributes:{}},{type:"button",parent:"main-footer",innerHTML:"Add Todo",attributes:{id:"add-todo-button"}}],r=[{type:"form",parent:"sidebar-footer",innerHTML:"",attributes:{id:"add-project-form",onsubmit:"return false"}},{type:"label",parent:"add-project-form",innerHTML:"Project Name",attributes:{for:"name"}},{type:"input",parent:"add-project-form",innerHTML:"",attributes:{name:"name",type:"text",id:"project-name-input",placeholder:"Name"}},{type:"button",parent:"add-project-form",innerHTML:"Submit",attributes:{type:"submit",value:"Submit",id:"submit-project-button",placeholder:"Name"}}];(()=>{const t={Example:{tasks:[{title:"Here is a new project"},{title:"I hope it renders correctly"}]}};function s(...t){let e=[].concat(...t);for(let t=0;t<e.length;t++)d(e[t])}function d(t){const e=document.createElement(t.type);e.innerHTML=t.innerHTML||"",document.getElementById(t.parent).appendChild(e);for(let n in t.attributes)e.setAttribute(n,t.attributes[n]);if(t.classList)for(let n=0;n<t.classList.length;n++)e.classList.add(t.classList[n])}function o(e){l(),s(a);const n=e.target.parentNode.id;document.getElementById("main-header").innerHTML=n;for(let e=0;e<t[n].tasks.length;e++)s([{type:"div",parent:"main-container",attributes:{id:"task"+e},classList:["wrapper-btns"]},{type:"button",parent:"task"+e,innerHTML:t[n].tasks[e].title,attributes:{},classList:["main-name-btn"]},{type:"button",parent:"task"+e,innerHTML:"Delete",attributes:{},classList:["main-name-btn"]}])}function c(e){l();const n=e.target.closest("div").firstChild.innerHTML;delete t[n],e.target.closest("div").remove()}function l(){const t=document.getElementById("main");if(t)for(;t.firstChild;)t.removeChild(t.lastChild)}s(n,i,r),function(){for(let e in t)s([{type:"div",parent:"sidebar-container",attributes:{id:e},classList:["wrapper-btns"]},{type:"button",parent:e,innerHTML:e,attributes:{},classList:["sidebar-name-btn"]},{type:"button",parent:e,innerHTML:"Delete",attributes:{},classList:["delete-name-btn"]}]),document.getElementById(e).firstChild.addEventListener("click",(t=>o(t))),document.getElementById(e).lastChild.addEventListener("click",(t=>c(t)))}(),document.getElementById("add-project-button").addEventListener("click",(()=>function(){const t=document.getElementById("add-project-form");"none"!==t.style.display&&t.style.display?t.style.display="none":t.style.display="block"}())),document.getElementById("submit-project-button").addEventListener("click",(function(){const n=document.getElementById("project-name-input").value;if(t[n])console.log("Please choose another name");else{const i=new e(n);t[n]=i,document.getElementById("project-name-input").value="",s([{type:"div",parent:"sidebar-container",attributes:{id:n},classList:["wrapper-btns"]},{type:"button",parent:n,innerHTML:n,attributes:{},classList:["sidebar-name-btn"]},{type:"button",parent:n,innerHTML:"Delete",attributes:{},classList:["delete-name-btn"]}])}document.getElementById(""+n).firstChild.addEventListener("click",(t=>o(t))),document.getElementById(""+n).lastChild.addEventListener("click",(t=>c(t)))}))})()})();
//# sourceMappingURL=main.js.map
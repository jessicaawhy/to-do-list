(()=>{"use strict";class t{constructor(t,e,n,i,s){this.title=t,this.description=e,this.dueDate=n,this.priority=i,this.status=s}}class e{constructor(t){this.name=t,this.tasks=[]}addToDo(e,n,i,s,o){let c=new t(e,n,i,s,o);this.tasks.push(c)}deleteToDo(t){this.tasks.splice(t,1)}editToDo(t){}}(()=>{const t={};function n(t){const e=document.getElementById("add-project-form");"none"!==e.style.display&&e.style.display?e.style.display="none":e.style.display="block"}function i(){const n=document.getElementById("name-input").value;if(t[n])console.log("Please choose another name");else{const i=new e(n);t[n]=i,document.getElementById("name-input").value="";const s=document.createElement("div"),o=document.createElement("h3");o.innerHTML=n,o.classList.add("project"),s.appendChild(o);const c=document.createElement("button");c.innerHTML="Delete Project",c.addEventListener("click",(e=>function(e){const n=e.target.closest("div").firstChild.innerHTML;delete t[n],e.target.closest("div").remove()}(e))),s.appendChild(c),document.getElementById("projects-list-container").appendChild(s)}}!function(){const t=document.querySelector("#content"),e=document.createElement("div");t.appendChild(e),e.setAttribute("id","sidebar");const s=document.createElement("h1");s.innerHTML="Projects",e.appendChild(s);const o=document.createElement("div");o.setAttribute("id","projects-list-container"),e.appendChild(o);const c=document.createElement("button");e.appendChild(c),c.setAttribute("id","new-project-button"),c.innerHTML="New Project",c.addEventListener("click",n);const d=document.createElement("form");e.appendChild(d),d.setAttribute("id","add-project-form"),d.setAttribute("onsubmit","return false");const r=document.createElement("label");d.appendChild(r),r.setAttribute("for","name"),r.innerHTML="Project Name";const a=document.createElement("input");d.appendChild(a),a.setAttribute("name","name"),a.setAttribute("type","text"),a.setAttribute("id","name-input"),a.setAttribute("placeholder","Name");const l=document.createElement("button");d.appendChild(l),l.setAttribute("type","submit"),l.setAttribute("value","Submit"),l.setAttribute("id","add-project"),l.innerHTML="Submit",l.addEventListener("click",i)}()})()})();
//# sourceMappingURL=main.js.map
let myTasks = [];
let myProjects = [];
let currentId = 0;

// Control Modals
function openModal (event){

 let overlay = document.querySelector(".overlay");
 console.log(event.target.id);
 overlay.classList.remove("hidden"); 

 if(event.target.id == "task" ){
  let Form = document.querySelector("#new-task");
  Form.classList.remove("hidden");
 } else {
  let Form = document.querySelector("#new-project");
  Form.classList.remove("hidden");

 }
}

function closeModal(event){
 let overlay = document.querySelector(".overlay");
 overlay.classList.add("hidden");

 let taskForm =  document.querySelector("#new-task");
 let projectForm = document.querySelector("#new-project");
 taskForm.classList.add("hidden");
 projectForm.classList.add("hidden");


}

class Tasks{
 constructor(title,dueDate, priority,notes, project){
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.project = project;

 }
};

class Projects{
 constructor (index, projectTitle, tasks){
  this.id = index;
  this.projectTitle = projectTitle;
  this.tasks = tasks;
 }
};

 function taskSubmit (event){
 event.preventDefault();

 //get input details
 let taskTitle = document.querySelector("#title").value;
 let taskDueDate = document.querySelector("#due-date").value;
 let taskPriority = document.querySelector("#priority").value;
 console.log(taskPriority);
 let taskNotes = document.querySelector("#notes").value;
 let taskProject = document.querySelector("#project").value;

 console.log(taskProject);

let newTask = new Tasks(taskTitle,taskDueDate,taskPriority,taskNotes,taskProject);

myTasks.push(newTask);
console.log(myTasks);

renderTasks();
closeModal();
};

function renderTasks(){
 let taskContainer = document.querySelector(".task-container");

 taskContainer.innerHTML = "";

 for (let i = 0; i <myTasks.length; i++){

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

 const title = document.createElement("p");
 title.innerText = myTasks[i].title;

 const dueDate = document.createElement("p");
 dueDate.innerText = myTasks[i].dueDate;


 const priority =document.createElement("p");
 priority.innerText = myTasks[i].priority;

 const notes = document.createElement("p");
 notes.innerText = myTasks[i].notes;

 const project = document.createElement("p");
 project.innerText = myTasks[i].project;

 taskItem.append(title);
 taskItem.append(dueDate);
 taskItem.append(priority);
 taskItem.append(notes);
 taskItem.append(project);

 taskContainer.append(taskItem);

 }
};

function renderProjects(){
 let projectContainer = document.querySelector(".project-container");
 projectContainer.innerHTML ="";

 for (let i = 0; i<myProjects.length;i++){

 let projectItem = document.createElement('div');
 projectItem.classList.add("project-item");
 let itemTitle = document.createElement('p');
 itemTitle.innerText = myProjects[i].projectTitle;

 projectItem.append(itemTitle);
 projectContainer.append(projectItem);
}
}

function projectSumbit (event){
 event.preventDefault();

 let Title = document.querySelector("#project-title").value;

 currentId++;

 let newProject = new Projects(currentId,Title,myTasks);
 myProjects.push(newProject);

 renderProjects();
 closeModal();

 console.log(myProjects);
 
};

(function documentLoad (){
let formbtns = document.querySelectorAll(".btn-open");
formbtns.forEach(e => e.addEventListener("click",openModal));

let formCloseBtns = document.querySelectorAll(".btn-close");
formCloseBtns.forEach(e=>e.addEventListener('click',closeModal));

let taskSubmitBtn = document.querySelector(".task-submit");
taskSubmitBtn.addEventListener ('click', taskSubmit);

let projectSumbitBtn = document.querySelector(".project-submit");
projectSumbitBtn.addEventListener ('click', projectSumbit);

})();
 




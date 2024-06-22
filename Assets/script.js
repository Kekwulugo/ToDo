let myProjects = [{
 id: 0,
 projectTitle: "Default Project",
 tasks: [{id:0,title: "Dummy Task", dueDate: "2024-04-24",priority:"low", notes: "Test notes", project:0, status: "done"}]
}];

let currentId = 0;
let currentTaskId = 1;

function openModal (event, id, pid){

 let overlay = document.querySelector(".overlay");
 overlay.classList.remove("hidden"); 

 if(event.target.id == "task"){
  let Form = document.querySelector("#new-task");
  Form.classList.remove("hidden");

 } else if (event.target.id == "edit" ){
  let Form = document.querySelector("#new-task");
  Form.classList.remove("hidden");
  document.querySelector("#title").value = myProjects[pid].tasks[id].title;
  document.querySelector("#due-date").value = myProjects[pid].tasks[id].dueDate;
  document.querySelector("#priority").value = myProjects[pid].tasks[id].priority;
  document.querySelector("#notes").value = myProjects[pid].tasks[id].notes;
  document.querySelector("#project").value = myProjects[pid].tasks[id].project;
  document.querySelector("#status").value = myProjects[pid].tasks[id].status;


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
 constructor(id,title,dueDate, priority,notes, project, status){
  this.id = id;
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.project = project;
  this.status = status;

 }
};

class Projects{
 constructor (index, projectTitle){
  this.id = index;
  this.projectTitle = projectTitle;
  this.tasks = [];
 }
};

function deleteTask (event){
 
 myProjects[event.target.dataset.projectId].tasks.pop([event.target.dataset.taskId]);
 renderTasks(event.target.dataset.projectId);

}

function editTask (event){
 console.log(event.target.id);

 let id = event.target.dataset.taskId;
 let pid = event.target.dataset.projectId;
 
 openModal(event, id, pid);

}

function taskSubmit (event){
 event.preventDefault();


 //get input details
 let taskTitle = document.querySelector("#title").value;
 let taskDueDate = document.querySelector("#due-date").value;
 let taskPriority = document.querySelector("#priority").value;
 let taskNotes = document.querySelector("#notes").value;
 let taskProject = document.querySelector("#project").selectedIndex;
 let taskStatus = document.querySelector("#status").value;


let newTask = new Tasks(currentTaskId,taskTitle,taskDueDate,taskPriority,taskNotes,taskProject, taskStatus);

currentTaskId++;

myProjects[taskProject].tasks.push(newTask);


renderTasks(taskProject);
closeModal();
};

function renderTasks(projectNumber){

 let taskContainer = document.querySelector(".task-container");

 taskContainer.innerHTML = "";

 
  for (let i = 0; i <myProjects[projectNumber].tasks.length; i++){
 
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

 const title = document.createElement("p");
 title.innerText = myProjects[projectNumber].tasks[i].title;

 const dueDate = document.createElement("p");
 dueDate.innerText = myProjects[projectNumber].tasks[i].dueDate;


 const priority =document.createElement("p");
 priority.innerText = myProjects[projectNumber].tasks[i].priority;

 const status =document.createElement("p");
 status.innerText = myProjects[projectNumber].tasks[i].status;

 const notes = myProjects[projectNumber].tasks[i].notes;


 const editBtn = document.createElement("button");
 editBtn.setAttribute('id',"edit");
 editBtn.dataset.projectId = myProjects[projectNumber].tasks[i].project;
 editBtn.dataset.taskId = myProjects[projectNumber].tasks[i].id;
 editBtn.innerText = "View/Edit";
editBtn.addEventListener('click', editTask);

 const deleteBtn = document.createElement("button");
 deleteBtn.setAttribute('id',"delete");
 deleteBtn.dataset.projectId = myProjects[projectNumber].tasks[i].project;
 deleteBtn.dataset.taskId = myProjects[projectNumber].tasks[i].id;
 deleteBtn.innerText = "Delete";
 deleteBtn.addEventListener('click', deleteTask);


 taskItem.append(title);
 taskItem.append(dueDate);
 taskItem.append(priority);
 taskItem.append(status);
 taskItem.append(editBtn);
 taskItem.append(deleteBtn);


 taskContainer.append(taskItem);

  
 }
};


function renderProjects(){
 let projectContainer = document.querySelector(".project-container");
 projectContainer.innerHTML ="";

 for (let i = 0; i<myProjects.length;i++){

 let projectItem = document.createElement('button');
 projectItem.classList.add("project-item");
 projectItem.innerText = myProjects[i].projectTitle;
 projectItem.setAttribute('id', myProjects[i].id);

 projectItem.addEventListener('click', function(){
  renderTasks(myProjects[i].id)
 });

 
 projectContainer.append(projectItem);
}
}

function updateProjectOptions (){
 let projectFormOptions = document.querySelector("#project");
projectFormOptions.innerHTML = "";

for (let i = 0; i<myProjects.length;i++){
 let options = document.createElement("option");
 options.innerText = myProjects[i].projectTitle;
 projectFormOptions.append(options);
}
}

function projectSumbit (event){
 event.preventDefault();

 let Title = document.querySelector("#project-title").value;

 currentId++;

 let newProject = new Projects(currentId,Title);
 myProjects.push(newProject);

 renderProjects();
 renderTasks(currentId);
 updateProjectOptions();
 closeModal();

 
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

renderProjects();
renderTasks(0);

})();
 




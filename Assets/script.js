let myProjects = [{
 id: 0,
 projectTitle: "Default Project",
 tasks: [{id:0,title: "Dummy Task", dueDate: "2024-04-24",priority:"low", notes: "Test notes", project:0, status: "done"}]
}];

let currentId = 0;
let currentTaskId = 1;

function openModal (event){

 let overlay = document.querySelector(".overlay");
 console.log(event.target.id);
 overlay.classList.remove("hidden"); 

 if(event.target.id == "task" || event.target.id == "edit" ){
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
 
 console.log(event.target.dataset.projectId);
 console.log(event.target.dataset.taskId);
 myProjects[event.target.dataset.projectId].tasks.pop([event.target.dataset.taskId]);
 renderTasks();

}

function editTask (event){
 console.log(event.target.id);
 openModal(event);

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

console.log(taskProject);

myProjects[taskProject].tasks.push(newTask);
console.log(myProjects);


renderTasks();
closeModal();
};

function renderTasks(){
 let taskContainer = document.querySelector(".task-container");

 taskContainer.innerHTML = "";

 for (let i = 0; i <myProjects.length; i++){
  for (let j = 0; j <myProjects[i].tasks.length; j++){
 
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

 const title = document.createElement("p");
 title.innerText = myProjects[i].tasks[j].title;

 const dueDate = document.createElement("p");
 dueDate.innerText = myProjects[i].tasks[j].dueDate;


 const priority =document.createElement("p");
 priority.innerText = myProjects[i].tasks[j].priority;

 const status =document.createElement("p");
 status.innerText = myProjects[i].tasks[j].status;


 const editBtn = document.createElement("button");
 editBtn.setAttribute('id',"edit");
 editBtn.dataset.projectId = myProjects[i].tasks[j].project;
 editBtn.dataset.taskId = myProjects[i].tasks[j].id;
 editBtn.innerText = "View/Edit";
 editBtn.addEventListener('click',editTask)

 const deleteBtn = document.createElement("button");
 deleteBtn.setAttribute('id',"delete");
 deleteBtn.dataset.projectId = myProjects[i].tasks[j].project;
 deleteBtn.dataset.taskId = myProjects[i].tasks[j].id;
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

 projectItem.addEventListener('click',renderTasks);

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
 updateProjectOptions();
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

renderProjects();
renderTasks();

})();
 




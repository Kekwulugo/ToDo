// Control Modals



//create project Library 
let myTasks = [];

class Tasks{
 constructor(title,dueDate, priority,notes, project){
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.project = project;

 }
};

let taskSubmit = document.querySelector(".task-submit");

taskSubmit.addEventListener('click', function(event){
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

taskModal.classList.add('hidden');
overlay.classList.add('hidden');
 
});



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

let myProjects = [];

class Projects{
 constructor (index, projectTitle, tasks){
  this.id = index;
  this.projectTitle = projectTitle;
  this.tasks = tasks;
 }
};

let projectSumbit = document.querySelector(".project-submit")
let currentId = 0;

projectSumbit.addEventListener('click', function(event){
 event.preventDefault();

 let Title = document.querySelector("#project-title").value;

 currentId++;

 let newProject = new Projects(currentId,Title,myTasks);
 myProjects.push(newProject);

 renderProjects();

 console.log(myProjects);
 
});




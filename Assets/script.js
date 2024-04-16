//Control Form Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const taskSubmit = document.querySelector(".btn-submit");

//create project Library 
let myTasks = [];

openModalBtn.addEventListener('click', function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');

});

closeModalBtn.addEventListener('click',function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
})


class Tasks{
 constructor(title,dueDate, priority,notes, project){
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.project = project;

 }
}

taskSubmit.addEventListener('click', function(event){
 event.preventDefault();

 //get input details
 let taskTitle = document.querySelector("#title").value;
 let taskDueDate = document.querySelector("#due-date").value;
 let taskPriority = document.querySelector("#priority").options.selectedIndex;
 let taskNotes = document.querySelector("#notes").value;
 //let taskProject = document.querySelector("#project").options.selectedIndex;

let newTask = new Tasks(taskTitle,taskDueDate,"",taskNotes,"");
console.log(newTask);

myTasks.push(newTask);
 

});



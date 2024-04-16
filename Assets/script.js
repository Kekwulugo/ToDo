//Control Form Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

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



let task1 = new Tasks("Chores","Today","Medium","Do not forget to do this!","Home");

let Projects = [];
Projects.push(task1);

console.log(task1);
console.log(Projects);


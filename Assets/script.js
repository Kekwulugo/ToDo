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


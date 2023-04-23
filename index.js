
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');


let tasks = [];


function addTask() {
  
  const task = taskInput.value;
  
  tasks.push(task);
  
  const taskLi = document.createElement('li');
  taskLi.innerText = task;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
 
  deleteBtn.addEventListener('click', () => {
    
    tasks.splice(tasks.indexOf(task), 1);
   
    taskLi.remove();
  });
  
  taskLi.appendChild(deleteBtn);
  
  taskList.appendChild(taskLi);
 
  taskInput.value = '';
}

addTaskBtn.addEventListener('click', addTask);

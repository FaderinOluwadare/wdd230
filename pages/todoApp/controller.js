import view from './view.js';
import task, {taskList}from './model.js';

const taskLt = new taskList();

const item = document.querySelector(".item");
function check(event){
			let me = document.getElementById(event.id);
			
			if (event.checked===true) { 
			 	
				me.style.backgroundColor = 'green'
				taskLt.setComplete(event.id);
				
			}else{
				
				me.style.backgroundColor = ''
				
				taskLt.setNotComplete(event.id);
				
			}
		}

		
function removeTodo( event ){
	taskLt.deleteElement(event);
	view(taskLt.allTask());
}


document.querySelector(".todo-itm").addEventListener("click", a, false);
function a(params) {
	if (params.target.tagName === "BUTTON") {
		const tak = taskLt.allTask()
		for (let i = 0; i < tak.length; i++) {
			
			if (tak[i].task === document.querySelectorAll(`p`)[params.target.id].innerHTML){
				console.log(tak[i].task)
				removeTodo(i);
			}
			
		}
		

	}
	else if (params.target.tagName === "INPUT") {
		check(params.target);

	}
}


		let AlButton = document.querySelector('.All');
		const completeButton = document.querySelector('.completed');
		const activeButton = document.querySelector('.active');



		completeButton.addEventListener('click',function(){
			console.log(taskLt.taskCompleted().length)
			if (taskLt.taskCompleted().length == 0) {
				document.querySelector(".todo-itm").innerHTML =`<div align="center" style="color: #3c3625">
			<h1 class="abd" align = "center">No item completed!!! Add new todo's</h1>
		</div>`
			}else{view(taskLt.taskCompleted());}
		});
		activeButton.addEventListener('click',function(){
			console.log(taskLt.taskActive().length);
			if (taskLt.taskActive().length == 0) {
				document.querySelector(".todo-itm").innerHTML = `<div align="center" style="color: #3c3625">
			<h1 class="abd" align = "center">No active item yet!!! Add new todo's</h1>
		</div>`
			} else { view(taskLt.taskActive()); }
			//view(taskLt.taskActive());
		});
		AlButton.addEventListener('click', function(){
			console.log(taskLt.allTask().length);
			if (taskLt.allTask().length == 0) {
				document.querySelector(".todo-itm").innerHTML = `<div align="center" style="color: #3c3625">
			<h1 class="abd" align = "center">No item yet!!! Add new todo's</h1>
		</div>`
			} else { view(taskLt.allTask()); }
		
			//view(taskLt.allTask());
		});
		

		
		item.addEventListener('submit',function(event){
			event.preventDefault();

			let ade =  document.getElementById('item').value;
			let Task = new task(ade);
			taskLt.add(Task);
			view(taskLt.allTask());
			document.getElementById('item').value = "";
			
			//console.log(taskLt.taskActive());
		});

export default class task{
	constructor(task, completed = false){
				this.task = task;
				this.completed = completed;
				//this.id = id
			}
		}


export		class taskList{
			constructor(){
				this.taskList = [];
			}
			add(task){

				this.taskList.push(task);
			}

			taskCompleted(){
				return this.taskList.filter(task =>task.completed == true);
			}

			taskActive(){
				return this.taskList.filter(task =>task.completed === false);
			}
			allTask (){return this.taskList;}
			setComplete( id ){
				this.taskList[id].completed = true;
			}
			setNotComplete( id ){
				this.taskList[id].completed =false;
			}
			deleteElement( id ){
				this.taskList.splice( id, 1 );
				

			}
		}
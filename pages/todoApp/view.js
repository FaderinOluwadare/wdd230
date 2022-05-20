
export default	function view(ListItems){
			if (ListItems.length === 0) {
				let todo = document.querySelector(".todo-itm");
			    todo.innerHTML = "";
			}
			else{
				    let todo = document.querySelector(".todo-itm");
			     	todo.innerHTML = "";
			     	
				for (var i = 0 ; i < ListItems.length ; i++)
				{
					
					
					//console.log(ListItems[i].task);
					let div = document.createElement('div');
					let input = document.createElement('input');
					let button = document.createElement('button');
					let text = document.createElement('p');
					button.appendChild(document.createTextNode('X'));
					text.appendChild(document.createTextNode(ListItems[i].task));
					input.setAttribute('type','checkbox');
					div.setAttribute('id',i);
					input.setAttribute('id',i);
					button.setAttribute('id',i);
					text.setAttribute('class',i);
					button.style.backgroundColor = 'red'
					div.style.margin ='2px';
					div.backgroundColor ='#2b1b17'
					div.appendChild(input);
					div.appendChild(text);
					div.appendChild(button);
					
					if (ListItems[i].completed == true) {
						input.checked = true;
						
						div.style.backgroundColor ="green";
			
						}

					todo.appendChild(div)
					todo.style.margin = 'auto';
					todo.style.width= '600px'
								
				}
			
			}
		}
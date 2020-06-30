


function addTask() {

	var task = document.getElementById("todotask").value.trim();
	var list = document.getElementById("todolist");
	if(task == "" || task == null) {
		alert("Please enter a task");
		return;
	}
	var html = '<li>\
				<input type="checkbox" class="task" onchange="strike(this,false)">\
				<label class="strikeThis">\
					' + task + '\
				</label>\
				<button class="remove" onclick="remove(this)">x</button>\
			</li>';
	list.insertAdjacentHTML('beforeend',html);
	
}

function strike(obj,isAll) {

	if(isAll == true) {
		var list = obj.parentNode.parentNode.children;
		
		var i = 2;
		while(i < list.length) {

			if(obj.checked) {
				console.log(list[i].children[0].checked);
				list[i].children[0].checked = true;
				list[i].children[1].style.textDecoration = "line-through";
				list[i].children[1].style.color = "red";

				
			}
			else {
				list[i].children[0].checked = false;
				list[i].children[1].style.textDecoration = "none";
				list[i].children[1].style.color = "black";
			}
			i++;
		}
		
	}
	else {

		if(obj.checked == true) {
			obj.parentNode.children[1].style.textDecoration = "line-through";
			obj.parentNode.children[1].style.color = "red";
		}
		else{
			obj.parentNode.children[1].style.textDecoration = "none";
			obj.parentNode.children[1].style.color =  "black";
		}
	}
	

}


function remove(obj) {
	obj.parentNode.style.display = "none";
}


function removeChecked() {

	var list = document.getElementById("todolist").children;
	var i = 2;

	while(i < list.length) {

		if(list[i].children[0].checked) {
			list[i].style.display = "none";
		}
		i++;
	}

	list[0].children[0].checked = false;
}

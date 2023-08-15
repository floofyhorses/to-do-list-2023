var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.createElement("li");



function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var buttonDelete = document.createElement("button");
	var buttonComplete = document.createElement("button");
	buttonDelete.classList.add("delete");
	buttonDelete.textContent = "Delete";
	buttonComplete.classList.add("done");
	buttonComplete.classList.add("noline");
	buttonComplete.textContent = "Done";
	li.appendChild(buttonDelete);
	li.appendChild(buttonComplete);
	ul.appendChild(li);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement(); 
	}
	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function toggleDone(event) {
    if (event.target.classList.contains("done")) {
        event.target.closest("li").classList.toggle("done");
    }
}



function removeListItem(event) {
	if(event.target.classList.contains("delete")) {
		event.target.closest("li").remove();
	}

}


ul.addEventListener("click", toggleDone);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeypress);

ul.addEventListener("click", removeListItem); 


 //This is my final complete version!//
//  const inputBox=document.getElementById("input-box");
//  const listContainer = document.getElementById("list-container");

//  function  addTask(){
//     if (inputBox.value === '') {
//         alert("You must write something!");    }
//  else{
//     let li=document.createElement("li");
//     li.innerHTML=inputBox.value;
//     listContainer.appendChild(li);

//     let span=document.createElement("span");
//     span.innerHTML='\u00d7';
//     li.appendChild(span);
// }
// inputBox.value="";
// }

// listContainer.addEventListener("click",function(e){
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("checked");

//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//     }},false);

let input = document.getElementById("nameInput");
let list = document.getElementById("userList");

let users = [];

function render() {
    list.innerHTML = "";
    users.forEach((user, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
                <span class="user-name">${user}</span>
                <button onclick="editBtn(${index})">Edit</button>
                <button onclick="deleteBtn(${index})">Delete</button>
                <div class="edit-container" style="display: none;">
                    <input type="text" class="edit-input" value="${user}" />
                    <button onclick="saveEdit(${index})">Save</button>
                    <button onclick="cancelEdit(${index})">Cancel</button>
                </div>
            `;
        list.appendChild(li);
    });
}

function add() {
    if (input.value !== "") {
        let ism = input.value.trim();
        users.push(ism);
        input.value = "";
        render();
    }
}

function editBtn(index) {
    let li = list.children[index];
    let editContainer = li.querySelector('.edit-container');
    let userName = li.querySelector('.user-name');

    // Hide the user name and show the input for editing
    userName.style.display = 'none';
    editContainer.style.display = 'inline';

    // Focus on the input field for easier editing
    let editInput = li.querySelector('.edit-input');
    editInput.focus();
}

function saveEdit(index) {
    let li = list.children[index];
    let editInput = li.querySelector('.edit-input');

    if (editInput.value.trim() !== "") {
        users[index] = editInput.value.trim();
    }
    render();
}

function cancelEdit(index) {
    render();
}

function deleteBtn(index) {
    users.splice(index, 1);
    render();
}
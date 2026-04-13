let users = [
  { id: 1, name: "Ali", email: "ali@gmail.com", role: "Frontend" },
  { id: 2, name: "Sara", email: "sara@gmail.com", role: "Designer" },
  { id: 3, name: "Ahmed", email: "ahmed@gmail.com", role: "Backend" }
];

const tableBody = document.querySelector("#userTable tbody");
const inputId=document.getElementById('input-id')
const inputName=document.getElementById('input-name')
const inputEmail=document.getElementById('input-email')
const inputRole=document.getElementById('input-role')


let editId = null;
function editUser(id){
  editId = id;
  renderTable();
}

function renderTable() {
  tableBody.innerHTML = "";

  users.forEach(user => {
    
    if(editId == user.id){
      // 🔥 EDIT MODE
      const row = `
        <tr>
          <td>${user.id}</td>
          <td><input id="edit-name" value="${user.name}" /></td>
          <td><input id="edit-email" value="${user.email}" /></td>
          <td><input id="edit-role" value="${user.role}" /></td>
          <td>
            <button onclick="saveUser(${user.id})">Save</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;

    } else {
      // NORMAL MODE
      const row = `
        <tr>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>
            <button onclick="editUser(${user.id})">Edit</button>
             <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    }

  });
}

renderTable();

function add(){
    let inputForm={id:inputId.value, name: inputName.value, email: inputEmail.value, role: inputRole.value }
    users.push(inputForm)
    console.log(inputForm)
    console.log(users)
    renderTable();
}
function deleteUser(id) {
  users = users.filter(user => user.id !== id);
  renderTable();
}



function saveUser(id){
  const updatedName = document.getElementById("edit-name").value;
  const updatedEmail = document.getElementById("edit-email").value;
  const updatedRole = document.getElementById("edit-role").value;

  users = users.map(user => {
    if(user.id == id){
      return {
        ...user,
        name: updatedName,
        email: updatedEmail,
        role: updatedRole
      };
    }
    return user;
  });

  editId = null; // exit edit mode
  renderTable();
}
function onReady() {
let toDos = [];
const addToDoForm = document.getElementById('addToDoForm');
let id = 0;

function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

     toDos.push({
       title: newToDoText.value,
       complete: false,
       id: id
     });
     newToDoText.value = '';
     id++;
     renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      deleteButton.setAttribute("id", toDo.id);
      newLi.appendChild(deleteButton);



      deleteButton.addEventListener('click', function(event){
        //let temptoDos;
        let elementid = Number(this.id);
        console.log(elementid);

        const result = toDos.filter(todo => todo.id != elementid);

        toDos = result;

       renderTheUI();
     })

    });
  }

 addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });

 renderTheUI();

}

window.onload = function() {
  onReady();
};

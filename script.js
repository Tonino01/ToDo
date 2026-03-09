const todoList = [

    {
        etichetta: "comprare i biscotti",
        completato: false,
        order: 1,

    },
    {

        etichetta: "comprare il latte",
        completato: false,
        order: 2,

    }


];



const listaToDo = document.getElementById("contenitore");

const btnAdd = document.getElementById("btnAdd");

const inputToDo = document.getElementById("input");


todoList.forEach(
    function(item){

        //console.log(item);
        elemento(item);
        

    }


)

btnAdd.addEventListener("click", addItem);

function addItem(){

    const newTodo = {

        etichetta: inputToDo.value,
        completato: false,
        order: 1,


    }
    todoList.push(newTodo);

    disegnaElenco();


}


function elemento(item){

    const elementoDiv = document.createElement("div");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    const buttonup = document.createElement("button");
    const buttondown = document.createElement("button");
    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");
    const imgUp = document.createElement("img");
    const imgDown = document.createElement("img");
    const imgEdit = document.createElement("img");
    const imgDelete = document.createElement("img");


    imgUp.src = "https://img.icons8.com/ios-glyphs/30/000000/up--v1.png";
    imgDown.src = "https://img.icons8.com/ios-glyphs/30/000000/down--v1.png";
    imgEdit.src = "https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png";
    imgDelete.src = "https://img.icons8.com/ios-glyphs/30/000000/delete--v1.png";



    elementoDiv.classList.add("task");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.id = "checkbox" + item.order;

    label.innerText = item.etichetta;
    label.setAttribute("for", checkbox.id);

    
    buttonup.classList.add("up");
    buttonup.append(imgUp);

    
    buttondown.classList.add("down");
    buttondown.append(imgDown);

    buttonEdit.classList.add("edit");
    buttonEdit.append(imgEdit);

    buttonDelete.classList.add("delete");
    buttonDelete.append(imgDelete);
    



    elementoDiv.append(checkbox);
    elementoDiv.append(label);
    elementoDiv.append(buttonup);
    elementoDiv.append(buttondown);
    elementoDiv.append(buttonEdit);
    elementoDiv.append(buttonDelete);
    

    listaToDo.append(elementoDiv);
}
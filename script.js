const newToDoInput = document.getElementById("newToDoInput");
const todoList = document.getElementById("todoList");
const addToDoBtn = document.getElementById("add");
addToDoBtn.addEventListener("click", () => {
  const newToDoText = newToDoInput.value;
  if (newToDoText !== "") {
    const newToDoItem = document.createElement("li");
    newToDoItem.innerText = newToDoText;
    const deleteToDoBtn = document.createElement("button");
    deleteToDoBtn.innerText = "X";
    deleteToDoBtn.classList.add("delete-to-do-btn");
    deleteToDoBtn.addEventListener("click", function () {
      newToDoItem.remove();
    });
    newToDoItem.appendChild(deleteToDoBtn);
    todoList.appendChild(newToDoItem);
    newToDoInput.value = "";
  }
});

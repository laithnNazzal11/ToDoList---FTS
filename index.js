let idTask;
let workList;
async function fetchData() {
  console.log("geet datta")
  const response = await fetch("https://dummyjson.com/todos");
  const data = await response.json();
  const toDoList = data.todos;
  // let allTasks = toDoList
  localStorage.setItem("allTask", JSON.stringify(toDoList));
}

// fetchData()
async function sendData(data) {
  try {
    const response = await fetch("https://example.com/api/resource", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    console.log("Data sent successfully");
  } catch (error) {
    console.error("Error sending data:", error.message);
  }
}
async function deleteData(id) {
  try {
    const response = await fetch(`https://example.com/api/resource/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Failed to delete data");
    }

    console.log("Data deleted successfully");
  } catch (error) {
    console.error("Error deleting data:", error.message);
  }
}
async function editData(id, newData) {
  try {
    const response = await fetch(`https://example.com/api/resource/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) {
      throw new Error("Failed to edit data");
    }

    console.log("Data edited successfully");
  } catch (error) {
    console.error("Error editing data:", error.message);
  }
}


const getDataFromLocal = () => {
  let data = localStorage.getItem("allTask");
  data ? (workList = JSON.parse(data)) : console.log("thanks");
};

const calculateNumTasks = () => {
  getDataFromLocal();
  let showToDoList = document.getElementById("numberTask");
  let i = 0;

  workList.map((item) => {
    i++;
  });
  showToDoList.innerHTML = `<span>#</span>Tasks:<b>${i}</b>`;
};

const ShowToDo = () => {
  getDataFromLocal();
  document.getElementById("inputTextSearch").value = ""
  console.log(workList);
  let showToDoList = document.getElementById("theToDoListContainer");
  let showClear = document.getElementById("clearButtonDiv")
  showClear.style.display="none"
  showToDoList.innerHTML = workList
    .map((item) => {
      return `<div class="theToDoList">
      
         
       <div class="${
         item.completed == false ? `TitleToDO` : `TitleToDOCompleted`
       }" id="${item.id}">${item.todo}
       </div>
       
       <div class="icons">
       <i class="fa-solid fa-pen-to-square" onclick="openEditTask(${
         item.id
       })"></i>
       <i class="${
         item.completed == true
           ? `fa-solid fa-rectangle-xmark`
           : `fa-solid fa-checkfa-solid fa-thumbs-up`
       }" onclick="toggleCompletedAtAll(${item.id})"></i>
       <i class="fa-solid fa-trash-can" onclick="deletTask(${item.id})"></i>
       </div>
     </div>`;
    })
    .join("");
  calculateNumTasks();

  let all = document.getElementById("all");
  let Completed = document.getElementById("Completed");
  let NotCompleted = document.getElementById("NotCompleted");
  let searchInput = document.getElementById("searchButton")
  searchInput.style.borderBottom = "none";
  searchInput.style.backgroundColor = "#7258e4";
  all.style.borderBottom = " 5px solid #fff";
  all.style.backgroundColor = "#9580f0";
  Completed.style.borderBottom = " none";
  Completed.style.backgroundColor = "#7258e4";
  NotCompleted.style.borderBottom = "none";
  NotCompleted.style.backgroundColor = "#7258e4";


  
};

const showCompletedTask = () => {
  getDataFromLocal();
  let showClear = document.getElementById("clearButtonDiv")
  showClear.style.display="flex"
  document.getElementById("inputTextSearch").value = ""
  let showToDoList = document.getElementById("theToDoListContainer");
  // console.log(toDoList); // Log the response to see its structure
  let showToDoListNumber = document.getElementById("numberTask");
  let i = 0;
  showToDoList.innerHTML = workList
    .map((item) => {
      return item.completed == true
        ? `<div class="theToDoList" >
          <div class="TitleToDOCompleted">${item.todo}</div>
          <div class="icons">
            <i class="fa-solid fa-pen-to-square" onclick="openEditTask(${item.id})"></i>
            <i class="fa-solid fa-rectangle-xmark" onclick="toggleCompletedAtCompleted(${item.id})"></i>
            <i class="fa-solid fa-trash-can" onclick="deletTask(${item.id})"></i>
          </div>
        </div>`
        : ``;
    })
    .join("");

  workList.map((item) => {
    if (item.completed == true) {
      i++;
    }
  });

  if(i==0) {
    if (i ==0){
      showToDoList.innerHTML = `<div class="theToDoList"> there are no todos Completed!</div>`
    }

  }
  showToDoListNumber.innerHTML = `<span>#</span>Tasks:<b>${i}</b>`;
  let all = document.getElementById("all");
  let Completed = document.getElementById("Completed");
  let NotCompleted = document.getElementById("NotCompleted");

  all.style.borderBottom = "none";
  all.style.backgroundColor = "#7258e4";

  Completed.style.borderBottom = "  5px solid #fff";
  Completed.style.backgroundColor = "#9580f0";

  NotCompleted.style.borderBottom = "none";
  NotCompleted.style.backgroundColor = "#7258e4";
  let searchInput = document.getElementById("searchButton")
  searchInput.style.borderBottom = "none";
  searchInput.style.backgroundColor = "#7258e4";
};

const showNotCompletedTask = () => {
  getDataFromLocal();
  let showToDoList = document.getElementById("theToDoListContainer");
  document.getElementById("inputTextSearch").value = ""
  let showClear = document.getElementById("clearButtonDiv")
  showClear.style.display="none"
  // console.log(toDoList); // Log the response to see its structure
  let showToDoListNumber = document.getElementById("numberTask");
  let i = 0;
  showToDoList.innerHTML = workList
    .map((item) => {
      return item.completed == false
        ? `<div class="theToDoList" >
              <div class="TitleToDO">${item.todo}</div>
              <div class="icons">
                <i class="fa-solid fa-pen-to-square" onclick="openEditTask(${item.id})"></i>
                <i class="fa-solid fa-checkfa-solid fa-thumbs-up" onclick="toggleCompletedAtNotCompleted(${item.id})"></i>
                <i class="fa-solid fa-trash-can" onclick="deletTask(${item.id})"></i>
              </div>
            </div>`
        : ``;
    })
    .join("");

  workList.map((item) => {
    if (item.completed != true) {
      i++;
    }
  });
  showToDoListNumber.innerHTML = `<span>#</span>Tasks:<b>${i}</b>`;
  let all = document.getElementById("all");
  let Completed = document.getElementById("Completed");
  let NotCompleted = document.getElementById("NotCompleted");

  all.style.borderBottom = "none";
  all.style.backgroundColor = "#7258e4";

  Completed.style.borderBottom = "none";
  Completed.style.backgroundColor = "#7258e4";

  NotCompleted.style.borderBottom = "  5px solid #fff";
  NotCompleted.style.backgroundColor = "#9580f0";
  let searchInput = document.getElementById("searchButton")
  searchInput.style.borderBottom = "none";
  searchInput.style.backgroundColor = "#7258e4";
};

const search = () => {
  getDataFromLocal()
  let data = document.getElementById("inputTextSearch")
  let toDoSearch = data.value
  console.log(toDoSearch)
  let showClear = document.getElementById("clearButtonDiv")
  showClear.style.display="none"
  let showToDoList = document.getElementById("theToDoListContainer");
  if (toDoSearch.length ==0){
    showToDoList.innerHTML = `<div class="theToDoList"> the text search is empty!</div>`
    let showToDoListNumber = document.getElementById("numberTask");
    showToDoListNumber.innerHTML = `<span>#</span>Tasks:<b>0</b>`;
  }
  else {

 
  showToDoList.innerHTML = workList
    .map((item) => {
      if(item.todo.includes(toDoSearch)){

    
      return `<div class="theToDoList">
      
         
       <div class="${
         item.completed == false ? `TitleToDO` : `TitleToDOCompleted`
       }" id="${item.id}">${item.todo}
       </div>
       
       <div class="icons">
       <i class="fa-solid fa-pen-to-square" onclick="openEditTask(${
         item.id
       })"></i>
       <i class="${
         item.completed == true
           ? `fa-solid fa-rectangle-xmark`
           : `fa-solid fa-checkfa-solid fa-thumbs-up`
       }" onclick="toggleCompletedAtSearch(${item.id})"></i>
       <i class="fa-solid fa-trash-can" onclick="deletTask(${item.id})"></i>
       </div>
     </div>`;
    }
    })
    .join("");
 
    let i =0;
    workList.map((item) => {
      if(item.todo.includes(toDoSearch)){
        i++;
      }


    });
    if (i ==0){
      showToDoList.innerHTML = `<div class="theToDoList"> there are no todos!</div>`
      let showToDoListNumber = document.getElementById("numberTask");
      showToDoListNumber.innerHTML = `<span>#</span>Tasks:<b>0</b>`;
    }
    let showToDoListNumber = document.getElementById("numberTask");

    showToDoListNumber.innerHTML = `<span>#</span>Tasks:<b>${i}</b>`;
  }
  let all = document.getElementById("all");
  let Completed = document.getElementById("Completed");
  let NotCompleted = document.getElementById("NotCompleted");
  all.style.borderBottom = "none";
  all.style.backgroundColor = "#7258e4";
  Completed.style.borderBottom = "none";
  Completed.style.backgroundColor = "#7258e4";
  NotCompleted.style.borderBottom = "none";
  NotCompleted.style.backgroundColor = "#7258e4";
  let searchInput = document.getElementById("searchButton")
  searchInput.style.borderBottom = " 5px solid #fff";
  searchInput.style.backgroundColor = "#9580f0";
};

const clearCompleted = () => {
  getDataFromLocal();
  console.log(workList);
  const newArray = workList.filter((item) => {
    return item.completed == false
  });
  localStorage.setItem("allTask", JSON.stringify(newArray));
  calculateNumTasks();
  showCompletedTask();
  

}

ShowToDo();

const addTask = () => {
  const inputElement = document.getElementById("addNewTask");
  let todo = inputElement.value;
  console.log(todo);
  let id = parseInt(localStorage.getItem("id"));
  getDataFromLocal();
  // console.log(workList)
  let pushNew = {
    id: id,
    todo: todo,
    completed: false,
  };
  if (todo.length > 0) {
    console.log(todo);
    workList.unshift(pushNew);
  } else {
    AddEmptyToDo();
  }
  localStorage.setItem("allTask", JSON.stringify(workList));
  id++;
  localStorage.setItem("id", id.toString());
  calculateNumTasks();
  ShowToDo();
  inputElement.value = "";
  sendData(pushNew)
};

const deletTask = (id) => {
  getDataFromLocal();
  console.log(workList);
  const newArray = workList.filter((item) => {
    return id != item.id;
  });
  localStorage.setItem("allTask", JSON.stringify(newArray));
  calculateNumTasks();
  ShowToDo();
  deleteData(id)
};

const openEditTask = (id) => {
  idTask = id;
  const editButton = document.getElementById("screenedit");
  const textInput = document.getElementById("inputTextEdit");
  editButton.style.display = "flex";
  let workList;
  let data = localStorage.getItem("allTask");
  data ? (workList = JSON.parse(data)) : console.log("thanks");
  let textToDo;
  workList.map((item) => {
    if (item.id == id) {
      textToDo = item.todo;
    }
  });
  textInput.value = textToDo;
};

const editTask = () => {
  getDataFromLocal();
  let todoEdit = document.getElementById("inputTextEdit");
  let valueEditToDo = todoEdit.value;
  console.log(valueEditToDo);
  workList.map((item) => {
    if (item.id == idTask) {
      item.todo = valueEditToDo;
    }
  });
  localStorage.setItem("allTask", JSON.stringify(workList));
  ShowToDo();
  closeEditTask();
  editData(idTask, valueEditToDo)
};

const closeEditTask = () => {
  const editButton = document.getElementById("screenedit");
  editButton.style.display = "none";
};

const AddEmptyToDo = () => {
  const editButton = document.getElementById("inputNull");
  editButton.style.display = "flex";
  setTimeout(() => {
    editButton.style.display = "none";
  }, 1100);
};

const toggleCompletedAtAll = (id) => {
  getDataFromLocal();

  console.log(workList);
  const newArray = workList.map((item) => {
    if (item.id == id) {
      item.completed = !item.completed;
    }
    return item;
  });
  localStorage.setItem("allTask", JSON.stringify(newArray));
  calculateNumTasks();
  ShowToDo();
};

const toggleCompletedAtCompleted = (id) => {
  getDataFromLocal();

  console.log(workList);
  const newArray = workList.map((item) => {
    if (item.id == id) {
      item.completed = !item.completed;
    }
    return item;
  });
  localStorage.setItem("allTask", JSON.stringify(newArray));
  calculateNumTasks();
  showCompletedTask();
};

const toggleCompletedAtNotCompleted = (id) => {
  getDataFromLocal();

  console.log(workList);
  const newArray = workList.map((item) => {
    if (item.id == id) {
      item.completed = !item.completed;
    }
    return item;
  });
  localStorage.setItem("allTask", JSON.stringify(newArray));
  calculateNumTasks();
  showNotCompletedTask();
};

const toggleCompletedAtSearch = (id) => {
  getDataFromLocal();

  console.log(workList);
  const newArray = workList.map((item) => {
    if (item.id == id) {
      item.completed = !item.completed;
    }
    return item;
  });
  localStorage.setItem("allTask", JSON.stringify(newArray));
  search();
};






// mouse effect //
const shadowCursor = document.getElementById("shadowCursor");

document.addEventListener("mousemove", (event) => {
  shadowCursor.style.display = "block";
  shadowCursor.style.left = event.pageX + 10 + "px";
  shadowCursor.style.top = event.pageY - 10 + "px";
});

document.addEventListener("mouseleave", () => {
  shadowCursor.style.display = "none";
});
// mouse effect //

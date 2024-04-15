async function ShowToDo() {
  const response = await fetch("https://dummyjson.com/todos");
  const data = await response.json();
  const toDoList = data.todos;
  let showToDoList = document.getElementById("theToDoListContainer");
  // console.log(toDoList); // Log the response to see its structure

  showToDoList.innerHTML = toDoList.map((item) => {
    return item.completed == false
      ? `<div class="theToDoList">
       <div class="TitleToDO" id="${item.id}">${item.todo}</div>
       <div class="icons">
       <i class="fa-solid fa-pen-to-square" onclick="editTask(${item.id})"></i>
       <i class="fa-regular fa-star" onclick="toggleCompleted(${item.id})"></i>
       <i class="fa-solid fa-trash-can" onclick="DeletTask(${item.id})"></i>
       </div>
     </div>`
      : `<div class="theToDoList" >
        <div class="TitleToDOCompleted">${item.todo}</div>
        <div class="icons">
          <i class="fa-solid fa-pen-to-square" onclick="editTask(${item.id})"></i>
          <i class="fa-regular fa-star" onclick="toggleCompleted(${item.id})"></i>
          <i class="fa-solid fa-trash-can" onclick="DeletTask(${item.id})"></i>
        </div>
      </div>`;
  }).join('');
  calculateNumTasks()
  let all = document.getElementById("all")
  let Completed = document.getElementById("Completed")
  let NotCompleted = document.getElementById("NotCompleted")

  all.style.borderBottom=" 5px solid #fff"
  all.style.backgroundColor="#9580f0"

  Completed.style.borderBottom=" none"
  Completed.style.backgroundColor="#7258e4"

  NotCompleted.style.borderBottom="none"
  NotCompleted.style.backgroundColor="#7258e4"
}
// border-bottom: 5px solid #fff;
// background-color: #9580f0;
//
// background-color: #7258e4; not hover


ShowToDo();

async function DeletTask(id) {}
async function editTask(id) {}
async function toggleCompleted(id) {
  // Fetch the current todo list
  // Find the todo item with the specified id
  // If the todo item is found, toggle its completed status and send a PUT request to update it
  // Toggle the completed status
  // Prepare the request options
  // Send the PUT request
  console.log(id)
    
}
async function editTask(id,data){}

async function calculateNumTasks(){
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    const toDoList = data.todos;
    let showToDoList = document.getElementById("numberTask");
    let i=0;
    toDoList.map((item)=>{
        i++
    })
    showToDoList.innerHTML = `<span>#</span>Tasks:${i}`


}

async function showCompletedTask(

){
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    const toDoList = data.todos;
    let showToDoList = document.getElementById("theToDoListContainer");
    // console.log(toDoList); // Log the response to see its structure
    let showToDoListNumber = document.getElementById("numberTask");
    let i =0;
    showToDoList.innerHTML = toDoList.map((item) => {
        
      return item.completed == true
      
        ? (
         `<div class="theToDoList" >
          <div class="TitleToDOCompleted">${item.todo}</div>
          <div class="icons">
            <i class="fa-solid fa-pen-to-square" onclick="editTask(${item.id})"></i>
            <i class="fa-regular fa-star" onclick="completedOrNot(${item.id})"></i>
            <i class="fa-solid fa-trash-can" onclick="DeletTask(${item.id})"></i>
          </div>
        </div>`) :
        ``
        
    }).join('');

   toDoList.map((item) => {
        
        if(item.completed == true){
            i++
        } 
        
        
          
          
      })
    showToDoListNumber.innerHTML = `<span>#</span>Tasks:${i}`
    let all = document.getElementById("all")
    let Completed = document.getElementById("Completed")
    let NotCompleted = document.getElementById("NotCompleted")
  
    all.style.borderBottom="none"
    all.style.backgroundColor="#7258e4"
  
    Completed.style.borderBottom="  5px solid #fff"
    Completed.style.backgroundColor="#9580f0"
  
    NotCompleted.style.borderBottom="none"
    NotCompleted.style.backgroundColor="#7258e4"

}

async function showNotCompletedTask(){

        const response = await fetch("https://dummyjson.com/todos");
        const data = await response.json();
        const toDoList = data.todos;
        let showToDoList = document.getElementById("theToDoListContainer");
        // console.log(toDoList); // Log the response to see its structure
        let showToDoListNumber = document.getElementById("numberTask");
        let i =0;
        showToDoList.innerHTML = toDoList.map((item) => {
          return item.completed == false
            ? 
             `<div class="theToDoList" >
              <div class="TitleToDO">${item.todo}</div>
              <div class="icons">
                <i class="fa-solid fa-pen-to-square" onclick="editTask(${item.id})"></i>
                <i class="fa-regular fa-star" onclick="completedOrNot(${item.id})"></i>
                <i class="fa-solid fa-trash-can" onclick="DeletTask(${item.id})"></i>
              </div>
            </div>` :
            ``
        }).join('');

         toDoList.map((item) => {
            if(item.completed != true){
                i++
            } 
        
          })
          showToDoListNumber.innerHTML = `<span>#</span>Tasks:${i}`
          let all = document.getElementById("all")
          let Completed = document.getElementById("Completed")
          let NotCompleted = document.getElementById("NotCompleted")
        
          all.style.borderBottom="none"
          all.style.backgroundColor="#7258e4"
        
          Completed.style.borderBottom="none"
          Completed.style.backgroundColor="#7258e4"
        
          NotCompleted.style.borderBottom="  5px solid #fff"
          NotCompleted.style.backgroundColor="#9580f0"


}
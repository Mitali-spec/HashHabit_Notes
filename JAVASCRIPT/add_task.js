//STORED EVERY ID IN VARIABLE
let add_btn = document.getElementById("add_btn"); 
let add_task = document.getElementById("add_task"); 
let enter_task = document.getElementById("enter_task");
 let save = document.getElementById("save"); 
 let task_list = document.getElementById("task_list");




    //SAVE TASK

save.addEventListener("click", function () {
    let task = enter_task.value; //enter_task IS ID OF INPUT

    if (task == "") {
        alert("ENTER A TASK");
        return;
    }

    // Create new task
    let li = document.createElement("li"); //WE CREATED A LIST ELEMENT LI
    li.innerText = task;// TASK HAS VALUE OF TASK WE ENTERED. AND WE STORE IT IN LI

     // Add li to list
    task_list.appendChild(li); //LI IS ADDED TO LIST

    // Create delete button
    let del_btn = document.createElement("button"); 
    del_btn.innerText = "❌";

    // Delete functionality
    del_btn.addEventListener("click", function () {
        li.remove();
    });

    // Add button inside li
    li.appendChild(del_btn); //DEL_BTN IS ADDED TO LI

   

    // Clear input
    enter_task.value = "";
});
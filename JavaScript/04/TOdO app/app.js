let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quitting the app...");
        break;
    }

    if(req == "list"){
        console.log("----------------");
        for(task of todo){
            console.log(task);
        }
        console.log("----------------");
    } else if(req == "add"){
        let newTask = prompt("Add new task here...");
        todo.push(newTask);
        console.log(`${newTask} - Task Added successfully !!`);
    } else if(req == "delete"){
        let delTask = prompt("Enter the deleting task");
        todo.pop(delTask);
        console.log(`${delTask} deleted successfully`);
    } else{
        console.log("Wrong REQUEST");
    }
    req = prompt("Please enter your request");
}
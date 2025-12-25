let todo = [] ;
let req = prompt("enter your request:");

while(1){
    if(req === "quit"){
        console.log("quitting the app");
        break;
    }
    
    if(req === "list"){
        console.log("-------------------");
        for(let i=0;i<todo.length;i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("-------------------");
    }else if(req === "add"){
        let task = prompt("Add your todo");
        todo.push(task);
        console.log(`${task} added to the list`);
    }
    else if(req === "remove"){
        let task = prompt("Enter the task to remove");
        let idx = todo.indexOf(task);
        if(idx != -1){
            todo.splice(idx,1);
            console.log(`Removed ${task} from the list`);
        }else{
            console.log("Task not found in the list");
        }
    }else{
        console.log("Unknown request");
    }

    req = prompt("enter your request:");
}

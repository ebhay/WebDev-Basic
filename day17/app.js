let todo = [];
let req = prompt("plz enter your request");
while (true) {
    if (req === "quit") {
        console.log("Quit");
        break;
    }
    else if (req === "list") {
        console.log("list of tasks");
        for (task of todo) {
            console.log(task);
        }
    }
    else if (req === "add") {
        let newTask = prompt("Enter new task");
        todo.push(newTask);
    }
    else if (req === "del") {
        let delTask = prompt("Enter task to delete");
        let index = todo.indexOf(delTask);
        if (index > -1) {
            todo.splice(index, (index));
        }
        else {
            console.log("task not found");
        }
    }
    else {  
        console.log("wrong request");
    }
    req = prompt("plz enter your request");
}
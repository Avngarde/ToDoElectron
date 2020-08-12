const mongoose = require('mongoose');
const Task = require('/home/kamilpaczkowski/Documents/ToDoElectron/models/task').Task;
const uri = require('/home/kamilpaczkowski/Documents/ToDoElectron/connection_uri').uri;


function set_delete_button_index(){
    let task_element_quantity = document.getElementsByClassName('task_element').length;
    return task_element_quantity;
}

function create_task_element(task_description){
    let delete_button_index = set_delete_button_index();
    let new_task_html = `
         <div class="task_element">
                <div class="task_description">${task_description}</div>
                <a class="delete_task" onclick="delete_task(${delete_button_index })">X</a>
          </div>`
    document.getElementsByClassName('tasks_grid')[0].innerHTML += new_task_html;
}

function create_tasks_grid(){
    mongoose.connect(uri, (err, db) => {
        if (err) throw err;
        Task.find({}, (err, documents) => {
            if (err) throw err;
            documents.forEach(document => {
                let delete_button_index = set_delete_button_index();
                create_task_element(document.description);
            });
            mongoose.connection.close()
            return;
        })
    })
}
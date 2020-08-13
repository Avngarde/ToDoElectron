const mongoose = require('mongoose');
const Task = require('D:/ToDoElectron/models/task.js').Task;
const uri = require('D:/ToDoElectron/connection_uri.js').uri;


function clear_input(){
    document.getElementsByClassName('text_input')[0].value = '';
}

function add_new_task_to_grid(description){
    let new_task_html = `
         <div class="task_element">
                <div class="task_description">${description}</div>
                <a class="delete_task" onclick="delete_task('${description}')">X</a>
          </div>`
    document.getElementsByClassName('tasks_grid')[0].innerHTML += new_task_html;
}

function add_new_task(){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        let new_task_description = document.getElementsByClassName('text_input')[0].value;
        let new_task = new Task({description: new_task_description});
        new_task.save( (err) => {
            if (err) throw err;
            add_new_task_to_grid(new_task_description);
            clear_input();
            mongoose.connection.close();
            return;
        })
    });
}
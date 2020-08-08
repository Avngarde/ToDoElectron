const Task = require('../models/task').Task;
const { set_connection } = require('./connect_db');

function add_task(description){
    set_connection();
    let new_task = new Task({description: description});
    new_task.save(function(err){
        if (err){
            throw err;
        } else {
            console.log('Succesfully added new book.');
        }
    });
}


add_task("Wynieść śmieci");
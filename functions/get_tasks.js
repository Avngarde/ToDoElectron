const Task = require('../models/task').Task;
const { set_connection, current_mongoose_connection } = require('./connect_db');
const { close_connection } = require('./close_connection');

function get_tasks(){
    set_connection();
    Task.find({}, function(err, documents) {
        if (err) {
            throw err;
        } else{
            close_connection(current_mongoose_connection);
            return documents;
        }
    });
}

let tasks = get_tasks();

console.log(tasks);
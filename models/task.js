const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    description: String
});

const Task = mongoose.model("task", taskSchema);

module.exports = {
    Task: Task
}
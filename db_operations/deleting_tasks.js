function delete_task_grid_element(description){
    let task_descriptions = document.getElementsByClassName('task_description');
    for (const task_description of task_descriptions){
        if (task_description.innerText == description){
            console.log("YES");
            let task_element = task_description.parentElement;
            task_element.parentElement.removeChild(task_element);
        }
    }
}



function delete_task(description){
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        Task.deleteOne({description: description}, (err) => {
            if (err) throw err;
            delete_task_grid_element(description);
            mongoose.connection.close();
            return;
        });
    });
}  

function set_delete_button_index(){
    let task_element_quantity = document.getElementsByClassName('task_element').length;
    return task_element_quantity;
}

function create_loading_screen(){
    let tasks_grid = document.getElementsByClassName('tasks_grid')[0];
    tasks_grid.innerHTML = `<b>Loading!!!</b>`;
}

function delete_loading_screen(){
    let tasks_grid = document.getElementsByClassName('tasks_grid')[0];
    tasks_grid.innerHTML = ``;
}

function create_task_element(task_description){
    let new_task_html = `
         <div class="task_element">
                <div class="task_description">${task_description}</div>
                <a class="delete_task" onclick="delete_task('${task_description}')">X</a>
          </div>`
    document.getElementsByClassName('tasks_grid')[0].innerHTML += new_task_html;
}

function create_tasks_grid(){
    create_loading_screen();
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        Task.find({}, (err, documents) => {
            if (err) throw err;
            delete_loading_screen();
            documents.forEach(document => {
                create_task_element(document.description);
            });
            mongoose.connection.close()
            return;
        });
    });
}
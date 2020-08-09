function add_new_task(){
    let text_input_value = document.getElementsByClassName('text_input')[0].value;
    let delete_button_index = set_delete_button_index();
    let new_task_html = `
         <div class="task_element">
                <div class="task_description">${text_input_value}</div>
                <a class="delete_task" onclick="delete_task(${delete_button_index })">X</a>
          </div>`
    document.getElementsByClassName('tasks_grid')[0].innerHTML += new_task_html;
}
const mongoose = require('mongoose');

const uri = 'mongodb+srv://500PlusClient:SecretsOfVatican1978@cluster0-1kawz.azure.mongodb.net/ToDoElectronFlutter?retryWrites=true&w=majority'

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const taskSchema = new mongoose.Schema({
    description: String
})

const Task = mongoose.model('Task', taskSchema);


function get_tasks(url){
    mongoose.connect(url, connectionParams)
        .then( () => {
            console.log('Connected to database');
        })
        .catch( (err) => {
            throw err;
        })
}

get_tasks(url);

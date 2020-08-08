const mongoose = require('mongoose');

const uri = 'mongodb+srv://500PlusClient:SecretsOfVatican1978@cluster0-1kawz.azure.mongodb.net/ToDoElectronFlutter?retryWrites=true&w=majority';


function set_connection(){
    mongoose.connect(uri, {useNewUrlParser: true}, function(err, db){
        if (err){
            throw err;
        } else{
            console.log("Connected");
        }
    });
}

module.exports = {
    set_connection: set_connection,
    current_mongoose_connection: mongoose.connection
};
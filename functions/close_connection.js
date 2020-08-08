let mongoose = require('mongoose');

function close_connection(mongoose_connection){
    mongoose_connection.close();
    return;
}

module.exports = {
    close_connection: close_connection
}
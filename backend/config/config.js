const mongoose = require('mongoose');

const connectDb=()=>{

    mongoose.connect('mongodb://localhost:27017/gomobit_users_database',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((connection)=>console.log("Connected with Database"));

}
module.exports = connectDb;
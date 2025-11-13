const mongoose = require("mongoose");
const main=()=> {
    mongoose.connect("mongodb://localhost:27017/Restlife")
    .then(()=> console.log("Connected Successfully"))
    .catch((err) => console.log("connection error" ,err))
}
module.exports = main;
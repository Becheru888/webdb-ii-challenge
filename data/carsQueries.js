const db = require('./dbConfig')

module.exports = {
    get,
    createCar,
}


function get(){
    return db('cars');
}

function createCar({VIN, Make, Model, TransmisionTypes, TransmisionStatus}){
    return db("cars").insert({VIN, Make, Model, TransmisionTypes, TransmisionStatus})
}
const express =  require('express')
const consign = require('consign')
const db = require("../database/config");
const mongoose = require("mongoose");
var cors = require('cors');
 

module.exports = () => {
 
    const app = express()
    app.use(cors());
    app.use(express.json());
    mongoose.connect("mongodb+srv://dbSive:sive123@cluster0.omu0q.mongodb.net/sive?retryWrites=true&w=majority", { useNewUrlParser: true });
    consign()
        .include('controllers')
        .into(app)

    return app
}

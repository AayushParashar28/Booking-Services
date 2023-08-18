require('dotenv').config();
const express = require("express");
const connect = require("./src/config/database.config");


const app = express();

const setupserver = async function() {
    

    
    app.use(express.json());

    await connect();
    console.log("Database started");

    const PORT = process.env.PORT ;

    app.listen(PORT , (req , res) => {
        console.log('Server Started 4000');
    })

}

setupserver();
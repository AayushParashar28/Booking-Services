require('dotenv').config();
const express = require("express");

const setupserver = async function() {
    const app = express();

    app.use(express.json());

    const PORT = process.env.PORT ;

    app.listen(PORT , (req , res) => {
        console.log('Server Started 4000');
    })

}

setupserver();
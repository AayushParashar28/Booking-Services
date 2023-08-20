require('dotenv').config();

const mongoose = require("mongoose");
const DBURL = process.env.DBURL;

const connect = async () => {
  try {
    await mongoose.connect(DBURL);
  } catch (error) {
    throw error;
  }
};

module.exports = connect;
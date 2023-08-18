const mongoose = require("mongoose");
// const DBURL = process.env.DB;

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://ayush:oeikeu6Lz4Ig1o77@cluster0.xufxvoy.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    throw error;
  }
};

module.exports = connect;
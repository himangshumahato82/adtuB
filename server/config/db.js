const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const MONGO_URL=process.env.MONGO_URL
const ConnectDB = () => {
  mongoose
    .connect(MONGO_URL, { useNewUrlParser: true })
    .then((res) => console.log(res.connection.db.databaseName))
    .catch((error) => console.log(error));
};
module.exports = ConnectDB;
